// Mock data for Bryce Platt Executive Brand website

export const brand = {
  name: "Bryce Platt",
  credentials: "PharmD",
  titles: ["Healthcare Economist", "Drug Channel Expert", "Director, Drug Channels Institute"],
  tagline: "Helping healthcare leaders understand the incentives shaping U.S. healthcare.",
  followers: "37,000+",
  yearsPublishing: "4+",
};

export const authorityStats = [
  { label: "Healthcare Professionals Following", value: "37K+", sub: "On LinkedIn, growing daily" },
  { label: "Consecutive Days Publishing", value: "1,400+", sub: "Daily educational insights" },
  { label: "Director", value: "DCI", sub: "Drug Channels Institute" },
  { label: "Annual Content Impressions", value: "12M+", sub: "Across healthcare leadership" },
];

// Real LinkedIn infographics served locally from /public
// Image mapping (verified):
//   /li-1.png = Hard Pills to Swallow (Drug Channel)
//   /li-2.png = Employer 340B Playbook
//   /li-3.png = Six Employer Reactions to GLP-1 Coverage
//   /li-4.png = Nine Types of Specialty Pharmacies (wheel)
//   /li-5.png = Drug Out-of-Pocket Costs / Policy Attention (iceberg)
export const featuredInsights = [
  {
    id: "drug-out-of-pocket-policy-attention",
    category: "Drug Pricing",
    readTime: "9 min read",
    date: "July 12, 2025",
    title: "Which Drug Out-of-Pocket Costs Actually Receive Policy Attention",
    summary: "Insulin dominates the debate, but GLP-1s, oncology, autoimmune, dermatologicals, migraine, and MS carry equally severe out-of-pocket burdens. Here is the iceberg beneath the headlines.",
    image: "/li-5.png",
  },
  {
    id: "nine-specialty-pharmacies",
    category: "Specialty Pharmacy",
    readTime: "13 min read",
    date: "July 8, 2025",
    title: "The Nine Types of Specialty Pharmacies, Explained",
    summary: "Business models, ownership structures, and channel strategies mapped as one framework — PBM-owned, health-plan-owned, health-system, retail, mail, manufacturer, independent, 340B, and niche.",
    image: "/li-4.png",
  },
  {
    id: "employer-glp1-reactions",
    category: "Employer Benefits",
    readTime: "7 min read",
    date: "July 3, 2025",
    title: "Six Employer Reactions to Obesity GLP-1 Coverage",
    summary: "From full coverage to never-cover, six distinct employer archetypes are shaping GLP-1 access. Each requires a different strategic response.",
    image: "/li-3.png",
  },
  {
    id: "employer-340b-playbook",
    category: "340B",
    readTime: "10 min read",
    date: "June 27, 2025",
    title: "The Employer 340B Playbook",
    summary: "Five plays employers can run to protect against 340B leakage — fix the PBM contract, control pharmacy network, optimize formulary, avoid shared savings, and track the right metrics.",
    image: "/li-2.png",
  },
  {
    id: "hard-pills-to-swallow",
    category: "Drug Channels",
    readTime: "8 min read",
    date: "June 21, 2025",
    title: "Six Hard Pills to Swallow for the Drug Channel",
    summary: "Lower list prices will not guarantee better access. PBMs will not work for free. Plan sponsors will not cover every treatment. The uncomfortable realities behind reform.",
    image: "/li-1.png",
  },
  {
    id: "medicare-part-d-redesign-2025",
    category: "Medicare",
    readTime: "11 min read",
    date: "June 15, 2025",
    title: "Medicare Part D Redesign: What Actually Changed for Beneficiaries and Plans",
    summary: "The $2,000 out-of-pocket cap reshapes plan liability, manufacturer discounts, and formulary strategy. Here is the incentive map behind the headlines.",
    image: "/li-5.png",
  },
];

// Article body sections (shared across featured articles for demo)
export const articleBody = [
  {
    id: "context",
    heading: "The Context",
    content: [
      "The United States pharmacy benefit landscape is shaped by three vertically-integrated organizations. Together, they touch nearly every prescription filled in America. To understand why reform efforts consistently under-deliver on price, we have to first understand the incentive architecture beneath the policy debate.",
      "Rebates, spread pricing, formulary placement, and network design are not accidents. They are the deliberate financial mechanisms through which the modern PBM captures margin. Any transparency effort that leaves these mechanisms intact will inevitably rearrange — rather than reduce — total drug spend.",
    ],
  },
  {
    id: "framework",
    heading: "The Framework",
    content: [
      "Consider a simple two-lens view. Lens one: the flow of product, from manufacturer to the end consumer. Lens two: the flow of dollars, which frequently moves in the opposite direction. Where these two lenses diverge is exactly where value leaks and where reform proposals typically miss their target.",
      "In practice, this means most 'transparency' bills disclose the mechanics of dollar flow without changing the underlying incentive to steer product toward higher-rebate SKUs. The result is more paperwork, similar outcomes.",
    ],
  },
  {
    id: "implications",
    heading: "The Implications",
    content: [
      "Health plans, employer purchasers, and policymakers evaluating PBM reform should pressure-test proposals against a single question: does this change the direction of the money, or merely its visibility? If the answer is 'visibility only,' the reform is unlikely to lower net cost.",
      "The most effective reforms redirect the manufacturer discount into the point-of-sale transaction, delink PBM revenue from list price, or unbundle the fiduciary role from the negotiating role. Each of these carries operational trade-offs that deserve serious debate.",
    ],
  },
  {
    id: "what-next",
    heading: "What to Watch Next",
    content: [
      "Three signals to track over the next four quarters: (1) point-of-sale rebate legislation activity at the state level, (2) health-plan carve-out momentum among self-insured employers, and (3) the FTC follow-through on its 6(b) study. Each represents a distinct pathway through which incentives could meaningfully shift.",
    ],
  },
];

export const topics = [
  { name: "Drug Channels", count: 42, description: "How money, product, and incentives move through the supply chain." },
  { name: "PBMs", count: 38, description: "Pharmacy benefit manager economics, contracting, and reform." },
  { name: "Specialty Pharmacy", count: 31, description: "Business models, limited distribution, and site of care." },
  { name: "Medicare", count: 27, description: "Part D redesign, IRA, CMS policy, and beneficiary impact." },
  { name: "Drug Pricing", count: 24, description: "List, net, WAC, and the mechanics behind every dollar." },
  { name: "340B", count: 18, description: "Contract pharmacies, manufacturer restrictions, and drift." },
  { name: "Market Access", count: 16, description: "Coverage decisions, utilization management, and access." },
  { name: "Employer Benefits", count: 14, description: "Plan design, GLP-1 strategy, and cost containment." },
  { name: "Healthcare Policy", count: 22, description: "Legislation, regulation, and operational implications." },
];

export const frameworks = [
  {
    id: "nine-specialty-pharmacies",
    number: "01",
    title: "The Nine Types of Specialty Pharmacies",
    summary: "Separate the business models, ownership structures, and distribution strategies that define modern specialty pharmacy.",
    tags: ["Specialty", "Business Models", "Distribution"],
    image: "/li-4.png",
  },
  {
    id: "pbm-incentive-model",
    number: "02",
    title: "The PBM Incentive Model",
    summary: "Rebates, spread, DIR fees, and vertical integration mapped as one incentive architecture.",
    tags: ["PBMs", "Incentives", "Rebates"],
    image: "/li-1.png",
  },
  {
    id: "drug-channel-ecosystem",
    number: "03",
    title: "The Drug Channel Ecosystem",
    summary: "Manufacturers, wholesalers, pharmacies, PBMs, payers, and beneficiaries — the full circulatory system of pharmacy.",
    tags: ["Drug Channels", "Supply Chain"],
    image: "/li-1.png",
  },
  {
    id: "medicare-part-d-simplified",
    number: "04",
    title: "Medicare Part D, Simplified",
    summary: "Deductible, initial coverage, catastrophic, and manufacturer discount phases redrawn for 2025 and beyond.",
    tags: ["Medicare", "Part D", "IRA"],
    image: "/li-5.png",
  },
  {
    id: "employer-340b-playbook",
    number: "05",
    title: "The Employer 340B Playbook",
    summary: "Five plays for self-insured employers to protect against 340B leakage and preserve pharmacy value.",
    tags: ["Employer", "340B", "Strategy"],
    image: "/li-2.png",
  },
  {
    id: "healthcare-value-chain",
    number: "06",
    title: "The Healthcare Value Chain",
    summary: "From payer to provider to end-consumer — who assumes risk, who captures margin, and where value leaks.",
    tags: ["Strategy", "Value"],
    image: "/li-3.png",
  },
];

export const publications = [
  {
    id: "dci-annual-2025",
    outlet: "Drug Channels Institute",
    date: "2025",
    title: "The 2025 Economic Report on U.S. Pharmacies and Pharmacy Benefit Managers",
    summary: "An in-depth analysis of the largest pharmacies, PBMs, and their evolving market positions across specialty and mail channels.",
    tags: ["Annual Report", "PBMs", "Pharmacy"],
    image: "/li-1.png",
  },
  {
    id: "specialty-pharmacy-report",
    outlet: "Drug Channels Institute",
    date: "2024",
    title: "The 2024 Economic Report on U.S. Specialty Pharmacies",
    summary: "Business models, ownership concentration, and the emerging channel dynamics reshaping specialty distribution.",
    tags: ["Specialty", "Distribution"],
    image: "/li-4.png",
  },
  {
    id: "milliman-benefit-design",
    outlet: "Milliman White Paper",
    date: "2022",
    title: "Employer Pharmacy Benefit Design Under Rising Specialty Cost",
    summary: "A structured approach to specialty benefit management for self-insured employers navigating trend pressure.",
    tags: ["Employer", "Benefit Design"],
    image: "/li-3.png",
  },
];

export const speakingTopics = [
  "The Economics of U.S. Drug Channels",
  "Inside the PBM: Incentives, Rebates, and Reform",
  "Medicare Part D in the IRA Era",
  "Specialty Pharmacy Business Models",
  "Employer Strategy for GLP-1 Therapies",
  "The Real Anatomy of a U.S. Drug Price",
];

export const speakingFormats = ["Keynotes", "Panels", "Podcasts", "Webinars", "Executive Workshops", "Conference Sessions"];

export const speakingEngagements = [
  { event: "Asembia Specialty Pharmacy Summit", role: "Panelist", year: "2025", location: "Las Vegas, NV" },
  { event: "AMCP Nexus", role: "Speaker", year: "2024", location: "Orlando, FL" },
  { event: "The Drug Channels Podcast", role: "Guest", year: "2024", location: "Remote" },
  { event: "NASP Annual Meeting", role: "Featured Speaker", year: "2024", location: "Washington, DC" },
  { event: "HLTH Conference", role: "Panelist", year: "2023", location: "Las Vegas, NV" },
];

export const timeline = [
  { year: "2010", label: "University of Kansas", detail: "Doctor of Pharmacy (PharmD)", code: "KU" },
  { year: "2014", label: "Independent Pharmacy", detail: "Community pharmacy operations and member care", code: "IP" },
  { year: "2016", label: "Population Health", detail: "Managed care and outcomes analytics", code: "PH" },
  { year: "2019", label: "Milliman", detail: "Healthcare consulting, PBM strategy, health economics", code: "MI" },
  { year: "2023", label: "Drug Channels Institute", detail: "Director — Research and executive education", code: "DCI" },
  { year: "2025", label: "Thought Leadership", detail: "37,000+ followers, daily educational insights, 4+ year streak", code: "TL" },
];

export const values = [
  { title: "Clarity", body: "Complex subjects should become understandable without sacrificing accuracy." },
  { title: "Evidence", body: "Opinions should be supported by data, legislation, and observable market dynamics." },
  { title: "Curiosity", body: "Examine healthcare through thoughtful questions rather than assumptions." },
  { title: "Objectivity", body: "Present multiple perspectives before drawing conclusions." },
  { title: "Education", body: "Every interaction should teach something new." },
  { title: "Long-Term Thinking", body: "Evaluate policy by sustainable outcomes, not short-term reactions." },
];
