# Ilha de Caras — apresentação de Alefe Santos

Portfólio de processo criativo. Não é o site oficial do lodge.

## Desenvolvimento

Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
```

## Produção

```sh
npm run build
```

Next.js exporta a versão estática em `out/`. Hospede o conteúdo dessa pasta em um servidor estático. Fontes são servidas localmente. React, TypeScript, Tailwind CSS, GSAP/ScrollTrigger e Lucide compõem a implementação.

## Artes originais incluídas

- `public/campaign.jpg`: composição original, 3240 × 1350 px, recortada somente por CSS para os três slides.
- `public/story.jpg`: Story original, 1080 × 1920 px, com seção editorial e ampliação.

Os dois arquivos foram copiados integralmente do ZIP enviado por Alefe, sem recompressão ou alteração da arte. O Story é uma imagem estática, não um Reel em vídeo.

Para publicar na Vercel, siga `VERCEL.md`. Não são necessárias variáveis de ambiente. O pacote exportado não depende do Sites e exclui `.openai`, `.git`, caches e dependências instaladas.

## Acessibilidade e interações

Navegação por âncoras, atalho para conteúdo, foco visível, menu móvel com estado expandido, controles do carrossel por teclado e gestos, diálogo nativo com Escape e foco contido, movimento reduzido, marcadores acionáveis e slider com rótulo. A análise permanece acessível também por uma lista textual.

## Verificação

Build de produção e verificação TypeScript. A inspeção visual no navegador depende do controle de browser disponibilizado no ambiente; não foi executada quando esse controle estava ausente.
