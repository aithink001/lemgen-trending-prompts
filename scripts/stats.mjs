import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('data/trending-prompts.json', 'utf8'));
const byModel = {};
const byMediaType = {};
for (const item of data) {
  byModel[item.model || 'unknown'] = (byModel[item.model || 'unknown'] || 0) + 1;
  byMediaType[item.media_type || 'image'] =
    (byMediaType[item.media_type || 'image'] || 0) + 1;
}

console.log(JSON.stringify({ total: data.length, byModel, byMediaType }, null, 2));
