# Publicar na Vercel

## Arquivos de arte

O pacote inclui os dois arquivos originais, preservados sem recompressão:

- `public/campaign.jpg` — carrossel completo (12:5).
- `public/story.jpg` — Story (9:16).

Os dois projetos já estão integrados: carrossel panorâmico e Story com ampliação.

## Opção 1 — GitHub + Vercel

1. Extraia o ZIP e envie o conteúdo da pasta do projeto para um repositório no GitHub. Inclua `public/`, `app/`, `package.json`, `package-lock.json` e os arquivos de configuração.
2. Na Vercel, selecione **Add New → Project** e importe esse repositório.
3. Use a pasta que contém `package.json` como **Root Directory**.
4. O preset é **Next.js**. O arquivo `vercel.json` define o build `npm run build` e a saída `out`.
5. Use Node.js 22.x. Não são necessárias variáveis de ambiente.
6. Clique em **Deploy**.

## Opção 2 — Terminal

Na pasta extraída que contém `package.json`:

```sh
npm ci
npm run build
npx vercel
```

Siga as instruções da CLI para entrar na sua conta e criar uma prévia. Depois de revisar, publique com:

```sh
npx vercel --prod
```

O site é estático: não precisa de banco de dados, serviços externos ou credenciais do Sites. As fontes são incluídas localmente. O diretório `.openai` e os metadados Git do ambiente de criação não são necessários na Vercel e serão excluídos do pacote de entrega.
