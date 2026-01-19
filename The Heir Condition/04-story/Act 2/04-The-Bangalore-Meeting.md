# Chapter 4: The Bangalore Meeting
*March 3, 2049 - Korr Foundation, San Francisco*

---

The conference room on the 47th floor overlooking San Francisco Bay had been designed to make visitors feel small. Floor-to-ceiling windows framing the Pacific. A table of polished obsidian that cost more than most houses. Twelve empty chairs arranged around a man who needed no entourage to fill a room.

Damon Korr sat at the head of the table, reviewing the proposal on his tablet. Dr. Tanaka stood at the presentation display, hands clasped, waiting. In the corner, taking notes he would never file, Kaelen watched.

"Ok, walk me through it," Damon said. "The edge case."

Dr. Tanaka pulled up the visualization—a cascade tree showing attribution flows in late-adopter economies. "The backpropagation algorithm over-credits intermediary nodes in regions with fragmented infrastructure. When institutional layers are dense—multiple contractors, licensing aggregators, verification services—the algorithm over-attributes value to the intermediation itself rather than the underlying labor."

"Example."

"Care work in Manila. A home health aide named Rosa Dela Cruz." Tanaka highlighted a single node in the tree. "The II calculates her uplift contribution—the measurable increase in her patients' economic output after recovery, attributed back to her care. Forty thousand pesos monthly. But her employment contract assigns 100% of that attribution to Manila General Hospital. The standard clause these days. She receives a fixed wage: 9,000 pesos."

"And the hospital?"

"Keeps her attribution, and pays it upstream to intermediaries. Equipment licensing. Training certification. Administrative overhead." Tanaka paused. "The same pattern appears across tens of thousands documented cases in our late-adopter sample, we've done detailed write-ups on 847 specific workers. Care workers, agricultural laborers, artisanal manufacturers. Employers capture worker attribution through standard contracts. The algorithm enables it by making individual attribution claims easy to waive—and caps them at 5% of total output even when not waived."

Damon set down the tablet. His face loking defensive. Processing. Testing it for flaws.

"The proposed fix?"

"We'd like to propose parameter adjustments to the attribution metadata." Tanaka pulled up the next slide. "Three changes: First, raise individual attribution caps from 5% to 15% of calculated uplift. Second, increase inference weight for non-institutional contributions from 0.25x to 0.5x. Third, add minimum worker attribution floors so that employers cannot capture more than 70% through contracts."

She advanced the slide. "Implementation cost: 2% of our annual operating budget. Attribution correction across 47 countries in the Asian region would affect approximately 340 million primary laborers. We call it the Bangalore Patch. Virtual test deployment showed workers salaries increasing around 35-40% above control."

Silence. Damon stood. Walked to the window.

Kaelen had seen this before—his uncle pacing while processing complex problems. The slight frown. The fingers drumming against his leg. But there was something else now. Something Kaelen couldn't quite name.

"You're absolutely right," Damon said finally.

Tanaka blinked unexpectedly, not expecting it to be so easy.

"The algorithm does overcredit intermediation in these specific cases. Rosa Dela Cruz seems to reliably generates closer to forty thousand than nine thousand in salary she receives. Your analysis is sound."

Kaelen felt something unclench in his chest. His uncle saw it. Of course he saw it—

"But you're solving the wrong problem."

The room temperature seemed to drop.

Damon turned from the window. His voice had shifted—not defensive, but pedagogical. The tone he used when explaining complex systems to visiting dignitaries. "Dr. Tanaka, what's the difference between a bug and an emergent property?"

"I... uh. Sorry?"

"A bug is when the system fails to execute its design. An emergent property is when the system executes perfectly but produces unexpected results." He walked back to the table. "You're treating Manila's attribution gap as a bug. But I'm quite sure it's be an emergent property we don't fully understand yet."

"With respect, sir, calling systematic underpayment an 'emergent property' doesn't make it less harmful—"

"You're right. It doesn't." Damon's tone shifted, more serious. "Which is why I want to show you something." He pulled up a different dataset from his compute puke and gestured towards the screen. "Dr. Tanaka, have you studied the Nairobi Correction of 2047?"

Tanaka's face shifted. "The healthcare attribution reforms?"

Damon didn't answer. He pulled up a visualization—an accelerated timeline of Kenya's healthcare sector, 2047 to 2049. No explanation. Just the data, running.

The room watched.

Hospitals closing. Not gradually—in waves. First the smaller clinics, then the regional centers, then the urban networks. Care workers' income lines dropping, stabilizing, dropping again. Employment figures fragmenting into something unreadable.

Tanaka's expression shifted as she watched. Confusion first. Then something darker.

"What am I looking at?"

"What you're proposing." Damon let the visualization run. "Kenya deployed almost identical parameter changes. Individual caps raised from 5% to 18%. Institutional capture limited to 51%. Sound reforms, seemingly ethically justified, and democratically approved."

The timeline reached Month 8. Forty-three percent of healthcare institutions dissolved or restructured. The number hung on screen.

"They thought they were fixing a bug," Damon said quietly. "They were breaking an emergent property."

He pulled up worker outcome data. The care workers' income—the ones "liberated" from institutional extraction—had dropped thirty-two percent in the first year. The chart showed why: stable wages had become pure equity participation. When patients recovered, workers earned more. When patients died, they earned nothing.

Tanaka's jaw tightened. "That's a failure of implementation, not—"

"It's a failure of *modeling*." Damon zoomed into the institutional margins. "You saw extraction. You were right—institutions were capturing value. But you didn't model what they were *doing* with that value. Risk aggregation. Insurance. Stable wages during outcome uncertainty. Liability absorption when treatments failed. The reformers treated that as a bug. It was load-bearing."

He zoomed into a specific case. A face appeared: Wanjiku Kimani. Home health aide. Under the old system: 8,400 shillings monthly, stable. Under the new system: average 6,100 shillings, volatile. Second job. Patient outcomes declining. Attribution score dropping.

Kaelen watched the data. The Nairobi Correction had been celebrated initially. The papers had called it "economic justice." Six months later, the stories stopped—not because nothing happened, but because failure wasn't a story the way hope had been. The ongoing extraction that made reform necessary had never been a story either. Just background. Just how things were.

He'd never followed up—told himself he was busy. But Damon had followed up. Damon had commissioned the post-mortem, documented every failure, catalogued every Wanjiku. The data existed. It just wasn't public. The reformers who might learn from Nairobi didn't have access. Only the man arguing against reform got to cite the evidence.

"So what happened?" Kaelen asked quietly.

"Kenya rolled back the reforms eighteen months later. Raised institutional caps to 75%, overcompensating to ensure rapid economic recovery. The system restabilized. But the workers who'd been hurt in the transition—they never fully recovered. Wanjiku left healthcare entirely. Last I checked, she was working retail."

Damon turned to Tanaka. "Your patch is technically correct. The math is sound when modelling first order effects. But you're not modeling second-order effects. You're not accounting for the institutional functions that *look* like extraction but are actually load-bearing. The difference between a bug and an emergent property isn't just semantic—it's the difference between fixing a system and breaking it."

Tanaka stood very still. "So we do nothing? We let Rosa keep earning a quarter of her value because fixing it might be messy?"

"No. We study Nairobi. We understand *why* it failed. We design a patch that preserves risk aggregation while reducing extraction. We test it in controlled deployments. We iterate." His voice softened. "Dr. Tanaka, I'm not saying the problem isn't real. I'm saying your solution is incomplete. And incomplete solutions to complex systems create casualties."

He pulled up one more image. Wanjiku Kimani's face. "I don't want Rosa to become the next Wanjiku. Do you?"

The room was very quiet.

"Take it through the governance process," Damon said. "Build consensus. Study the Nairobi failure modes. Design something that actually works. That's how we make changes that stick."

Tanaka left without another word.

---

Kaelen sat frozen in his corner. His tablet was blank.

His uncle had just done something he couldn't parse. Damon had *acknowledged* the problem—validated that Rosa was being exploited—and then shown, with real data, why the obvious fix was dangerous. The Nairobi numbers were real. Wanjiku was real. The casualties were real.

But so was Rosa. So were the 340 million workers Tanaka had documented.

Damon turned to him. "Estate planning notes?"

"Nothing relevant." Kaelen's voice came out steady. How was his voice steady?

"Good." Damon returned to his tablet. "Dinner Thursday?"

"Thursday," Kaelen said.

He walked out on legs that felt like someone else's. Found a bathroom on the 44th floor. Locked the door.

And stood there for four minutes, staring at his reflection like it belonged to someone else, trying to think clearly.

Damon's argument: incomplete solutions create casualties. Tanaka's patch was incomplete—it didn't model risk aggregation, the insurance function, the upstream costs that made institutional margins necessary. Therefore the patch would hurt the people it meant to help.

Valid. But was it sound?

He couldn't tell. That was the problem. The Nairobi data supported Damon's caution—but it also supported a different conclusion: that Nairobi failed because the reform was *partial*. They'd changed attribution without touching upstream rent extraction. Of course institutions collapsed. Their revenue dropped while their costs stayed the same.

What if you changed both simultaneously? What if the lesson from Nairobi wasn't "don't reform" but "reform completely or don't reform at all"? The institutions collapsed because their costs stayed fixed while their revenue dropped. But what if you could reduce the costs and the extraction at the same time? What if you could lower the stakes enough that workers didn't need as much insurance in the first place—and institutions didn't need to capture as much margin to buffer against it?

He didn't know what that would look like. He didn't have the models. But somewhere in that direction was a question his uncle hadn't asked—or hadn't wanted to ask.

But you couldn't just look at data—you looked at data through a framework that gave context to data. Damon's was complex systems are fragile, therefore interventions are dangerous and patience is wisdom. Through that lens, Nairobi proved caution. But through a different framework—one that said: extraction compounds, delay has costs, and those costs increase as societal pressure, with inaction as a choice. That could prove something else entirely.

The interpretation was load-bearing.

Kaelen looked at his reflection and thought: *I don't know what's—*

His phone buzzed. Damon: *Thursday, 7pm. Don't forget.*

He pocketed the phone. Washed his hands. Walked back to his office.

But the question stayed with him. Not even fully formed. Just there, like a splinter he couldn't find. A splinter that would grow.

