---
sidebar_position: 2
title: Authentication
description: How to authenticate with the Mikav API.
---

# Authentication

All API requests to Mikav require authentication. This guide covers how to obtain and use your API credentials.

## API Keys

### Obtaining an API Key

1. Sign up or log in at [mikav.in](https://mikav.in)
2. Navigate to **Dashboard > API Keys**
3. Click **Create New Key**
4. Copy and store your key securely

:::warning
Never expose your API key in client-side code or public repositories. Use environment variables or a secrets manager.
:::

### Using Your API Key

Include your API key in the `Authorization` header:

```bash
curl -X POST https://api.mikav.in/v1/chat \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "mikav-1",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

### SDK Authentication

```javascript
import { Mikav } from '@mikav/sdk';

// Using environment variable (recommended)
const mikav = new Mikav({
  apiKey: process.env.MIKAV_API_KEY,
});
```

```python
import os
from mikav import Mikav

# Using environment variable (recommended)
client = Mikav(api_key=os.environ["MIKAV_API_KEY"])
```

## Security Best Practices

- Rotate API keys periodically
- Use separate keys for development and production
- Set appropriate scopes and permissions for each key
- Monitor usage in your dashboard for anomalies
- Revoke compromised keys immediately
