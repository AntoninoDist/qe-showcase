# Reviewer Follow-Up Questions

Suggested prompts for PR comments and live interviews. Pick questions that fit the candidate's submission — you don't need to ask all of them.

## QE judgment (all levels)

- "Why that assertion and not something else?"
- "What would make this test flaky in CI?"
- "What would you add before this ran in a release pipeline?"
- "Walk me through how you'd debug this if the selector/API response changed."
- "You skipped [X] in your PR — if you had 15 more minutes, would that move up in priority? Why or why not?"
- "What's the most likely way this test gives a false pass?"
- "Can you change [specific assertion/selector] right now and explain why?"

## AI experience (bonus — only if natural)

These are **not** scored in the take-home. Use when the candidate mentions tools in their PR, or when you want to probe depth of understanding after reviewing their submission.

- "How does your current team use AI in the quality workflow?"
- "Tell me about a time an AI-suggested test or fix was wrong — how did you catch it?"
- "What do you always verify yourself, regardless of tooling?"
- "When would you *not* use an assistant for test work?"
- "What's something AI helps you do faster in QE, and what's something it consistently gets wrong?"

## Red flags (probe gently in follow-up)

- Cannot explain assertions or selectors in their own code
- PR "what I skipped" section is empty or generic with no risk reasoning
- Large submission with no evidence of manual validation
- Cannot walk through or modify their submission when asked live

## Green flags

- Clear risk-based tradeoffs in the PR, even with minimal code
- Identifies brittleness or flake proactively
- Can discuss what they'd add for production CI without being prompted
- Voluntarily describes their real workflow and what they double-checked
- Handles live walk-through or small changes confidently
