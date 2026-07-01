# LemGen Trending Prompts

Curated AI image and video prompts from LemGen, exported as a clean JSON
dataset for agents, MCP servers, prompt tools, and creative workflows.

Website: https://lemgen.org

## Data

`data/trending-prompts.json`

Each prompt includes:

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

## Usage

```js
import prompts from './data/trending-prompts.json' assert { type: 'json' };

console.log(prompts[0].prompt);
```

## Refresh

This repository is refreshed from the LemGen app database:

```bash
cd ../lemgen
pnpm lemgen:mcp:export
```

## License

MIT
