export const justGoCaseStudy = {
  slug: 'just-go-0-to-1',
  title: 'Just Go: 0 to 1',
  company: "Sam's Club",
  outcome: "Retail's first AI-powered exit, scaled from a 6-week sprint to 600 clubs and 30M+ members.",
  role: 'Head of Store Experience Design',
  navPill: 'Case Study 01 · 0 to 1 Transformation',
  hero: {
    eyebrow: 'Launch · Build · Scale · 6 Weeks',
    titleHtml: "Just <em>Go.</em><br />Designing retail's first<br />AI-powered exit.",
    deck:
      'How a 3-person design team built a first-of-its-kind frictionless exit experience from scratch in 6 weeks, then scaled it to 600 clubs and 30 million members.',
    image: '/images/case-studies/just-go/hero-strip.jpg',
    stats: [
      { value: '600', labelHtml: 'Clubs deployed<br />nationwide' },
      { value: '30M+', labelHtml: 'Members<br />impacted' },
      { value: '6 wks', labelHtml: 'Sprint to<br />CES stage' },
      { value: '80%', labelHtml: 'Members get<br />no-stop exits' },
    ],
  },
  sections: {
    origin: {
      tag: 'The Origin Signal',
      titleHtml: "Scan &amp; Go worked.<br />The exit <em>didn't.</em>",
      paragraphs: [
        "Scan &amp; Go, Sam's Club's mobile self-checkout, had become something rare: members genuinely loved it. NPS topped 90. The promise was simple: <em>skip the checkout line.</em> But the data told a second story. The exit step, a manual receipt check at the door, registered just 63 OSAT. Members who had sailed through checkout were stopping cold, waiting in line, and leaving frustrated.",
        "We hadn't eliminated the line. We had moved it.",
      ],
      stats: [
        {
          value: '90+',
          label: 'Scan & Go NPS',
          description: 'Members loved the checkout experience. High satisfaction across the app journey.',
        },
        {
          value: '63',
          label: 'Exit OSAT',
          description: 'The final step dragged down a world-class product. Lowest rating in the member journey.',
          dark: true,
          gold: true,
        },
        {
          value: '2 min',
          label: 'Peak dwell time at exit',
          description: 'Manual scanning of receipts and carts during peak hours created long wait times.',
        },
        {
          value: '24%',
          label: 'Scan & Go adoption plateaued',
          description: "Exit friction was suppressing adoption. The full promise of Scan & Go couldn't land.",
        },
      ],
      image: '/images/case-studies/just-go/section-1.jpg',
    },
    gauntlet: {
      tag: 'The Gauntlet',
      titleHtml: 'CEO mandate.<br /><em>6 weeks.</em> CES stage.',
      paragraphs: [
        "Walmart CEO Doug McMillon challenged Sam's Club to demonstrate a transformative member experience at CES 2024, retail's biggest global stage. The brief landed 6 weeks before showtime. Economic pressures had been pushing for tighter loss-prevention at the exit. But tighter scrutiny was eroding exactly what members valued most.",
        'The mission became: prove that security and delight move in the same direction.',
      ],
      quote: {
        body: "The challenge wasn't just to reduce shrink. It was to transform a friction-heavy moment into one of trust, ease, and delight at a scale no retailer had attempted in-house.",
        cite: "Chandan Sharma · Head of Store Experience Design, Sam's Club",
      },
    },
    sprint: {
      tag: 'The Sprint',
      titleHtml: 'Three designers.<br /><em>Zero</em> precedent.',
      paragraphs: [
        'The design unit: one Staff Designer, one Senior Designer, content strategy and research support. Everything was built from scratch: digital UI, physical exit arch, associate tooling, wayfinding, spatial layout, and legal compliance flows. No template to follow. No competitor to benchmark.',
        'My role covered the full arc: innovation sprint facilitator, experience strategist, and design lead from first research session to national scale.',
      ],
      image: '/images/case-studies/just-go/section-2.jpg',
      timeline: [
        {
          phase: 'Phase 1 · Learn & Empathize',
          title: 'We worked the exit shifts ourselves.',
          body: 'The design team stood associate shifts at exits across clubs with varying traffic, adoption, and OSAT. We felt the pressure of scanning large carts manually, managing awkward member interactions, and keeping flow during peak hours. Observations combined with surveys, focus groups, and an empathy + journey mapping workshop with stakeholders, product, real estate, asset protection, and engineering.',
        },
        {
          phase: 'Phase 2 · Define',
          title: 'Three problem spaces. One north star.',
          body: 'Distinct problems defined for members, associates, and the business. Hard metrics of success were set before any concepts were sketched. Experience principles were established. The entire cross-functional team aligned on what good looked like before ideation began.',
        },
        {
          phase: 'Phase 3 · Ideate',
          title: 'Four divergent concepts. One that worked.',
          body: 'Concepts explored cart image verification, cart number matching, QR code signaling, and IoT-based audio-visual alerts. We prototyped at Clubhouse and ran RITE cycles with real members and associates. The key finding: members were deeply skeptical of technology, while associates needed single-device, at-a-glance simplicity.',
        },
        {
          phase: 'Phase 4 · Build — 1 Club Pilot',
          title: 'Launched in 3 weeks from kickoff.',
          body: 'At 80% CV accuracy, 50% of members got a seamless no-stop exit. The system identified 1.5× more unpaid items than the old manual process. We also validated a hard physical constraint: 20 feet minimum distance and 8 seconds processing time between the camera arch and exit door.',
        },
        {
          phase: 'Phase 5 · Scale — 10 Clubs to 600',
          title: 'From pilot to national rollout.',
          body: 'We iterated CV/AI models for speed, cart variation, and accuracy, built 1:1 scale arch prototypes at Clubhouse for robustness and maintenance, evaluated all 600 club layouts with the CAD team, and prepared the operational playbook for nationwide deployment.',
        },
      ],
      timelineImage: '/images/case-studies/just-go/section-3.jpg',
    },
    systemDesign: {
      tag: 'System Design',
      titleHtml: 'Digital + physical.<br /><em>One seamless system.</em>',
      paragraphs: [
        'Just Go required design ownership across every layer simultaneously: the member-facing app flow, the physical exit arch and camera system, the associate tool interface, wayfinding and signage within the club, and the operational model governing how teams work the exit. Each layer had to be coherent with every other.',
      ],
      layers: [
        {
          value: 'App Layer',
          label: 'Member-facing digital',
          description:
            'Scan & Go exit confirmation, contextual prompts, and clear status feedback at the arch. Even traditional checkout users received onboarding into the no-stop exit promise.',
        },
        {
          value: 'Physical Layer',
          label: 'Exit arch + environment',
          description:
            'A 1:1 scale exit arch was prototyped at Clubhouse. Camera geometry, minimum clearance, wayfinding, and brand language were integrated into the physical structure.',
        },
        {
          value: 'Associate Layer',
          label: 'Tooling + team model',
          description:
            'We replaced multi-device juggling with a single-device, at-a-glance tool and reshaped the exit into a team-hosted experience rather than individual policing.',
        },
      ],
      image: '/images/case-studies/just-go/section-4.jpg',
    },
    decision: {
      tag: 'Signature Design Decision',
      titleHtml: 'Breaking the<br /><em>95% trap.</em>',
      intro:
        'Early in the project, technology, asset protection, and UX aligned on a gating threshold: computer vision had to recognize 95%+ of items in every cart before deployment. The logic was clean. But it was the wrong question.',
      decisionTitle: 'Reframe the bar from accuracy to outcome.',
      decisionBodyHtml:
        "The 95% line was a technical metric masquerading as an experience goal. What mattered wasn't perfect cart recognition. It was whether members got a better exit and whether loss prevention improved. When tested, even at 80% CV accuracy, the system identified unpaid items at <strong>3× the rate of manual human scanning</strong>. The old manual process wasn't a gold standard. It was just familiar.<br /><br />I held the ideal, a genuinely no-stop experience, as the destination while refusing to let an unvalidated technical threshold become the gating condition. That decision unblocked the path from pilot to scale.",
    },
    associateExperience: {
      tag: 'Associate Experience',
      titleHtml: 'Redesigning the role,<br />not just the <em>tool.</em>',
      paragraphs: [
        "The biggest design challenge wasn't the AI. It was the human system around it. Associates were caught between two conflicting mandates: be welcoming, or be enforcement. The exit had become a source of tension, not service. We designed the associate experience from scratch, not just a new tool, but a new model of how the role works.",
      ],
      before: {
        tag: 'Before',
        title: 'Individual policing under pressure.',
        body: 'Each associate manually scanned receipts and cart items alone, managed awkward member confrontations during peak, and lived in the ambiguity of being both service and security. Tool satisfaction sat at 3.2/5.',
      },
      after: {
        tag: 'After',
        title: 'Team hosting. AI as the safety net.',
        body: 'Associates were freed from cart-scanning to focus on greeting, assisting, and connecting. AI handled verification. The tool became single-device and glanceable. Team coverage replaced single-lane policing. Tool satisfaction rose to 4.3/5.',
      },
      image: '/images/case-studies/just-go/section-5.jpg',
      quote: {
        body: 'More important to greet members sincerely instead of looking for problems.',
        cite: "Member Services Associate · Sam's Club",
      },
    },
    transformation: {
      tag: 'The Transformation',
      titleHtml: 'What changed<br />at the <em>door.</em>',
      beforeAfter: {
        before: [
          { value: '2 min', meta: 'Peak exit dwell time' },
          { value: '63', meta: 'Exit OSAT' },
          { value: '24%', meta: 'Scan & Go adoption' },
          { value: '1×', meta: 'Unpaid item recovery vs. manual' },
        ],
        after: [
          { value: '23 sec', meta: 'Peak exit dwell time' },
          { value: '90+', meta: 'Exit OSAT (Scan & Go members)' },
          { value: '~40%', meta: 'Scan & Go adoption' },
          { value: '3×', meta: 'Unpaid item recovery vs. manual' },
        ],
      },
      impactMetrics: [
        { value: '80%', labelHtml: 'Members get<br />no-stop exits' },
        { value: '25%', labelHtml: 'Faster exits<br />on average' },
        { value: '600', labelHtml: 'Clubs deployed<br />nationwide' },
        { value: '3×', labelHtml: 'Better unpaid item<br />recovery vs. manual' },
      ],
    },
    recognition: {
      tag: 'Recognition',
      titleHtml: 'Industry recognition<br />at <em>every level.</em>',
      items: [
        {
          icon: 'iF',
          source: 'iF Design Award 2025',
          text: 'Winner · Service Design. One of the most rigorous international design awards, judged by an independent expert jury.',
        },
        {
          icon: 'WB',
          source: 'Webby Awards 2025',
          text: "People's Voice Winner · AI, Immersive & Games — Best User Experience. Voted by the public.",
        },
        {
          icon: 'FC',
          source: 'Fast Company 2025',
          text: 'Innovation Award Finalist 2025. Recognized among the most innovative projects globally.',
        },
        {
          icon: 'US',
          source: 'USA Today',
          text: "\"Sam's Club uses AI to eliminate receipt checks\" — national coverage framing Just Go as a retail milestone.",
        },
        {
          icon: 'FB',
          source: 'Forbes',
          text: "\"Sam's Club Bets on AI to Reinvent Checkout\" — positioning the work as a strategic bet, not a feature.",
        },
        {
          icon: 'FF',
          source: 'FastForward · boldstart.vc',
          text: "\"A masterclass in cross-functional innovation\" — cited as a model for design, tech, and operations moving together.",
        },
      ],
      quote: {
        body: 'This is the kind of design work that makes hidden needs visible and then disappear.',
        cite: 'Todd Garner · Chief Product Officer, Sam\'s Club',
      },
    },
    takeaways: {
      tag: 'Key Takeaways',
      titleHtml: 'What building<br /><em>from zero</em> teaches you.',
      items: [
        {
          number: '01',
          title: 'The ideal as compass, not ceiling.',
          body: 'Holding the vision of a no-stop exit, while refusing to gate launch on technical perfection, kept the team moving and the mission intact.',
        },
        {
          number: '02',
          title: 'Design must own the full system.',
          body: 'Digital, physical, associate tools, and spatial flows all had to work together. There was no seam for friction to hide in.',
        },
        {
          number: '03',
          title: 'Trust is the product.',
          body: 'Members called it magical not because of the AI, but because the system trusted them first. Designing around trust is what made it land.',
        },
      ],
    },
  },
} as const;
