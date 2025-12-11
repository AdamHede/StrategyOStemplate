# Strategy OS

**An AI-Augmented "Playing to Win" Strategy System**

This repository contains a living, breathing business strategy operating system. It combines the rigorous "Playing to Win" framework with modern AI agent workflows to create a strategy that is dynamic, traceable, and easily updatable.

## Core Concepts

### 1. The Framework: "Playing to Win"
The strategy is structured around the five integrated choices of the "Playing to Win" cascade (Lafley & Martin):
1.  **Winning Aspiration**: What is our winning purpose?
2.  **Where to Play**: Where will we compete?
3.  **How to Win**: How will we win where we have chosen to play?
4.  **Capabilities**: What capabilities must be in place?
5.  **Management Systems**: What systems are required?

### 2. The Agentic Workflow
This isn't just a folder of documents. It is a workspace designed for collaboration between a Human Strategist and an AI Agent.
-   **Source of Truth**: The files in `/strategy` are the authoritative record.
-   **Inbox-Driven Updates**: New information (articles, data, ideas) is dropped into `/inbox` and processed systematically.
-   **Traceability**: Every change to the strategy is linked to source materials and documented in `/archive`.

## Directory Structure

| Directory | Purpose |
| :--- | :--- |
| **`/strategy`** | **The Source of Truth.** Contains the 5 core Markdown files defining the current strategy. |
| **`/inbox`** | Drop raw files here (PDFs, notes, articles). The Agent monitors this folder to initiate processing. |
| **`/wiki`** | A React-based static site generator that turns the `/strategy` folder into a beautiful, navigable website. |
| **`/skills`** | Knowledge base for the Agent. Contains methodologies, templates, and "how-to" guides for strategic tasks. |
| **`/archive`** | Historical record. Processed inbox items and superseded strategy files move here. |
| **`/outputs`** | Generated deliverables (presentations, reports) derived from the core strategy. |

## How It Works
 
 The system operates on three primary workflows:
 
 ### 1. Inbox-Driven (Human-First)
 *For processing existing materials.*
 1.  **Drop a file in `/inbox`** (reports, notes, data).
 2.  **Agent Analysis**: The Agent analyzes the file and proposes an Implementation Plan.
 3.  **Update**: Upon approval, the Agent updates the `/strategy` files and rebuilds the wiki.
 
 ### 2. Autonomous (AI-First)
 *For filling logical gaps.*
 1.  **Identify Gap**: The Agent identifies missing data or logical inconsistencies.
 2.  **Research**: The Agent conducts web research or internal analysis.
 3.  **Propose**: Findings are presented as a research artifact for human review.
 
 ### 3. The Interview Protocol (Collaborative)
 *For extracting strategic wisdom.*
 1.  **Formulate**: The Agent researches context and formulates 1-5 "Beautiful Questions."
 2.  **Interview**: The Agent interviews the Human Strategist to extract "dark data" and judgment.
 3.  **Synthesize**: The dialogue is converted into formal strategy updates.

## Agent Instructions (`AGENT.md`)
The file `AGENT.md` in the root directory contains the "operating system" for the AI Agent. It defines:
-   Boot sequence and priorities.
-   Protocols for handling IP (Client vs. Firm).
-   Detailed workflows for processing materials and resolving conflicts.

---
*Built for the future of strategic consulting.*
