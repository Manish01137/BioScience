/*  Blog content for Biospire Lifesciences
 *  Block model used by BlogPost.jsx:
 *    { t:'p',  x }                      → paragraph (supports **bold**)
 *    { t:'h',  x }                      → section heading
 *    { t:'ul', items:[...] }            → bullet list (each item supports **lead —** rest)
 *    { t:'table', head:[...], rows:[[...]] }
 *    { t:'quote',    x }                → emphasised pull-quote
 *    { t:'clinical', x }                → "Clinical Consideration" callout
 *    { t:'bottom',   x }                → "The Bottom Line" closing block
 */

export const BLOGS = [
  {
    slug: 'why-most-iron-supplements-fail',
    number: '01',
    category: 'Iron Science',
    readTime: '6 min read',
    icon: 'FiAlertCircle',
    accent: '#1A292F',
    title: 'Why Most Iron Supplements Fail — And What Actually Works',
    subtitle:
      'The real reason iron supplements underperform — and an evidence-based approach that delivers.',
    excerpt:
      'Iron deficiency is the world’s most common nutritional disorder, yet millions who supplement daily never fully recover. The problem usually isn’t consistency — it’s absorption.',
    body: [
      { t: 'p', x: 'Iron deficiency is the world’s most common nutritional disorder – and yet millions of people who take iron supplements daily never fully recover.' },
      { t: 'quote', x: 'Many patients take iron supplements consistently, yet fail to achieve optimal results. The problem often isn’t the intake – it’s the absorption.' },
      { t: 'p', x: 'The problem usually isn’t willpower or consistency — it’s the supplement itself. You take the pill. You follow the label. And yet the fatigue lingers, the numbers don’t budge. Here’s the science behind why – and what to do differently.' },

      { t: 'h', x: 'The Absorption Problem Nobody Talks About' },
      { t: 'p', x: 'The average iron supplement is absorbed at just **3–6%**. So if you swallow a 65 mg tablet, your body may use as little as 2–4 mg. The rest? Gone.' },
      { t: 'p', x: 'A hormone called **hepcidin** controls this. When inflammation is present – which is common in illness, stress, or intense exercise – hepcidin blocks absorption entirely. Taking more iron won’t fix that.' },
      { t: 'p', x: 'Most supplement makers engineer for cost and shelf life. Not for what actually happens in your gut.' },

      { t: 'h', x: 'Why Most Iron Supplements Fall Short' },
      { t: 'ul', items: [
        'Poor Absorption — Most cheap supplements use ferrous sulfate: hard on the stomach, poorly absorbed. Many people quit within weeks due to nausea and constipation.',
        'Dietary Interference — Coffee, tea, and calcium block iron absorption. Vitamin C boosts it by up to 300%. Most people don’t know this.',
        'Wrong Dose Timing — Taking iron at the wrong time reduces effectiveness significantly. High daily doses trigger hepcidin, and studies show every-other-day dosing actually absorbs better than daily.',
        'Gastrointestinal Side Effects — Nausea, constipation, and gastric discomfort often lead to a poor patient experience.',
        'Low Adherence — Due to side effects and slow results, patients frequently discontinue supplementation early.',
        'Ignoring the Root Cause — Heavy periods, gut inflammation, celiac disease — supplementing without fixing the source is pointless.',
      ] },

      { t: 'h', x: 'How Different Iron Forms Compare' },
      { t: 'table',
        head: ['Form of Iron', 'Absorption', 'Tolerability'],
        rows: [
          ['Ferrous Sulfate', 'Moderate', 'Poor'],
          ['Ferrous Gluconate', 'Moderate', 'Better'],
          ['Ferrous Bisglycinate', 'High', 'Excellent'],
          ['Iron Polysaccharide', 'Moderate', 'Very Good'],
          ['Liposomal Iron', 'Very High', 'Excellent'],
          ['IV Iron (medical)', '100%', 'Clinical Setting'],
        ] },

      { t: 'h', x: 'What Actually Works – An Evidence-Based Approach' },
      { t: 'p', x: 'The good news: iron deficiency is highly treatable when you take the right approach. Here’s what the current evidence supports:' },
      { t: 'ul', items: [
        'Choose ferrous bisglycinate or liposomal iron — These forms are absorbed more efficiently and cause far fewer GI side effects. They cost a little more, but the trade-off in tolerability and results is well worth it.',
        'Take it every other day, not daily — Alternate-day dosing (e.g. Monday, Wednesday, Friday) allows hepcidin to reset between doses, resulting in higher cumulative absorption over time.',
        'Pair with vitamin C — Take 250–500 mg of vitamin C alongside your iron. Ascorbic acid converts iron into its more absorbable ferrous form and chelates it to protect against inhibitors.',
        'Take on an empty stomach when possible — If GI discomfort is an issue, take it with a small amount of food – but avoid coffee, tea, dairy, and calcium supplements within 2 hours.',
      ] },

      { t: 'bottom', x: 'Iron deficiency persists not because people aren’t trying – it’s because the most-recommended solutions are often the least effective ones. Cheap supplements in poor forms, taken at the wrong time, in too-high doses, without addressing the underlying cause: this is a recipe for frustration. The shift is simple in principle: choose a well-absorbed form, use a smarter dosing strategy, optimise your absorption window, and partner with a clinician to understand the root cause. Iron is one of the most fundamental nutrients your body needs. You deserve a strategy that actually delivers it.' },
    ],
  },

  {
    slug: 'bioavailability-vs-dosage',
    number: '02',
    category: 'Formulation',
    readTime: '5 min read',
    icon: 'FiTrendingUp',
    accent: '#6B8E99',
    title: 'Bioavailability vs Dosage — What Really Matters in Iron Supplementation?',
    subtitle:
      'A closer look at why absorption efficiency matters more than simply increasing iron strength.',
    excerpt:
      'Higher numbers are commonly perceived as more effective. But outcomes depend far more on how much iron the body can actually absorb and utilise.',
    body: [
      { t: 'p', x: 'Iron supplementation is often judged by dosage alone. Higher numbers are commonly perceived as more effective — both by patients and sometimes even in routine clinical practice. However, outcomes depend far more on **how much iron the body can actually absorb and utilise**.' },
      { t: 'p', x: 'Understanding the difference between dosage and bioavailability is essential for achieving better results.' },

      { t: 'h', x: 'What Is Bioavailability?' },
      { t: 'p', x: 'Dosage is the amount of iron listed on the label. Bioavailability is how much of that iron your body can actually absorb and put to use. In simple terms:' },
      { t: 'ul', items: [
        'High dosage does not always mean high absorption',
        'Lower doses with better absorption may deliver superior outcomes',
      ] },
      { t: 'p', x: 'This is why two supplements with similar iron content can produce very different clinical responses. A 65 mg ferrous sulfate tablet and a 25 mg ferrous bisglycinate capsule may deliver comparable usable iron — because the latter absorbs far more efficiently.' },

      { t: 'h', x: 'Why Dosage Alone Can Be Misleading' },
      { t: 'p', x: 'Many conventional supplements focus heavily on elemental iron quantity. But increasing dosage without considering absorption often leads to:' },
      { t: 'ul', items: [
        'Increased gastrointestinal discomfort',
        'Reduced patient compliance',
        'Poor long-term continuation',
        'Inconsistent improvement in hemoglobin levels',
      ] },
      { t: 'p', x: 'In many cases, excess unabsorbed iron simply passes through the digestive system without delivering meaningful benefit. Worse, a high single dose triggers a spike in hepcidin — the hormone that actively blocks iron absorption — making the next dose even less effective.' },

      { t: 'h', x: 'The Role of Absorption Efficiency' },
      { t: 'p', x: 'Efficient iron supplementation depends on several key factors:' },
      { t: 'ul', items: [
        'Iron form and stability — the chemical form determines how readily iron crosses the gut wall.',
        'Gastrointestinal tolerability — poor tolerance leads to early discontinuation.',
        'Supportive nutrients — vitamin C can enhance absorption by up to 300%.',
        'Timing of administration — every-other-day dosing often outperforms daily high doses.',
        'Food and beverage interactions — coffee, tea, and calcium significantly inhibit absorption.',
      ] },
      { t: 'p', x: 'Modern formulation approaches focus on improving these parameters rather than relying on higher dosage strengths alone.' },

      { t: 'h', x: 'How Different Iron Forms Compare' },
      { t: 'table',
        head: ['Form', 'Bioavailability', 'Gut Tolerance'],
        rows: [
          ['Ferrous Sulfate', 'Low–Moderate', 'Poor'],
          ['Ferrous Gluconate', 'Moderate', 'Fair'],
          ['Ferrous Bisglycinate', 'High', 'Excellent'],
          ['Liposomal Iron', 'Very High', 'Excellent'],
        ] },

      { t: 'h', x: 'Why Tolerability Matters as Much as Absorption' },
      { t: 'p', x: 'One of the biggest barriers in iron supplementation is poor patient adherence. Side effects such as nausea, constipation, gastric irritation, and metallic taste often lead patients to discontinue treatment early — before any meaningful clinical benefit is achieved.' },
      { t: 'p', x: 'Better tolerated formulations support consistency. And consistency is what ultimately drives outcomes.' },

      { t: 'h', x: 'Smarter Iron Supplementation' },
      { t: 'p', x: 'Effective supplementation is not about delivering more iron. It is about delivering iron more efficiently. When bioavailability, tolerability, and patient compliance work together, supplementation becomes significantly more effective than simply increasing the dose.' },
      { t: 'quote', x: 'Absorption quality matters more than numerical dosage alone.' },

      { t: 'clinical', x: 'In cases where improved absorption and better tolerability are required — such as in patients with IBD, chronic inflammation, poor gut health, or persistent non-response to standard formulations — advanced iron formulations may be considered under appropriate medical guidance.' },
    ],
  },

  {
    slug: 'increasing-iron-dose-hemoglobin',
    number: '03',
    category: 'Clinical',
    readTime: '8 min read',
    icon: 'FiActivity',
    accent: '#C5A059',
    title: 'Why Increasing Iron Dose Doesn’t Always Improve Hemoglobin',
    subtitle:
      'Understanding the hidden factors that affect iron utilisation, absorption, and patient response.',
    excerpt:
      'When hemoglobin doesn’t improve, the instinct is to increase the dose. But the body benefits from absorbed iron — not just consumed iron.',
    body: [
      { t: 'p', x: 'A common assumption in iron supplementation is that increasing the dose will automatically improve hemoglobin levels faster. However, clinical experience consistently shows otherwise. Many patients continue to experience fatigue, weakness, and slow recovery despite taking higher iron doses regularly. The reason is straightforward:' },
      { t: 'quote', x: 'The body benefits from absorbed iron — not just consumed iron.' },

      { t: 'h', x: 'Why Higher Doses May Not Deliver Better Results' },
      { t: 'p', x: 'When hemoglobin levels don’t improve, the instinct is to increase the dose. But pushing the dose higher without addressing absorption often creates more problems than it solves:' },
      { t: 'ul', items: [
        'Poor gastrointestinal tolerance',
        'Reduced patient adherence',
        'Lower absorption efficiency',
        'Increased digestive discomfort',
      ] },
      { t: 'p', x: 'In many cases, excessive iron intake reduces consistency because patients struggle with side effects and discontinue treatment before meaningful clinical benefit is achieved.' },

      { t: 'h', x: 'The Hepcidin Factor' },
      { t: 'p', x: 'High-dose iron triggers the release of **hepcidin** — a hormone that actively blocks iron from entering the bloodstream. This is a protective mechanism, but it directly undermines supplementation. The result: the larger the single dose, the less the body actually absorbs. Studies show that lower doses on alternate days allow hepcidin to normalise, leading to significantly better net absorption over time.' },
      { t: 'table',
        head: ['Dosing Strategy', 'Hepcidin Response', 'Net Absorption'],
        rows: [
          ['High daily dose', 'Elevated – blocks absorption', 'Lower'],
          ['Low alternate-day dose', 'Normalised', 'Higher'],
          ['Split doses (morning/evening)', 'Partially elevated', 'Moderate'],
        ] },

      { t: 'h', x: 'The Absorption Limitation' },
      { t: 'p', x: 'The body can only absorb a limited amount of iron at a time. Increasing dosage beyond what can be efficiently processed does not improve outcomes — it simply increases the burden on the digestive system, leading to:' },
      { t: 'ul', items: [
        'Nausea',
        'Constipation',
        'Gastric irritation',
        'Poor continuation of therapy',
      ] },
      { t: 'p', x: 'This is one of the primary reasons many patients fail to show expected hemoglobin improvement despite regular supplementation.' },

      { t: 'h', x: 'When Inflammation Is the Real Barrier' },
      { t: 'p', x: 'Chronic inflammation — from infection, autoimmune conditions, kidney disease, or intense physical training — independently raises hepcidin levels. This is clinically recognised as **Anaemia of Chronic Disease** or **Anaemia of Inflammation**. In this state, iron stores may be adequate, but the body cannot mobilise or utilise them effectively. Increasing the dose in this scenario delivers no meaningful benefit. Addressing the underlying inflammation is the necessary first step.' },

      { t: 'h', x: 'Gut Health and Absorption Efficiency' },
      { t: 'p', x: 'Even an appropriate dose can fail when the gut is compromised. Conditions that significantly impair iron absorption include:' },
      { t: 'ul', items: [
        'Celiac disease — damages the intestinal lining where iron absorption occurs.',
        'IBD / Crohn’s disease — mucosal inflammation directly blocks iron uptake.',
        'H. pylori infection — impairs iron bioavailability at the gastric level.',
        'Low stomach acid — reduces iron solubility before it reaches the absorption site.',
      ] },
      { t: 'p', x: 'Optimising dosage without addressing gut health is a clinically incomplete approach.' },

      { t: 'h', x: 'The Importance of Formulation Quality' },
      { t: 'p', x: 'Modern iron supplementation focuses not only on elemental iron strength, but on the quality of delivery. Well-designed formulations prioritise:' },
      { t: 'ul', items: [
        'Bioavailability — ensuring iron is absorbed efficiently at lower doses.',
        'Stability — maintaining iron integrity through the digestive process.',
        'Gastrointestinal tolerability — reducing side effects that lead to discontinuation.',
        'Nutrient synergy — supporting co-factors like vitamin C, B12, and folate that are essential for hemoglobin synthesis.',
      ] },
      { t: 'p', x: 'Higher elemental iron content on a label does not reflect clinical effectiveness. Absorption quality does.' },

      { t: 'h', x: 'The Compliance Factor' },
      { t: 'p', x: 'No supplement works effectively if patients discontinue it midway. Poor tolerability is one of the leading causes of treatment failure in iron deficiency management. Better tolerated formulations support regular, consistent intake — and consistency plays a far greater role in long-term hemoglobin correction than aggressive dosing strategies.' },
      { t: 'quote', x: 'Consistency often matters more than quantity.' },

      { t: 'h', x: 'A Smarter Clinical Approach' },
      { t: 'p', x: 'Rather than automatically increasing dosage when hemoglobin response is inadequate, a more targeted evaluation is warranted:' },
      { t: 'ul', items: [
        'Assess the full picture — ferritin, serum iron, TIBC, transferrin saturation, CRP, B12, folate.',
        'Rule out absorption barriers — gut health, H. pylori, celiac screening.',
        'Optimise iron form — ferrous bisglycinate or liposomal iron offer superior absorption with significantly better tolerability.',
        'Adjust dosing frequency — alternate-day dosing frequently outperforms daily high-dose regimens.',
        'Address co-deficiencies — B12 and folate must be corrected alongside iron for effective hemoglobin synthesis.',
        'Consider IV iron — when oral supplementation consistently fails, intravenous iron bypasses all absorption barriers entirely.',
      ] },

      { t: 'clinical', x: 'In situations where absorption efficiency and tolerability are important considerations — particularly in patients with chronic inflammation, GI conditions, or persistent non-response to standard formulations — advanced iron formulations may be considered under appropriate medical guidance.' },

      { t: 'bottom', x: 'A flat hemoglobin response to iron supplementation is not a signal to simply take more. It is a signal to look deeper — at absorption, hepcidin activity, inflammation, gut integrity, co-deficiencies, and formulation quality. Effective iron supplementation is not about delivering more iron. It is about delivering iron the body can actually use.' },
    ],
  },

  {
    slug: 'patient-compliance-iron-supplements',
    number: '04',
    category: 'Patient Care',
    readTime: '5 min read',
    icon: 'FiUsers',
    accent: '#4a6e78',
    title: 'Why Patients Stop Taking Iron Supplements — And How to Improve Compliance',
    subtitle:
      'Understanding the role of tolerability, comfort, and consistency in successful iron supplementation.',
    excerpt:
      'The challenge in iron therapy is not just prescribing the right supplement. It is ensuring patients continue taking it consistently.',
    body: [
      { t: 'p', x: 'Iron supplementation is often recommended for long-term correction of deficiency — yet many patients discontinue treatment far earlier than advised. The challenge in iron therapy is not just prescribing the right supplement. It is ensuring patients continue taking it consistently.' },
      { t: 'quote', x: 'Poor adherence is one of the most underestimated reasons iron deficiency fails to resolve — even when the diagnosis is correct.' },

      { t: 'h', x: 'Why Patients Commonly Stop' },
      { t: 'p', x: 'When supplementation becomes uncomfortable, patients skip doses or stop treatment altogether. The most common reasons include:' },
      { t: 'ul', items: [
        'Nausea and stomach discomfort',
        'Constipation and digestive irritation',
        'Metallic taste',
        'Bloating and heaviness',
        'No visible improvement in the short term',
      ] },
      { t: 'p', x: 'Standard formulations — particularly ferrous sulfate — are the most frequent offenders. For many patients, the side effects are disruptive enough to make continuation feel impossible.' },

      { t: 'h', x: 'Why Compliance Matters Clinically' },
      { t: 'p', x: 'Iron correction requires consistency over time. Irregular intake significantly delays improvement in:' },
      { t: 'ul', items: [
        'Hemoglobin levels',
        'Energy and fatigue recovery',
        'Overall nutritional status',
      ] },
      { t: 'p', x: 'When patients discontinue prematurely, they may be incorrectly labelled as non-responders — leading to unnecessary dose escalations or investigations. Poor compliance doesn’t just delay recovery. It distorts the clinical picture entirely.' },

      { t: 'h', x: 'The Importance of Better Tolerability' },
      { t: 'p', x: 'A supplement the patient cannot tolerate will always fail — regardless of its elemental iron content. Modern supplementation approaches prioritise patient experience alongside iron strength. Better tolerated formulations help:' },
      { t: 'ul', items: [
        'Reduce gastrointestinal discomfort',
        'Improve patient acceptance',
        'Support regular intake',
        'Enhance long-term continuation',
      ] },
      { t: 'p', x: 'Switching to **ferrous bisglycinate** or **liposomal iron** can dramatically reduce side effects without compromising — and often improving — absorption efficiency.' },

      { t: 'h', x: 'The Role of Patient Education' },
      { t: 'p', x: 'Simple, clear guidance significantly improves adherence:' },
      { t: 'ul', items: [
        'Timing — take on an empty stomach where tolerated; alternate-day dosing reduces hepcidin response and improves absorption.',
        'Pairing — always take with vitamin C for enhanced absorption.',
        'Avoid within 2 hours — coffee, tea, dairy, and calcium supplements block iron uptake.',
        'Set expectations — energy improvements take 2–4 weeks; hemoglobin normalisation takes 6–8 weeks; full ferritin replenishment may take 3–6 months.',
      ] },
      { t: 'p', x: 'Patients who understand what to expect are far more likely to persist through the early period when side effects are most prominent.' },

      { t: 'h', x: 'A Smarter Approach' },
      { t: 'p', x: 'Effective iron supplementation is built on three factors working together:' },
      { t: 'quote', x: 'Absorption. Tolerability. Adherence.' },
      { t: 'p', x: 'When all three are addressed, patients are significantly more likely to continue therapy and achieve meaningful clinical improvement. Comfort and consistency often determine long-term success far more than dosage strength alone.' },

      { t: 'clinical', x: 'In patients with a history of poor tolerance to standard oral iron, or those who have previously discontinued therapy due to side effects, advanced iron formulations offering improved tolerability and bioavailability may be considered under appropriate medical guidance.' },

      { t: 'bottom', x: 'The best iron supplement is the one the patient actually keeps taking. Choosing better tolerated formulations, simplifying dosing, setting realistic expectations, and providing clear guidance are not optional enhancements — they are the clinical foundation of effective iron deficiency management.' },
    ],
  },

  {
    slug: 'foods-habits-reduce-iron-absorption',
    number: '05',
    category: 'Lifestyle',
    readTime: '5 min read',
    icon: 'FiCoffee',
    accent: '#243a41',
    title: 'Foods and Habits That Can Reduce Iron Absorption',
    subtitle:
      'Understanding everyday factors that may affect the effectiveness of iron supplementation.',
    excerpt:
      'Many people take iron supplements regularly but still struggle to see improvement. Often the issue is not the supplement — but the daily habits surrounding it.',
    body: [
      { t: 'p', x: 'Many people take iron supplements regularly but still struggle to see improvement. In several cases, the issue is not the supplement itself — but the daily habits surrounding it.' },
      { t: 'quote', x: 'Even a well-designed formulation may not deliver results if iron is taken incorrectly.' },

      { t: 'h', x: 'Common Foods and Beverages That Block Absorption' },
      { t: 'p', x: 'Certain dietary components directly interfere with the body’s ability to absorb iron efficiently:' },
      { t: 'ul', items: [
        'Tea and Coffee — Tannins and polyphenols bind to iron and prevent absorption. Even one cup consumed close to your dose can significantly reduce uptake.',
        'Calcium and Dairy — Calcium competes with iron for the same absorption pathway. Milk, cheese, yogurt, and calcium supplements taken within two hours of iron can substantially reduce how much enters the bloodstream.',
        'High-Phytate Foods — Whole grains, bran, legumes, and nuts contain phytates that bind strongly to iron. Soaking or fermenting these foods can partially reduce their inhibitory effect.',
        'Antacids and Acid-Reducing Medications — Iron needs an acidic environment to absorb properly. PPIs and antacids raise gastric pH and can significantly impair iron uptake — an important consideration for patients on long-term acid suppression.',
      ] },

      { t: 'h', x: 'Why Timing Matters' },
      { t: 'p', x: 'When you take iron is just as important as what you take. Iron is best absorbed when:' },
      { t: 'ul', items: [
        'Taken on an empty stomach where tolerated',
        'Not consumed alongside interfering foods or beverages',
        'Separated from calcium, zinc, and magnesium supplements by at least 2 hours',
        'Avoided immediately after intense exercise — physical activity elevates hepcidin for several hours, blocking absorption',
      ] },
      { t: 'p', x: 'Incorrect timing can reduce the benefit of even the best formulation.' },

      { t: 'h', x: 'The Role of Vitamin C' },
      { t: 'p', x: 'Vitamin C is the most evidence-backed absorption enhancer available. Taking **250–500 mg** alongside iron can increase absorption by up to 300% by keeping iron in its most absorbable form. This is why several modern formulations include vitamin C as a supportive co-nutrient — not as a bonus, but as a clinically meaningful addition.' },

      { t: 'h', x: 'Quick Reference Guide' },
      { t: 'table',
        head: ['Avoid Near Iron Dose', 'Pair With Iron'],
        rows: [
          ['Tea and coffee', 'Vitamin C'],
          ['Dairy and calcium supplements', 'Water on an empty stomach'],
          ['Antacids and PPIs', 'Light non-inhibitory snack'],
          ['Zinc and magnesium supplements', '—'],
          ['High-bran or high-phytate foods', '—'],
        ] },

      { t: 'h', x: 'Consistency Is Equally Important' },
      { t: 'p', x: 'Skipping doses, changing timings frequently, or stopping supplementation too early delays improvement significantly. Successful supplementation depends on:' },
      { t: 'ul', items: [
        'Proper intake habits',
        'Consistent usage',
        'Better absorption support',
      ] },
      { t: 'p', x: 'Small daily habits make a significant difference in long-term outcomes. Irregular intake is one of the most common and preventable reasons patients fail to respond to therapy.' },

      { t: 'clinical', x: 'For individuals where dietary habits, medication use, or lifestyle factors consistently interfere with oral iron absorption, advanced formulations — such as liposomal iron — designed to bypass some of these barriers may be considered under appropriate medical guidance.' },

      { t: 'bottom', x: 'Effective iron supplementation is not only about what is consumed — but how and when it is consumed. The right supplement, taken the right way, at the right time makes all the difference. Proper timing, supportive nutrition, and a well-designed formulation working together — that is what drives real outcomes.' },
    ],
  },
]

export const getBlog = (slug) => BLOGS.find((b) => b.slug === slug)
