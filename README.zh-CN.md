# LemGen Trending Prompts

LemGen 精选 AI 图片/视频提示词数据集，适合 MCP、Agent、提示词工具和创意工作流使用。

官网：https://lemgen.org

## 数据文件

`data/trending-prompts.json`

主要字段：

- `id`
- `rank`
- `title`
- `prompt`
- `author`
- `model`
- `categories`
- `image`
- `images`
- `video_url`
- `media_type`
- `likes`
- `views`
- `source_url`

## 更新

从 LemGen 主站数据库导出：

```bash
cd ../lemgen
pnpm lemgen:mcp:export
```

## 许可证

MIT
