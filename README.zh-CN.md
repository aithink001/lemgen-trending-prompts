<h1 align="center">
  LemGen Trending Prompts
</h1>

<p align="center">
  <strong>面向 AI 图片/视频 Agent、MCP Server 和创意产品的干净、可追溯提示词数据集。</strong>
  <br>
  <sub>4,533 条精选 prompt · GPT Image · Seedance · Nano Banana · Midjourney · 图片/视频预览 · LemGen 来源 URL</sub>
</p>

<p align="center">
  <a href="https://github.com/aithink001/lemgen-trending-prompts/actions"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/aithink001/lemgen-trending-prompts/validate.yml?branch=main&style=flat-square"></a>
  <img alt="Dataset" src="https://img.shields.io/badge/Type-Prompt_Dataset-blue?style=flat-square">
  <img alt="Prompts" src="https://img.shields.io/badge/Prompts-4,533-111?style=flat-square">
  <a href="https://lemgen.org"><img alt="LemGen" src="https://img.shields.io/badge/Source-LemGen-111?style=flat-square"></a>
  <a href="LICENSE"><img alt="MIT" src="https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square"></a>
</p>

<p align="center">
  <a href="#数据集">数据集</a> ·
  <a href="#schema">Schema</a> ·
  <a href="#使用示例">使用示例</a> ·
  <a href="#配套-mcp-server">MCP Server</a> ·
  <a href="README.md">English</a>
</p>

---

## 这是什么？

这是 [`lemgen-ai-design-mcp`](https://github.com/aithink001/lemgen-ai-design-mcp) 的公开数据层。

它提供一份适合 Agent 使用的 AI 图片/视频提示词 JSON 数据集。每条数据都保留真实创作工具需要的上下文：标题、prompt、模型、标签、预览媒体、热度字段、排序信息，以及回到 LemGen 的来源链接。

适合用于：

- MCP Server 的 prompt search；
- AI 图片/视频灵感面板；
- prompt engineering 示例和 benchmark；
- 模型对比数据集；
- 创意 Agent 记忆；
- prompt packs、画廊和 SEO 内容页。

## 预览

<p align="center">
  <a href="https://lemgen.org/prompt/2071424170383364525"><img src="https://lemgen.org/lemgen/api-image-tweets-2071424170383364525-0-1adbcf3d.jpg" width="24%" alt="Editorial lifestyle prompt"></a>
  <a href="https://lemgen.org/prompt/2068374577009275026"><img src="https://lemgen.org/lemgen/api-image-tweets-2068374577009275026-0-e7c26ef1.jpg" width="24%" alt="Logo prompt"></a>
  <a href="https://lemgen.org/prompt/community_86e7eecf-8940-4616-95bc-8e99f26beafa"><img src="https://lemgen.org/lemgen/api-image-generations-2026-06-community_86e7eecf-8940-4616-95bc-8e99f26beafa-09a9aa30.png" width="24%" alt="Midjourney prompt"></a>
  <a href="https://lemgen.org/prompt/cdanceai-seedance-seedance-2-0-15-second-cinematic-japanese-romance-short-film"><img src="https://cdn.lemgen.org/uploads/seedance-2-0/seedance-2-0-15-second-cinematic-japanese-romance-short-film/cover-be8dfe1fb4.jpg" width="24%" alt="Seedance video prompt"></a>
</p>

## 数据集

```txt
data/trending-prompts.json
```

当前快照：

| 类型 | 数量 |
| --- | ---: |
| 图片 prompt | 2,593 |
| 视频 prompt | 1,940 |
| 总计 | 4,533 |

模型覆盖：

| 模型 | 数量 |
| --- | ---: |
| GPT Image | 1,935 |
| Seedance 2.0 | 1,940 |
| Nano Banana Pro | 489 |
| Midjourney | 104 |
| 其他图片模型 | 65 |

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

## 使用示例

导入数据：

```js
import prompts from './data/trending-prompts.json' assert { type: 'json' };
```

筛选产品摄影 prompt：

```js
const productPrompts = prompts.filter((item) =>
  item.categories.some((name) => /product|brand|commercial/i.test(name))
);

console.log(productPrompts[0].prompt);
```

关键词搜索：

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

区分图片和视频：

```js
const imagePrompts = prompts.filter((item) => item.media_type === 'image');
const videoPrompts = prompts.filter((item) => item.media_type === 'video');
```

## 配套 MCP Server

直接在 AI coding tools 里使用这份数据：

https://github.com/aithink001/lemgen-ai-design-mcp

MCP Server 提供搜索、完整灵感查询、模型参考、多语言提示词工具、本地偏好，以及可选的 LemGen 生成能力。

## 更新

这份数据从 LemGen 主站数据库导出：

```bash
cd ../lemgen
pnpm lemgen:mcp:maintain
```

导出流程会保持 `https://lemgen.org` 公开 URL、校验 JSON 结构，并在发布前执行品牌扫描。

## License

MIT
