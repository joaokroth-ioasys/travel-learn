# Ambientes: Desenvolvimento e Produção

> Plano para outro desenvolvedor montar dois ambientes (dev e prod) deste projeto.
> **Nada aqui foi executado** — é só o passo a passo.

## Contexto do projeto

- App em `app/`: **React 19 + Vite** — site estático puro (SPA).
- **Não há backend, banco de dados nem chaves de API/segredos.**
- `npm run build` gera arquivos estáticos em `app/dist/`.

Consequência: não precisamos de Docker, servidores ou variáveis de ambiente
secretas. "Dois ambientes" aqui é só **duas branches → duas URLs**, com deploy
automático feito por um host estático. É o caminho mais simples que funciona.

## Modelo dos dois ambientes

| Ambiente | Branch git | Quando atualiza | URL |
|----------|-----------|-----------------|-----|
| Produção | `main` | merge na `main` | `https://<projeto>.<host>.app` (domínio final) |
| Desenvolvimento | `dev` | push na `dev` | URL de preview/staging gerada pelo host |

Fluxo de trabalho:

```
feature/x  →  dev (staging, testar)  →  main (produção)
```

Ninguém faz push direto na `main`. Todo código passa pela `dev`, é testado na
URL de staging, e só então vai pra `main` via Pull Request.

## Passo a passo (one-time setup)

### 1. Inicializar o git no repositório

Hoje só `app/` tem `.gitignore`. Decida a raiz do repo. Recomendo versionar a
pasta `app/` como repositório (os `.md` da raiz são notas de design, podem
ficar fora ou em outra branch/pasta `docs/`).

```bash
cd app
git init
git add .
git commit -m "Initial commit"
```

### 2. Criar o repositório no GitHub e subir

```bash
gh repo create german-travel-learn --private --source=. --remote=origin --push
```

(ou criar pela interface do GitHub e `git remote add origin <url>` + `git push -u origin main`)

### 3. Criar a branch de desenvolvimento

```bash
git checkout -b dev
git push -u origin dev
```

### 4. Escolher o host estático

Qualquer um destes faz deploy automático por branch, de graça, sem configuração
de servidor. **Recomendo Vercel** (mais simples pra Vite/React):

- **Vercel** — conecta o repo, detecta Vite sozinho.
- Netlify ou Cloudflare Pages — equivalentes, mesma ideia.

Config no host (caso não detecte automático):
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `app` (se o repo tiver mais coisa na raiz)

### 5. Mapear branch → ambiente no host

Na Vercel isso já vem pronto:
- Push em qualquer branch que **não** seja a de produção → **Preview Deployment**
  (URL única por branch/commit). É o nosso ambiente de **dev**.
- Push na branch de produção (definir como `main` nas Settings → Git) →
  **Production Deployment**. É o nosso **prod**.

Resultado: a `dev` ganha uma URL de staging estável e a `main` a URL final.

### 6. Proteger a `main` (evita push direto em produção)

GitHub → Settings → Branches → Branch protection rule para `main`:
- Require a pull request before merging.
- (Opcional) Require status checks (o lint/build, ver abaixo).

## Fluxo do dia a dia (para qualquer dev)

```bash
# começar uma tarefa
git checkout dev && git pull
git checkout -b feature/minha-tarefa

# trabalhar local
cd app && npm install && npm run dev   # http://localhost:5173

# subir e testar em staging
git push -u origin feature/minha-tarefa
# abrir PR para dev → testar na URL de preview da Vercel

# liberar pra produção
# abrir PR de dev → main → merge → deploy automático em prod
```

## Verificação local antes de subir

```bash
cd app
npm run lint      # oxlint
npm run build     # garante que o build de produção passa
npm run preview   # serve o dist/ localmente, igual produção
```

## (Opcional) CI no GitHub Actions

Só vale a pena se quiser bloquear merge quando o lint/build quebrar.
Arquivo `.github/workflows/ci.yml`:

```yaml
name: CI
on: [pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: app
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm, cache-dependency-path: app/package-lock.json }
      - run: npm ci
      - run: npm run lint
      - run: npm run build
```

---

### O que foi deixado de fora de propósito

- **Variáveis de ambiente / arquivos `.env`** — o app não tem segredos nem
  back-end. Adicionar quando surgir uma API/chave: criar `.env` (local),
  usar `import.meta.env.VITE_*` no código, e cadastrar os valores por ambiente
  nas Settings do host (um valor para Preview/dev, outro para Production).
- **Docker / servidor próprio** — desnecessário para site estático. Adicionar só
  se aparecer back-end.
- **Terceiro ambiente (homologação)** — `dev` (preview) + `main` (prod) cobrem.
  Adicionar uma branch `staging` se um dia precisar de um ambiente fixo de QA.
