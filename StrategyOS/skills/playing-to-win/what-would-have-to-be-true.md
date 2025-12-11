# What Would Have to Be True (WWHTBT)

The most powerful question in strategic decision-making.

---

## The Problem with Strategy Debates

Traditional strategy discussions fail because people advocate for their preferred option. This creates:

- Confirmation bias (seeking evidence for your position)
- Defensive reasoning (protecting your idea from attack)
- Shallow analysis (winning the argument vs. finding the truth)
- Stalemates (competing positions with no resolution path)

**WWHTBT flips the frame.** Instead of "Is this strategy right?" ask "What conditions would make this strategy right?"

---

## The Core Question

> "What would have to be true about our customers, competitors, capabilities, costs, and industry for this strategic option to be the winning choice?"

This question:
- Surfaces hidden assumptions
- Makes implicit logic explicit
- Transforms debate into inquiry
- Creates testable hypotheses
- Identifies where to focus analytical effort

---

## The Process

### Step 1: Generate Strategic Possibilities

Before applying WWHTBT, you need options to evaluate. Frame these as clear strategic choices:

- "We could focus on enterprise customers in the Nordics"
- "We could win through a low-cost, high-volume model"
- "We could differentiate on customer service and retention"

Each possibility should be a legitimate contender, not a strawman.

### Step 2: For Each Possibility, Generate Conditions

Take one strategic possibility and ask: "What would have to be true for this to be our winning choice?"

Generate conditions across these categories:

**Industry conditions:**
- Market size and growth trajectory
- Regulatory environment
- Technology trends
- Industry structure and profitability

**Customer conditions:**
- Segment needs and preferences
- Willingness to pay
- Switching costs and loyalty
- Decision-making process

**Competitor conditions:**
- Current positioning
- Likely responses to our moves
- Capability gaps we could exploit
- Barriers to imitation

**Capability conditions:**
- Skills and resources we'd need
- Time to build vs. time available
- Feasibility of acquisition or partnership
- Cultural fit

**Economic conditions:**
- Cost structure achievability
- Margin requirements
- Investment required
- Time to profitability

### Step 3: Assess Each Condition

For each condition, evaluate:

**Certainty:** How confident are we this is true?
- Known to be true (evidence exists)
- Likely true (strong indicators)
- Uncertain (could go either way)
- Likely false (evidence against)
- Known to be false (disconfirming evidence)

**Importance:** How critical is this condition?
- Must be true (strategy fails without it)
- Should be true (significantly improves odds)
- Nice to have (marginal impact)

### Step 4: Map to a 2x2

Plot conditions on Importance vs. Uncertainty:

```
                    High Importance
                          │
         BARRIER          │         KEY TEST
    (If false, strategy   │    (Critical uncertainty -
        fails)            │     focus analysis here)
                          │
   ───────────────────────┼───────────────────────
                          │
        MONITOR           │        VALIDATE
    (Watch but don't      │    (Check assumption,
     obsess over)         │      then move on)
                          │
                    Low Importance
                          
    Low Certainty ←───────┼───────→ High Certainty
```

**Key tests** (high importance, low certainty) are where you focus:
- Design experiments or research to resolve uncertainty
- Look for existing evidence you may have missed
- Identify leading indicators

**Barriers** (high importance, high certainty of being false) kill the strategy early.

### Step 5: Conduct the Key Tests

For your most critical uncertainties:

1. **Frame the test:** What specific question are we answering?
2. **Define success:** What evidence would confirm or disconfirm?
3. **Design the test:** How will we gather that evidence?
4. **Set a timeline:** When will we have enough to decide?
5. **Commit to act:** What will we do based on results?

Tests can include:
- Customer interviews or surveys
- Market analysis
- Competitor intelligence
- Pilot programs
- Expert consultation
- Data analysis

### Step 6: Decide and Document

After testing, you'll have:
- Some possibilities ruled out (barrier conditions proven false)
- Some possibilities validated (key conditions confirmed)
- Remaining uncertainty reduced to acceptable levels

Document the logic:
- Which possibility was chosen
- What conditions were identified
- Which were tested and how
- What was learned
- What residual uncertainty remains

This documentation goes in `/strategy/hypotheses.md` and is referenced in processing notes.

---

## Example Application

**Strategic possibility:** "Win in the SMB segment through self-serve product and digital marketing"

**Conditions generated:**

| Condition | Category | Certainty | Importance |
|-----------|----------|-----------|------------|
| SMB segment is large enough to sustain our growth targets | Market | Uncertain | Must be true |
| SMBs prefer self-serve over sales-assisted buying | Customer | Uncertain | Must be true |
| We can achieve <$50 CAC through digital channels | Economic | Uncertain | Must be true |
| Competitors won't respond with similar self-serve offerings | Competitor | Likely false | Should be true |
| Our product can be understood without human explanation | Capability | Uncertain | Must be true |
| SMB churn rates allow for profitable unit economics | Economic | Uncertain | Must be true |

**Key tests identified:**
1. Market sizing analysis for SMB segment
2. Customer interviews on buying preferences
3. Digital marketing pilot to test CAC
4. Product usability testing for self-serve onboarding

**Barrier identified:**
- "Competitors won't respond" is likely false and moderately important
- Reframe: "We can build sustainable advantage before competitors respond" - now testable

---

## Using WWHTBT in This Repository

When evaluating strategic changes from inbox materials:

1. Frame the implied strategic choice
2. Generate conditions with the human
3. Assess certainty and importance together
4. Identify what's already known vs. what needs testing
5. Document in `hypotheses.md`

When conditions are later validated or invalidated, update `hypotheses.md` and trace implications to strategy files.

---

## Common Mistakes

**Generating conditions that are always true:**
- Bad: "Customers must want good products"
- Good: "Enterprise customers must prioritize reliability over price"

**Skipping the importance assessment:**
- Not all conditions matter equally
- Focus energy on what's critical and uncertain

**Treating WWHTBT as one-time:**
- Conditions change; revisit periodically
- New information should trigger reassessment

**Confusing conditions with actions:**
- Bad: "We would have to hire great salespeople"
- Good: "Great salespeople must be available and affordable"
