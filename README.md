<h1 align="center">LemGen Trending Prompts</h1>

<p align="center">
  <strong>A clean JSON prompt library for AI image/video agents, MCP servers, and creative workflows.</strong>
  <br>
  <sub>4,533 curated prompts · GPT Image · Seedance · Nano Banana · Midjourney · source-linked to LemGen</sub>
</p>

<p align="center">
  <a href="https://github.com/aithink001/lemgen-trending-prompts/actions"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/aithink001/lemgen-trending-prompts/validate.yml?branch=main&style=flat-square"></a>
  <a href="https://lemgen.org"><img alt="LemGen" src="https://img.shields.io/badge/Source-LemGen-111?style=flat-square"></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square"></a>
</p>

---

## What Is This?

This repository is the data layer behind
[`lemgen-ai-design-mcp`](https://github.com/aithink001/lemgen-ai-design-mcp).

It provides a curated, agent-friendly JSON dataset of AI image and video
prompts. Each entry includes the prompt text, model, tags, preview media,
engagement fields, and a source URL back to LemGen.

Use it for:

- MCP prompt search
- AI image/video inspiration tools
- prompt engineering examples
- model comparison datasets
- creative agent memory
- prompt packs and galleries

## Preview

<p align="center">
  <a href="https://lemgen.org/prompt/2071424170383364525"><img src="https://lemgen.org/lemgen/api-image-tweets-2071424170383364525-0-1adbcf3d.jpg" width="24%" alt="Editorial lifestyle prompt"></a>
  <a href="https://lemgen.org/prompt/2068374577009275026"><img src="https://lemgen.org/lemgen/api-image-tweets-2068374577009275026-0-e7c26ef1.jpg" width="24%" alt="Logo prompt"></a>
  <a href="https://lemgen.org/prompt/community_86e7eecf-8940-4616-95bc-8e99f26beafa"><img src="https://lemgen.org/lemgen/api-image-generations-2026-06-community_86e7eecf-8940-4616-95bc-8e99f26beafa-09a9aa30.png" width="24%" alt="Midjourney prompt"></a>
  <a href="https://lemgen.org/prompt/cdanceai-seedance-seedance-2-0-15-second-cinematic-japanese-romance-short-film"><img src="https://cdn.lemgen.org/uploads/seedance-2-0/seedance-2-0-15-second-cinematic-japanese-romance-short-film/cover-be8dfe1fb4.jpg" width="24%" alt="Seedance video prompt"></a>
</p>

## Dataset

File:

```txt
data/trending-prompts.json
```

Current snapshot:

| Type | Count |
| --- | ---: |
| Image prompts | 2,593 |
| Video prompts | 1,940 |
| Total | 4,533 |

Model coverage:

| Model | Count |
| --- | ---: |
| GPT Image | 1,935 |
| Seedance 2.0 | 1,940 |
| Nano Banana Pro | 489 |
| Midjourney | 104 |
| Other image models | 65 |

## Schema

```ts
type GalleryPrompt = {
  id: string;
  rank: number;
  title: string;
  prompt: string;
  author: string;
  author_name: string;
  handle?: string;
  likes: number;
  views: number;
  image: string;
  images: string[];
  video_url?: string;
  media_type: "image" | "video";
  model: string;
  categories: string[];
  rating: number;
  score: number;
  date: string;
  source_url: string;
};
```

## Usage

```js
import prompts from './data/trending-prompts.json' assert { type: 'json' };

const productPrompts = prompts.filter((item) =>
  item.categories.some((name) => /product|brand/i.test(name))
);

console.log(productPrompts[0].prompt);
```

Search by keyword:

```js
const query = 'cinematic perfume product photography';
const results = prompts.filter((item) =>
  [
    item.title,
    item.prompt,
    item.model,
    ...(item.categories || []),
  ]
    .join(' ')
    .toLowerCase()
    .includes(query.toLowerCase())
);
```

## Companion MCP Server

Use this data directly inside AI coding tools:

https://github.com/aithink001/lemgen-ai-design-mcp

The MCP server adds:

- `search_gallery`
- `get_inspiration`
- `enhance_prompt`
- `list_models`
- `prompt_tools`
- `manage_preferences`
- `generate_image`
- `generate_video`

## Refresh

This repository is exported from the LemGen application database:

```bash
cd ../lemgen
pnpm lemgen:mcp:maintain
```

The exporter keeps public URLs on `https://lemgen.org` and runs a brand-clean
scan before publishing.

## License

MIT
