# Standard Prompt for External AI Processing

Use this prompt when you need to process non-text files (PDFs, images, slides, etc.) using a web-based AI (like ChatGPT, Claude.ai, or Gemini) to generate an input compatible with this repository.

---

**Copy and paste the following prompt along with the file(s) you need to process:**

> I am working on a business strategy project using the **Playing to Win** framework (Winning Aspiration, Where to Play, How to Win, Capabilities, Management Systems).
> 
> I have a local AI agent that manages the strategy documentation, but it **can only read text files (Markdown)**. It cannot read the file I am attaching (PDF, PPTX, Image, etc.).
> 
> **Your Goal:**
> Read the attached file and convert its contents into a **rich Markdown document** that serves as a high-fidelity input for my strategy agent.
> 
> **Please include:**
> 1.  **Summary:** A brief overview of what the document is.
> 2.  **Key Insights & Data:** Extract specific numbers, facts, market research findings, or competitor intelligence. detailed accuracy is important.
> 3.  **Strategic Implications:** Explicitly highlight anything relevant to the 5 boxes of the strategy cascade (Aspiration, WTP, HTW, Capabilities, Systems).
> 4.  **Quotes:** If there are significant statements, quote them directly.
> 5.  **Visuals (Description):** If there are charts or diagrams, describe what they show in detail.
> 
> **Format:**
> - Output strictly as **Markdown**.
> - Use clear headers, bullet points, and tables where appropriate.
> - Do not omit critical details; I would rather have a long summary than a missed insight.
> 
> **Context:**
> This output will be placed in an "inbox" for an automated agent to read and integrate into the wider strategy.

---

**After receiving the response:**
1. Copy the markdown output.
2. Create a new file in `inbox/` (e.g., `processed-competitor-report.md`).
3. Paste the content there.
4. Archive the original non-text file if you wish to keep a record, or delete it if not needed.

