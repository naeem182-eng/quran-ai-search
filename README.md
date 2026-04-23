# AI Quran Semantic Search

An AI-powered semantic search engine for the Qur'an that allows users to search ayahs by **meaning** instead of exact keywords.

Traditional search systems rely on **keyword matching**, which fails when users search by concepts or ideas.
This project demonstrates how **AI embeddings and vector similarity** can retrieve relevant ayahs even when the exact keyword is not present in the text.

---

# Live Demo

https://quran-ai-search.vercel.app

Example search queries:

* mercy
* forgiveness
* patience
* charity
* creation

The system returns ayahs that are **semantically related** to the concept.

---

# Project Overview

Most Qur'an search engines rely on keyword matching.

Example:

Searching for:


"forgiveness"


may fail if the ayah contains related Arabic words such as:

* غفر
* عفو
* رحمة

This project solves that limitation using **semantic search**.

Instead of matching words directly, the system converts text into **vector embeddings** and retrieves ayahs based on **meaning similarity**.

---

# System Architecture

User Query
↓
Next.js Frontend
↓
API Route (`/api/embed`)
↓
Python Embedding Script
↓
SentenceTransformer Model
↓
Query Vector (384 dimensions)
↓
Cosine Similarity Search
↓
Top Matching Ayahs

---

# Tech Stack

## Frontend

* Next.js
* React
* TypeScript

## Backend

* Next.js API Routes
* Node.js

## AI / NLP

* Python
* SentenceTransformers
* all-MiniLM-L6-v2

## Algorithms

* Sentence Embeddings
* Vector Similarity
* Cosine Similarity Ranking

# Key Features

## Semantic Search

Users can search ayahs by **meaning**, not exact keywords.

Example:

Query

"patience"

Results may include ayahs related to the concept of **sabr (صبر)** even if the word "patience" is not present.

## Multilingual Context

The system uses both:

* Arabic text
* Thai translation

This helps the embedding model capture deeper semantic meaning.

## Vector Similarity Ranking

Each ayah is converted into a **vector embedding**.

When a user submits a query:

1. The query is converted into a vector
2. Cosine similarity is computed between the query vector and ayah vectors
3. The most semantically similar ayahs are returned


# Example

Query:

"forgiveness"

Possible results:

* Surah 2:52
* Surah 36:27
* Surah 38:25
* Surah 42:43

These ayahs contain related concepts such as:

* forgiveness
* mercy
* repentance

# Challenges Solved

## Python + Node Integration

Problem:

Unexpected end of JSON input

Cause:

Python stdout streaming returned incomplete JSON.

Solution:

Buffer the entire stdout output before parsing JSON in Node.js.

## Semantic Noise

Some queries such as:

"patience"

may produce multiple semantic contexts.

To improve relevance, queries can include additional context:

"patience sabr"


# Performance

Embedding model used:

all-MiniLM-L6-v2

Characteristics:

* 384-dimensional embeddings
* lightweight model
* fast inference
* suitable for real-time search

Manual testing results:

~80–90% semantic relevance

# Future Improvements

Potential improvements include:

Vector database integration

* Pinecone
* Weaviate
* pgvector

Improved embedding models

* bge-large-en
* multilingual embeddings

AI question answering layer

User question
↓
Semantic search
↓
AI-generated summary

This could evolve the project into an **AI Quran Assistant**.


# Portfolio Value

This project demonstrates practical skills in:

* AI / NLP
* Semantic Search
* Vector Similarity Algorithms
* Fullstack Development
* Python + Node.js Integration

Relevant roles:

* AI Engineer
* NLP Engineer
* Backend Developer
* Fullstack Developer

# Author

Portfolio project exploring the application of **AI semantic search** to Qur'anic text.
