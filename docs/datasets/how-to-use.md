---
sidebar_position: 2
title: How to Use Datasets
description: Instructions for downloading and using Mikav datasets.
---

# How to Use Datasets

This guide covers how to access, download, and work with Mikav datasets.

## Download via Hugging Face

```python
from datasets import load_dataset

# Load the Malayalam text corpus
dataset = load_dataset("mikav-ai/mikav-text-1")

# Preview the data
print(dataset["train"][0])
```

## Download via Mikav SDK

```python
from mikav import datasets

# List available datasets
available = datasets.list()
print(available)

# Download a specific dataset
data = datasets.load("mikav-text-1")
```

## Data Format

Datasets are provided in standard formats:

- **Text corpora** — JSONL with `text`, `source`, and `metadata` fields
- **Conversational** — JSONL with `messages` array (role/content pairs)
- **Code** — JSONL with `code`, `language`, and `comments` fields

### Example Record (Text)

```json
{
  "text": "കേരളം ഇന്ത്യയുടെ തെക്കുപടിഞ്ഞാറ് ഭാഗത്തുള്ള ഒരു സംസ്ഥാനമാണ്.",
  "source": "wikipedia",
  "metadata": {
    "topic": "geography",
    "quality_score": 0.95
  }
}
```

## Preprocessing

```python
from mikav import datasets

# Load with preprocessing
data = datasets.load("mikav-text-1", preprocess=True)

# Custom filtering
filtered = data.filter(lambda x: x["metadata"]["quality_score"] > 0.9)
```

## Citation

If you use Mikav datasets in your research, please cite:

```bibtex
@misc{mikav2026,
  title={Mikav Open Malayalam Datasets},
  author={Mikav AI Team},
  year={2026},
  url={https://github.com/mikav-ai}
}
```
