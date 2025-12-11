# Autonomous Strategy Step

A method for AI-driven strategy advancement through systematic questioning, research, and reasoning.

---

## Purpose

Enable autonomous strategic progress by:
- Identifying questions that desk/web research and reasoning can answer
- Conducting research to advance strategic understanding
- Deferring to humans on matters requiring judgment, internal knowledge, or real-world interaction

**Key Principle:** Focus on low-hanging fruit where AI capabilities provide maximum value. Humans handle purpose, politics, resources, and relationships.

---

## The Process

### 1. Context Gathering
- Read all `/strategy/*.md` files and `/strategy/hypotheses.md`
- Identify gaps, inconsistencies, or untested assumptions
- Scan `/archive/` for recent context

### 2. Generate 5 Questions
Pick questions where AI excels:
- Market sizing and trends (web research)
- Competitor analysis (public information)
- Framework application (logical reasoning)
- Pattern recognition across strategy
- Hypothesis validation with public data

Avoid questions requiring:
- Internal knowledge or politics
- Resource allocation decisions
- Stakeholder relationships
- Customer conversations
- Value judgments or purpose setting

### 3. Present Questions (if human available)
Show the 5 questions with:
- Why each matters
- How you'll research it
- What you expect to learn

Get approval or redirection before proceeding.

### 4. Research and Reasoning
For each question:
- Use `WebSearch` for current information
- Cross-reference with repository content
- Apply Playing to Win and WWHTBT frameworks
- Document confidence level (High/Medium/Low)
- Flag items needing human validation

### 5. Create Output Document
Save to `/inbox/AUTONOMOUS-STEP-YYYY-MM-DD.md` with:

```markdown
# Autonomous Strategy Step — [Date]

## Questions Researched

### Question 1: [Question]
**Confidence:** [High/Medium/Low]
**Findings:** [What you learned with sources]
**Implications:** [What this means for strategy]

[Repeat for questions 2-5]

## Proposed Strategy Updates
[Specific changes to strategy files with rationale]

## New Hypotheses
[Additions to hypotheses.md]

## Human Input Required
[Items flagged for human judgment with specific questions]

## Sources
[URLs and references]
```

---

## Integration

Autonomous steps **feed into** the standard workflow—they don't bypass it:

1. Autonomous step creates `/inbox/AUTONOMOUS-STEP-YYYY-MM-DD.md`
2. Standard workflow processes it (Discussion → Approval)
3. Only after approval → Strategy files updated

Human-in-the-loop remains intact.

---

## Quality Standards

**Good autonomous steps:**
- Focus on public information and reasoning
- Cite sources clearly
- Rate confidence honestly
- Flag human needs proactively
- Propose actionable changes

**Poor autonomous steps:**
- Make up information
- Assert opinions as facts
- Skip confidence ratings
- Try to answer questions requiring insider knowledge

---

## References

- `/skills/playing-to-win/SKILL.md` — Core framework
- `/skills/playing-to-win/what-would-have-to-be-true.md` — WWHTBT methodology
