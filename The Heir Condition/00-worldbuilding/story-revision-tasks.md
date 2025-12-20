# Story Revision Tasks: Integrating Attribution Economics Model

## Overview
The new attribution economics model (uplift-based equity, two payment models, baseline predictions) needs to be integrated throughout the story. The current draft contains some contradictions and missing elements.

---

## Critical Gaps to Address

### 1. Rosa's Situation (Multiple Chapters)
**Current:** Story says Rosa "contributes 40,000 pesos" and "receives 9,000" with vague explanations about attribution
**Problem:** Doesn't explain the mechanism clearly or what "40,000" actually means
**New Model:** Rosa's care work generates uplift measured at ₱40,000/month, but hospital captures 100% via employment contract. She gets ₱9,000 wage only.

**Files to update:**
- Chapter 4 (The Motive) - lines 23-31
- Chapter 5 (The Patch) - lines 18-22

**What to add:**
- Clarify that 40,000 is calculated uplift from patients' future economic activity
- Show that hospital employment contract waives her attribution rights
- Explain this is standard practice (not unique to Manila General)

---

### 2. Grandma's Teaching (Chapter 8 Hidden Layer)
**Current:** Vague about how informal care work is tracked/valued
**Problem:** No clear mechanism for how grandma gets attributed
**New Model:** 
- II infers contribution via social graph proximity + outcome correlation
- Before Liberation: capped at 5% with 0.25x weight = almost nothing
- After Liberation: 25% cap with 0.85x weight = meaningful
- Off-grid = null (completely invisible)

**File to update:**
- Chapter 8 lines 32-55 (grandma section needs complete rewrite)

**What to add:**
- Show inference from device proximity patterns
- Explain the cap/weight system clearly
- Make explicit that device-less care workers get ZERO (null)
- Show that inference ceiling is democratic compromise, not Damon's malice

---

### 3. The Bangalore Patch Details (Chapter 5)
**Current:** Patch is about "attribution leakage to intermediary layers"
**Problem:** Too abstract, doesn't explain what would actually change
**New Model:** Patch would raise inference weights and individual caps, reduce institutional priority

**File to update:**
- Chapter 5 entire chapter needs small adjustments

**What to add:**
- Make clear patch would change PARAMETERS (caps/weights), not algorithms
- Show that this threatens to question foundational layer itself
- Damon rejects because it sets precedent for recalibration everywhere

---

### 4. What Kaelen Actually Changed (Chapter 3 & 8)
**Current:** Vague about "attribution metadata" changes
**Problem:** Too hand-wavy for technical readers
**New Model:** Three specific parameter changes:
1. Attribution basis: total → uplift
2. Individual caps: 5% → 25%
3. Inference weights: 0.25x → 0.85x
Plus: foundational attribution from Damon → distributed

**Files to update:**
- Chapter 3 (The Cascade) - add technical detail about what transfers include
- Chapter 8 (Hidden Layer) - already mostly correct but needs parameter specifics

**What to add:**
- Hour 6: Parameter metadata changes published
- Hour 12: New contract templates deployed (optional, not mandatory)
- Hour 48: 11.2B transactions lock in new parameters
- Make explicit: old contracts still valid, new ones use new terms

---

### 5. Post-Liberation Transition (Missing)
**Current:** Implies instant transformation
**Problem:** Unrealistic, contradicts "organic market adaptation" model
**New Model:** Gradual transition over years
- Year 1: Early adopters, <10%
- Year 3: ~60% using new model
- Old contracts persist through attrition
- Some people prefer certainty over equity

**Files to update:**
- Chapter 9 (The Archive) testimonials section
- Maybe add brief mentions in Chapter 8

**What to add:**
- Rosa doesn't immediately quit hospital - takes side gigs first
- Grandma's dividend grows slowly as new claims mature
- Some workers stay on old contracts (risk averse, need certainty)
- Timeline: months to years, not days

---

### 6. The 0.3% Foundational Layer (Multiple Chapters)
**Current:** Treated as mysterious "tribute"
**Problem:** Unclear where the money comes from or how it flows
**New Model:** 0.3% collected at PRODUCTION events (not consumption), flows automatically via II payment infrastructure, justified as "infrastructure attribution"

**Files to update:**
- Chapter 4 line 31 (mentions 0.3%)
- Chapter 6 line 144 (Tallinn Coefficients modified)
- Chapter 8 (needs clearer explanation)

**What to add:**
- 0.3% comes from value creation events, not purchases
- Distributed through II payment rails automatically
- Before: all to Damon (concentrated)
- After: distributed to all II participants (democratized)

---

### 7. The Two Payment Models (Not Present)
**Current:** Only shows traditional wages
**Problem:** Missing the core innovation of equity-based care work
**New Model:** Upfront vs. Attribution Equity as competing models

**Where to add:**
- Could add brief mention in Chapter 3 (São Paulo construction)
- Should add in Chapter 8 or 9 (post-Liberation examples)
- Maybe brief scene in revised Chapter 4

**What to show:**
- Before Liberation: equity model exists but capped at 5% (useless)
- After Liberation: equity model viable (25% cap, trusted inference)
- Market competition between wage and equity terms

---

## Specific File Edit Tasks

### Chapter 3: The Cascade
- [ ] Hour 6 section: Add line about "attribution metadata parameters updated"
- [ ] Margaret Kowalski scene (lines 174-202): Keep as-is, this works well
- [ ] Hour 44 section: Add mention that new contract templates deployed
- [ ] Clarify that worker equity transfers are voluntary adoption of new templates

### Chapter 4: The Motive
- [ ] Lines 23-31 Rosa section: Rewrite to show uplift calculation, hospital capture
- [ ] Lines 35-44 Hassan section: Clarify patent licensing vs. attribution
- [ ] Lines 49-59 Amara section: Show pharmaceutical licensing costs, not attribution

### Chapter 5: The Bangalore Patch
- [ ] Lines 14-28 Tanaka's presentation: Add specifics about parameter changes
- [ ] Lines 40-46 Damon's response: Make clear it would question foundational layer
- [ ] Lines 58-70 Rejection scene: Show this is about precedent for recalibration

### Chapter 6: The Resurrection
- [ ] Line 144 Tallinn Coefficients: Clarify what "modified at foundational layer" means
- [ ] Add brief mention that payment systems showing recursion errors

### Chapter 7: The Confrontation
- [ ] No major changes needed - emotional core works
- [ ] Maybe add brief line about "new contract templates" when discussing changes

### Chapter 8: The Hidden Layer
- [ ] Lines 20-66 attribution metadata section: ADD the three specific parameter changes
- [ ] Lines 70-90 mechanism section: Show it's metadata query, not algorithm change
- [ ] Add section about gradual transition (Year 1-5 timeline)
- [ ] Clarify grandmother situation with inference caps/weights

### Chapter 9: The Archive  
- [ ] Lines 82-106 Testimonials: Make messier, less neat
- [ ] Add timeline context (these are from different years)
- [ ] Rosa testimonial: Show she transitioned gradually, not instantly
- [ ] Maybe add someone who stayed on old contract (preferred certainty)

---

## New Content to Consider Adding

### Possible New Chapter 00: "The Economy Before"
Show the attribution system in action pre-Liberation:
- Rosa's shift at hospital, attribution logged but captured
- Family tapping phones for grandma care session (gets almost nothing)
- The gap between calculated contribution and actual payment
- Make extraction visceral and concrete

**Decision:** Defer to second pass - focus on fixing existing chapters first

---

## Technical Accuracy Checklist

For each mention of attribution/II:
- [ ] Is the mechanism explained clearly?
- [ ] Does it match the uplift-basis model?
- [ ] Is the two-payment distinction clear?
- [ ] Are caps/weights mentioned where relevant?
- [ ] Is the transition timeline realistic?

---

## Tone/Consistency Checks

- [ ] Make sure "extraction" language is precise (not vague conspiracy)
- [ ] Show that old system wasn't evil, just badly parameterized
- [ ] Maintain that Damon genuinely believed in optimization
- [ ] Keep the incompleteness theme (system can't see everything)

---

## Priority Order for Implementation

**Phase 1: Critical Fixes (do first)**
1. Rosa's situation clarity (Chapters 4, 5)
2. Grandma inference mechanism (Chapter 8)
3. What Kaelen changed technically (Chapters 3, 8)

**Phase 2: Coherence Improvements**
4. Bangalore Patch specifics (Chapter 5)
5. 0.3% foundational layer explanation (multiple chapters)
6. Post-Liberation transition timeline (Chapters 8, 9)

**Phase 3: Polish**
7. Testimonials messiness (Chapter 9)
8. Two payment models mentions (various)
9. Technical accuracy pass (all chapters)

---

## Notes for Second Pass

- Consider whether Chapter 00 showing pre-Liberation economy would help
- May need to adjust Damon's final log to acknowledge parameter vs algorithm distinction
- Check that all numbers are consistent (₱40K, ₱9K, 0.3%, etc.)
- Ensure timeline is consistent (48 hours → years of transition)

