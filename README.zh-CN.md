<h1 align="center">LemGen Trending Prompts</h1>

<p align="center">
  <strong>面向 AI 图片/视频 Agent、MCP Server 和创意工作流的干净 JSON 提示词库。</strong>
  <br>
  <sub>4,533 条精选 prompt · GPT Image · Seedance · Nano Banana · Midjourney · 全部链接回 LemGen</sub>
</p>

<p align="center">
  <a href="https://github.com/aithink001/lemgen-trending-prompts/actions"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/aithink001/lemgen-trending-prompts/validate.yml?branch=main&style=flat-square"></a>
  <a href="https://lemgen.org"><img alt="LemGen" src="https://img.shields.io/badge/Source-LemGen-111?style=flat-square"></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square"></a>
</p>

---

## 这是什么

这是 [`lemgen-ai-design-mcp`](https://github.com/aithink001/lemgen-ai-design-mcp) 的数据层。

它提供一个适合 Agent 使用的 AI 图片/视频提示词 JSON 数据集。每条数据包含 prompt、模型、标签、预览媒体、热度字段，以及回到 LemGen 的来源链接。

适合用于：

- MCP prompt search
- AI 图片/视频灵感工具
- prompt engineering 示例
- 模型对比数据集
- 创意 Agent 记忆
- prompt packs 和画廊

## 预览

<p align="center">
  <a href="https://lemgen.org/prompt/2071424170383364525"><img src="https://lemgen.org/lemgen/api-image-tweets-2071424170383364525-0-1adbcf3d.jpg" width="24%" alt="Editorial lifestyle prompt"></a>
  <a href="https://lemgen.org/prompt/2068374577009275026"><img src="https://lemgen.org/lemgen/api-image-tweets-2068374577009275026-0-e7c26ef1.jpg" width="24%" alt="Logo prompt"></a>
  <a href="https://lemgen.org/prompt/community_86e7eecf-8940-4616-95bc-8e99f26beafa"><img src="https://lemgen.org/lemgen/api-image-generations-2026-06-community_86e7eecf-8940-4616-95bc-8e99f26beafa-09a9aa30.png" width="24%" alt="Midjourney prompt"></a>
  <a href="https://lemgen.org/prompt/cdanceai-seedance-seedance-2-0-15-second-cinematic-japanese-romance-short-film"><img src="https://cdn.lemgen.org/uploads/seedance-2-0/seedance-2-0-15-second-cinematic-japanese-romance-short-film/cover-be8dfe1fb4.jpg" width="24%" alt="Seedance video prompt"></a>
</p>

## 数据集

文件：

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

```js
import prompts from './data/trending-prompts.json' assert { type: 'json' };

const productPrompts = prompts.filter((item) =>
  item.categories.some((name) => /product|brand/i.test(name))
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

## 配套 MCP Server

直接在 AI coding tools 里使用这份数据：

https://github.com/aithink001/lemgen-ai-design-mcp

MCP Server 提供：

- `search_gallery`
- `get_inspiration`
- `enhance_prompt`
- `list_models`
- `prompt_tools`
- `manage_preferences`
- `generate_image`
- `generate_video`

## 更新

从 LemGen 主站数据库导出：

```bash
cd ../lemgen
pnpm lemgen:mcp:maintain
```

导出器会强制使用 `https://lemgen.org` 公开 URL，并在发布前执行品牌扫描。

## License

MIT
