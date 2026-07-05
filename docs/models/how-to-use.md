---
sidebar_position: 2
title: How to Use Models
description: Integrate Mikav models into your applications.
---

# How to Use Models

This guide covers how to use Mikav models via the API and locally.

## Via API

### Chat Completions

```javascript
import { Mikav } from '@mikav/sdk';

const mikav = new Mikav({ apiKey: process.env.MIKAV_API_KEY });

const response = await mikav.chat({
  model: 'mikav-1',
  messages: [
    { role: 'system', content: 'You are a helpful assistant that responds in Malayalam.' },
    { role: 'user', content: 'What is the capital of Kerala?' }
  ],
  temperature: 0.7,
  max_tokens: 500,
});

console.log(response.message.content);
```

### Streaming

```javascript
const stream = await mikav.chat({
  model: 'mikav-1',
  messages: [{ role: 'user', content: 'Tell me a story in Malayalam.' }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.content);
}
```

## Running Locally

### With Ollama

```bash
# Pull the Mikav model
ollama pull mikav-ai/mikav-1

# Run it
ollama run mikav-ai/mikav-1
```

### With Transformers (Python)

```python
from transformers import AutoModelForCausalLM, AutoTokenizer

model_name = "mikav-ai/mikav-1"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

inputs = tokenizer("നമസ്കാരം, ", return_tensors="pt")
outputs = model.generate(**inputs, max_new_tokens=100)
print(tokenizer.decode(outputs[0]))
```

## Fine-Tuning

```python
from mikav import FineTune

job = FineTune.create(
    model="mikav-1",
    training_data="path/to/your/data.jsonl",
    hyperparameters={
        "epochs": 3,
        "learning_rate": 2e-5,
    },
)

print(f"Fine-tune job started: {job.id}")
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| model | string | — | Model ID to use |
| messages | array | — | Conversation messages |
| temperature | float | 0.7 | Randomness (0.0–2.0) |
| max_tokens | int | 500 | Maximum response length |
| stream | bool | false | Enable streaming |
| top_p | float | 1.0 | Nucleus sampling |

## Error Handling

```javascript
try {
  const response = await mikav.chat({ model: 'mikav-1', messages });
} catch (error) {
  if (error.status === 429) {
    // Rate limited — wait and retry
  } else if (error.status === 401) {
    // Invalid API key
  }
}
```
