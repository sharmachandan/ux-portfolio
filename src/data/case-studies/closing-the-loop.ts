export const closingLoopCaseStudy = {
  slug: 'closing-the-loop-iterative-design',
  title: 'Closing the Loop',
  company: "Sam's Club",
  outcome:
    'How iterative design pushed friction-free exits from 50% to 80%+, lifted Scan & Go adoption to ~40%, and improved shrink recovery to 3x manual.',
  role: 'Head of Store Experience Design',
  navPill: 'Case Study 02 · Iterative Improvement',
  hero: {
    eyebrow: 'Iteration · Adoption · Loss Prevention · Satisfaction',
    titleHtml: 'Closing<br />the <em>loop.</em>',
    deck:
      "After Just Go launched, the real design work began: iterating the friction-free rate from 50% to 80%, driving Scan & Go to become the highest-adopted retail store app in the US, and improving shrink — all without adding friction back.",
    image: '/images/case-studies/closing-the-loop/hero-image.jpg',
    kpis: [
      {
        label: 'Friction-free exits',
        before: '50%',
        after: '80%+',
        delta: '↑ 30pts through iteration',
      },
      {
        label: 'Scan & Go adoption',
        before: '24%',
        after: '~40%',
        delta: '↑ #1 US retail store app',
      },
      {
        label: 'Exit OSAT',
        before: '63',
        after: '90+',
        delta: '↑ 27pts · weakest to strongest',
      },
      {
        label: 'Unpaid item recovery',
        before: '1×',
        after: '3×',
        delta: '↑ vs manual associate scan',
      },
    ],
  },
  sections: {
    coreTension: {
      tag: 'The Core Tension',
      titleHtml: 'Security and delight<br />were on a <em>collision course.</em>',
      body:
        "After the CES launch and national rollout, two competing forces sharpened. Economic pressures pushed for tighter loss-prevention at exit — more scrutiny, more intervention. Meanwhile, the member experience we'd built was working: satisfaction was up and adoption was climbing. Every layer of friction added would trade one win for another. The design work became: prove both can improve simultaneously.",
      pressure: {
        tag: 'The Pressure',
        title: 'Asset protection wanted more scrutiny. The business needed shrink to come down.',
        body:
          'The instinct was reasonable: more checking equals less shrink. But every intervention that stopped a member eroded the trust that made the system work. At launch, 50% of members got no-stop exits. The other 50% still experienced friction — and that number needed to move.',
      },
      bet: {
        tag: 'The Design Bet',
        title: 'Better AI accuracy would serve both goals, without adding human checkpoints.',
        body:
          'Rather than adding intervention layers, we invested in improving the CV model on harder cases: low-cart items, bulk merchandise, and unconventional placement. Better technology would improve shrink recovery and increase friction-free exits. The bet was simple: delight and security move together.',
      },
    },
    iterationWork: {
      tag: 'The Iteration Work',
      titleHtml: 'Four systems,<br /><em>iterated in parallel.</em>',
      body:
        "Post-launch design work is often invisible. It doesn't make headlines. But it's where outcomes are built. These are the specific design and system changes that moved the metrics.",
      rows: [
        {
          area: 'CV Model',
          observed:
            '80% accuracy at pilot. Large carts, bulk items, and unconventional placement caused misses. Friction-free rate held at 50%.',
          changed:
            'Iterative model retraining with real club data. Expanded training sets for high-shrink SKUs, oversized items, and low-cart placement.',
          outcome: 'Friction-free: 50% → 80%+',
        },
        {
          area: 'Exit Arch Hardware',
          observed:
            'Camera angle and distance created blind spots for specific cart configurations and varied across club formats.',
          changed:
            'Iterated arch geometry at Clubhouse, adjusted the camera array, and validated against CAD drawings for all 600 club layouts.',
          outcome: 'Consistent accuracy across all formats',
        },
        {
          area: 'App Onboarding',
          observed:
            'Members were unaware of the no-stop exit benefit. Traditional checkout users were not converting. Adoption plateaued at 24%.',
          changed:
            'Added contextual prompts at key journey moments plus a post-exit “next time, skip the line” nudge for traditional checkout users.',
          outcome: 'Adoption: 24% → ~40%',
        },
        {
          area: 'Member Trust Signals',
          observed:
            'Some members hesitated at the arch. Privacy concerns from earlier research resurfaced in live clubs.',
          changed:
            'Added clear visual confirmation states on the arch and messaging that reinforced confidence instead of compliance, with legal integrated into UX.',
          outcome: 'OSAT: 63 → 90+',
        },
      ],
    },
    progress: {
      eyebrow: 'Movement Over Time',
      titleHtml: 'The system improved<br /><em>without adding friction back.</em>',
      metrics: [
        {
          label: 'Friction-free exits',
          values: 'Pilot: 50% → Current: 80%+',
          beforeWidth: '50%',
          afterWidth: '80%',
          sublabel: '30pt improvement through CV model iteration and arch geometry optimization',
        },
        {
          label: 'Scan & Go adoption',
          values: 'Before launch: 24% → Now: ~40%',
          beforeWidth: '24%',
          afterWidth: '40%',
          sublabel: 'Highest adoption of any US retail store app · frictionless end-to-end journey removed the last barrier',
        },
        {
          label: 'Exit OSAT',
          values: 'Before: 63 → After: 90+',
          beforeWidth: '63%',
          afterWidth: '90%',
          sublabel: 'From the weakest step in the Scan & Go journey to the highest · 27pt improvement',
        },
        {
          label: 'Unpaid item recovery vs. manual',
          values: 'Manual: 1× baseline → AI system: 3×',
          beforeWidth: '33%',
          afterWidth: '99%',
          sublabel: 'Proved that delight and security are not in opposition · better AI = better outcomes on both dimensions',
        },
      ],
    },
    outcomePicture: {
      tag: 'Full Outcome Picture',
      titleHtml: 'Three systems improved<br />by <em>one design arc.</em>',
      rows: [
        {
          before: { value: '63', label: 'Exit OSAT' },
          title: 'Member experience: from the weakest link to the strongest.',
          description:
            'The exit — once the lowest-rated step in the Scan & Go journey — now matches the satisfaction of the app itself. Members describe the no-stop exit as magical and effortless. The promise of “skip the line” is finally fully delivered.',
          after: { value: '90+', label: 'Exit OSAT' },
        },
        {
          before: { value: '1×', label: 'Shrink recovery' },
          title: 'Loss prevention: better outcomes without adding friction.',
          description:
            'The system designed around member trust now recovers unpaid items at 3× the rate of manual human scanning. Better AI, not more human intervention, proved to be the path to both shrink reduction and member delight.',
          after: { value: '3×', label: 'vs manual' },
        },
        {
          before: { value: '24%', label: 'Scan & Go adoption' },
          title: 'Adoption: friction-free exit unlocked digital checkout at scale.',
          description:
            "A seamless end-to-end journey — from scan to no-stop exit — removed the last barrier to adoption. Sam's Club Scan & Go is now approaching 40%, the highest adoption rate of any retail store app in the United States.",
          after: { value: '~40%', label: 'Adoption' },
        },
      ],
    },
    imageSpread: {
      image: '/images/case-studies/closing-the-loop/image-spread.jpg',
      tag: 'Iterative Physical Design',
      titleHtml: 'The arch improved<br />with every iteration.',
      body:
        'Camera geometry, arch clearance, and distance parameters were all refined post-launch across 600 club layouts. What launched at CES was version one. What members experience today is the product of continuous design iteration.',
    },
    context: {
      tag: 'Why This Matters',
      titleHtml: 'Scale that<br /><em>no one else</em> matched.',
      bodyHtml:
        "<strong>Amazon scaled back Just Walk Out</strong> from most grocery locations, quietly replacing it with simpler checkout systems. <strong>Walmart's own parent company</strong> has not replicated Sam's Club's model at national scale. <strong>Sam's Club</strong>, with a lean in-house team and a disciplined iterative process, deployed to 600 clubs serving 30 million members — and kept improving it after launch.<br /><br />The differentiator wasn't budget or headcount. It was the design premise: <strong>start with the member experience, iterate on the hardest constraints, let trust drive both satisfaction and security.</strong> That bet paid off across every dimension simultaneously.",
      quote: {
        body: "We've again raised the bar on convenience by helping shoppers bypass the line at exit.",
        cite: "Todd Garner · Chief Product Officer, Sam's Club",
      },
      impactMetrics: [
        { value: '80%+', labelHtml: 'Friction-free<br />exit rate' },
        { value: '~40%', labelHtml: 'Scan &amp; Go<br />adoption' },
        { value: '90+', labelHtml: 'Exit OSAT<br />score' },
        { value: '3×', labelHtml: 'Shrink recovery<br />vs manual' },
      ],
    },
    learnings: {
      tag: 'Design Principles Earned',
      titleHtml: 'What iterating at scale<br /><em>actually teaches you.</em>',
      items: [
        {
          number: '01',
          title: 'The launch is not the product.',
          body: '50% friction-free at launch was the start, not the finish. The 30-point improvement to 80%+ came from iteration, not the original build.',
        },
        {
          number: '02',
          title: 'Delight and security compound together.',
          body: 'Every iteration that improved member trust also improved shrink recovery. These are not competing goals — they are the same design challenge viewed from different angles.',
        },
        {
          number: '03',
          title: 'Digital adoption follows physical experience.',
          body: "The biggest unlock for Scan & Go adoption wasn't in-app design — it was solving the physical exit. The end of the journey was the key to the beginning.",
        },
      ],
    },
  },
} as const;
