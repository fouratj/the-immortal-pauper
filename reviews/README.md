# Reviews — Index

Each review is a snapshot: persona × manuscript version at time T. The folder structure preserves that history.

```
reviews/
├── by-persona/   ← per-persona review logs, numbered chronologically (v1, v2, …)
├── prompts/      ← persona prompts used to generate reviews
└── analyses/     ← non-persona analytical docs (exposition audits, etc.)
```

File-naming convention inside `by-persona/<persona>/`:
`v{NN}-{YYYY-MM}-{short-slug}.md` — version number gives reading order, date gives temporal context.

The working title of the manuscript drifted over time: "The Engineer's Choice" → "The 48-Hour Liberation" → "The Kaelen Event" → **The Heir Condition**. The reviews use whichever title was current at the time, which is itself useful for placing a review on the timeline.

---

## Stephenson — 11 reviews across two campaigns

The longest persona thread. Two distinct campaigns: an Oct 2025 revision audit (V1–V7) and a Jan 2026 re-read after substantial revision (V8–V11).

### Campaign 1: Oct 2025 — the original revision audit

| File | Date | Manuscript state | One-line take |
|---|---|---|---|
| `v01-2025-10-adaptation-report.md` | Oct 6 | early — pre-Kaelen-as-character | initial adaptation recommendations: technical staging, institutional archaeology |
| `v02-2025-10-review.md` | Oct 14 | post-cosmological-fix | "substantially stronger now"; structural problems remain |
| `v03-2025-10-review.md` | Oct 15 | partial V2 implementation | "40% of V2 feedback incorporated — still married to a documentary structure" |
| `v04-2025-10-review-post-kaelen.md` | Oct 15 | Kaelen-as-character added | "you fixed the structural problem. Kaelen is no longer a plot device" |
| `v05-2025-10-comprehensive.md` | Oct 15 | comprehensive re-read | Tallinn Coefficients = peak Stephenson; algorithmic rent extraction analysis "more mature than most SF" |
| `v06-2025-10-repetition-focus.md` | Oct 16 | repetition audit | catalogued 186 instances of "systematic," 87 of "genuinely," etc. |
| `v07-2025-10-post-revision.md` | Oct 16 | post-V6 cleanup | "you fixed it. Not mostly — actually fixed it." 97.8% reduction on "systematic" |

### Campaign 2: Jan 2026 — re-read after major restructuring

| File | Date | Manuscript state | One-line take |
|---|---|---|---|
| `v08-2026-01-manuscript.md` | Jan 1 | post-restructure | Kaelen/Damon dynamic = emotional core; confrontation works because both are right |
| `v09-2026-01-full-manuscript.md` | Jan 2 | full re-read | (chapter-by-chapter "What Works / What Could Be More Stephensonian" audit) |
| `v10-2026-01-modeling-session.md` | Jan 3 | focused on modeling chapter | digressions earn their keep; prose could breathe more |
| `v11-2026-01-review.md` | Jan 12 | most recent | Mars/consciousness transfer endpoint works; "death becomes voluntary rather than economically determined" |

---

## Gibson — 2 reviews

| File | Date | Manuscript state | One-line take |
|---|---|---|---|
| `v1-2025-12-revision-report.md` | Dec 15, 2025 | 8-chapter `04-short/` structure | "Cut 50, add 20" — Chapter 4 is 1008 lines of monologue, needs to be scene |
| `v2-2026-01-manuscript-review.md` | Jan 3, 2026 | post-Cut-50 revision | prose-level critique |

---

## Tarantino — 1 review

| File | Date | One-line take |
|---|---|---|
| `v1-2025-12-feedback.md` | Dec 25, 2025 | "Portfolio, Ascension, Activation, Confrontation = the good shit. Dialogue still sounds like characters explaining the plot." |

---

## Clute — 1 review

| File | Date | One-line take |
|---|---|---|
| `v1-2026-02-review.md` | Feb 8, 2026 | reads the novel through the THINNING / RECOGNITION / RETURN grammar of fantastika; "fantastika that earns its darkness" |

---

## Wolfe — 1 review

| File | Date | One-line take |
|---|---|---|
| `v1-2026-02-review.md` | Feb 8, 2026 | "78% confidence interval becomes a character beat: the revolution runs on a margin of error"; novel occasionally drowns in its apparatus |

---

## Adam Roberts — 1 review

| File | Date | One-line take |
|---|---|---|
| `v1-2026-01-amechanicalart-review.md` | Jan 12, 2026 | "commits the cardinal sin of contemporary SF: it has ideas" — exposition as action; refusal to let either side be simply wrong |

---

## New Yorker — 1 review

| File | Date | One-line take |
|---|---|---|
| `v1-2026-01-review-tasks.md` | Jan 12, 2026 | prose "oscillates between genuine felicity and competent workmanship"; Rosa/Marco need interior lives |

---

## Classic SF — 2 reviews ("The Kaelen Event" era)

| File | Date | Manuscript state | One-line take |
|---|---|---|---|
| `v1-2025-10-kaelen-event.md` | Oct 31, 2025 | "The Kaelen Event" working title | classic SF lens — Golden Age / New Wave / Cyberpunk standards |
| `v2-2025-12-kaelen-event.md` | Dec 17, 2025 | draft submission | **"Strong Recommend with Specific Revisions"** — gamified political economy, executed with technical competence |

---

## SF Greats (composite) — 1 review

| File | Date | One-line take |
|---|---|---|
| `v1-2026-01-review.md` | Jan 2, 2026 | **"This is publishable work that needs refinement, not fundamental revision."** Estonian inheritance exploit = clever in the Stephensonian sense |

---

## Analyses (non-persona)

| File | Date | Scope |
|---|---|---|
| `analyses/exposition-vs-action-2025-12.md` | Dec 20, 2025 | full-manuscript audit: "front-loaded exposition syndrome" — Timeline + Hidden Layer chapters ≈ 8,000 words pure exposition, reducible 60–70% |

---

## Prompts

| File | Purpose |
|---|---|
| `prompts/sf-greats-prompt.md` | persona prompt for the "SF Greats" composite reviewer |
| `prompts/generalist-reader-prompt.md` | persona prompt for a generalist SF reader |

---

## How to use this log

When starting a new review, copy the relevant prompt from `prompts/`, run it against the current manuscript, and save the output as the next `v{N}-{YYYY-MM}-{slug}.md` in the matching `by-persona/<persona>/` folder. Update this README's table with the new row.

When a review's notes are fully addressed (TODO items checked off), don't delete it — it stays in the log as the historical record. The verdict line in the table above is the quickest way to see what each review was for.
