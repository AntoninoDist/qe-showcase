# Reviewer Guide

This document is for reviewers evaluating candidate submissions. Candidates do not need to read this file.

## Core dimensions

When reviewing a submission, focus on these five dimensions:

| Dimension | What to look for |
|-----------|------------------|
| **Structure** | Is the code/test organization clear and logical? |
| **Assertions** | Are checks realistic and meaningful — not just "element exists"? |
| **Test cases** | Did they cover the main flow and think about what matters most? |
| **Communication** | Are comments, commit messages, and the PR description clear? |
| **Git usage** | Did they use branches, commits, and a pull request sensibly? |

## Level-calibrated expectations

The same exercise applies to all levels. Calibrate your expectations using the table below.

| Dimension | Junior / mid bar | Senior bar (same submission) |
|-----------|------------------|------------------------------|
| Structure | Readable spec/collection | Clear separation of concerns; reusable patterns where appropriate |
| Assertions | Happy path + 1–2 meaningful checks | Assertions tied to user/business risk, not just element visibility |
| Test cases | Main flow covered | Explicit risk tradeoffs in PR; considers failure modes |
| Communication | Clear PR, some comments | Teaches reader *why*; commit messages tell a story |
| Git usage | Branch + PR | Logical commits; easy to review incrementally |

## Bonus signals (take-home)

- Explaining tradeoffs or what they'd do with more time
- Using variables, data-driven tests, or custom commands (where relevant)
- Noting any bugs or oddities they found
- Honest "what I chose not to test" reasoning in the PR
- CI or pipeline setup (not required — treat as a positive signal if present)

## Bonus signals (follow-up only — not scored in take-home)

Use these during PR comments or live interviews. Do **not** add a scored "AI usage" column to the take-home rubric.

- Mentions using AI/assistants **at work** for test design, triage, or docs — with concrete examples
- Can explain what they verified after any assisted codegen
- Shows discernment in follow-up ("here's where AI suggestions broke down")

See [docs/reviewer-follow-ups.md](docs/reviewer-follow-ups.md) for suggested follow-up questions.

## What we're *not* looking for

- 100% coverage
- Pixel-perfect code
- CI/CD sophistication as a requirement

## Remember

This is a chance to see how candidates think, not a test to pass or fail. A senior candidate who submits 40 lines with an excellent "what I didn't test and why" beats a junior who submits 200 lines of boilerplate.
