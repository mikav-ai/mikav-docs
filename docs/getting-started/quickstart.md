---
sidebar_position: 1
title: Quickstart
description: Get started with Mikav in minutes.
---

# Quickstart

Get up and running with Mikav in just a few minutes.

## Prerequisites

- A Mikav account (sign up at [mikav.in](https://mikav.in))
- An API key (available from your dashboard)

## Installation

Install the Mikav SDK in your project:

```bash
# Node.js / JavaScript
npm install @mikav/sdk

# Python
pip install mikav
```

## Your First Request

### JavaScript

```javascript
import { Mikav } from '@mikav/sdk';

const mikav = new Mikav({ apiKey: 'your-api-key' });

const response = await mikav.chat({
  model: 'mikav-1',
  messages: [
    { role: 'user', content: 'നമസ്കാരം! എന്നെ സഹായിക്കാമോ?' }
  ],
});

console.log(response.message);
```

### Python

```python
from mikav import Mikav

client = Mikav(api_key="your-api-key")

response = client.chat(
    model="mikav-1",
    messages=[
        {"role": "user", "content": "നമസ്കാരം! എന്നെ സഹായിക്കാമോ?"}
    ],
)

print(response.message)
```

## What's Next?

- [Authentication](../product/authentication.md) — Learn about API keys and auth flows
- [Using the Copilot](../product/using-the-copilot.md) — Explore copilot features
- [Models Overview](../models/overview.md) — See available models and capabilities
