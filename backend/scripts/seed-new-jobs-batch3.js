/**
 * Seed new job listings from batch 3 PDFs (17 Jun 2026)
 * Jobs:
 *  1. Duke-NUS - Part-time Field Data Collectors
 *  2. FC Investment Management - Fund Administrator
 *  3. LumenFuture - Laser Application Engineer (CAD & Production)
 *  4. Mandarin Learning Tours - Video Editor / Videographer
 *  5. MC Packaging - Sales Liaison Officer
 *
 * Usage: node backend/scripts/seed-new-jobs-batch3.js
 */
require('dotenv').config({ path: require('path').join(__dirname, '../../backend/.env') });
const mysql = require('mysql2/promise');

async function seed() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false },
  });

  console.log('✅ Connected to database');

  // Get the first available employer_id
  const [empRows] = await conn.query('SELECT id FROM employers ORDER BY id ASC LIMIT 1');
  if (empRows.length === 0) {
    console.error('❌ No employer found. Run npm run setup-db first.');
    process.exit(1);
  }
  const employerId = empRows[0].id;
  console.log('Using employer_id:', employerId);

  const jobs = [
    {
      title: 'Part-time Field Data Collectors',
      description: `Duke-NUS Medical School is looking for part-time field staff to support a research study examining consumer beverage choices in hawker centres and related beverage outlets located in Central Singapore.

Responsibilities include conducting intercept surveys at selected locations. The successful candidate will be expected to commence work as soon as possible, with the role anticipated to continue until September 2026.

Key Responsibilities:
• Engage members of the public to gauge their interest to participate
• Obtain consent from participants and explain study procedures
• Administer brief surveys on a tablet computer at selected hawker centres and beverage outlets

Application Details:
Please submit your application through the NUS Careers portal:
https://careers.nus.edu.sg/job/Casual-Management-Support-Officer/31689-en_GB/

Note: Applications submitted through email will NOT be accepted.
For further questions about the role, contact Ms. Nguyen Ngoc Linh at linhng@nus.edu.sg.`,
      requirements: `• Must be legally eligible to work in Singapore
• Minimum of 15 work hours per week, with flexible scheduling based on availability
• No prior experience required — fresh graduates and alumni are welcome
• Role runs until September 2026`,
      location: 'Central Area, Singapore',
      job_type: 'part-time',
      category: 'Research',
      salary_min: 14,
      salary_max: 14,
      deadline: '2026-09-30',
      company: 'Duke-NUS Graduate Medical School',
    },
    {
      title: 'Fund Administrator',
      description: `FC Investment Management Pte Ltd is hiring a full-time Fund Administrator based in Singapore.

What You Will Do:
• Daily fund administration & operations
• Maintain records, filings & documentation
• Handle capital calls, distributions & payments
• Perform bookkeeping & bank reconciliations
• Prepare management & annual reports
• Send investor notices & provide KYC/AML support
• Assist with compliance & regulatory support
• Carry out any other matters assigned by the supervisor

Contact: careers@frxcapital.com.sg`,
      requirements: `• Diploma or Degree in Finance, Accounting, or Business (fresh graduates welcome)
• Proficient in MS Excel, Word & PowerPoint
• Strong attention to detail
• Good communication skills
• Organised and able to multi-task
• Prior internship experience is a plus`,
      location: 'Singapore',
      job_type: 'full-time',
      category: 'Finance',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'FC Investment Management Pte Ltd',
    },
    {
      title: 'Laser Application Engineer (CAD & Production)',
      description: `LumenFuture Pte. Ltd is urgently hiring a Laser Application Engineer based in Kampong Ubi, Central Region.

About the Role:
Design, create, and test production samples using CAD software and laser equipment while supporting customer applications and product development.

Key Responsibilities:
• Prepare production drawings using SolidWorks, AutoCAD, or similar CAD software
• Design and create product samples, prototypes, and demonstration pieces
• Modify customer artwork and technical drawings for production requirements
• Set up and operate laser cutting, laser engraving, and related production equipment
• Optimise cutting and engraving parameters for different materials
• Conduct testing and quality checks on finished products
• Develop new product applications and sample concepts
• Explore innovative uses of laser technology and fabrication processes
• Work with sales and marketing teams to create demonstration samples and customer solutions
• Provide basic technical support and application guidance to customers

About LumenFuture:
Lumen Future is a Singapore-based company specialising in industrial equipment, fabrication solutions, and product application development. They work closely with businesses to deliver practical manufacturing and production solutions through innovative technology and hands-on technical expertise.`,
      requirements: `• Diploma or Degree in Mechanical Engineering, Manufacturing Engineering, Industrial Design, or related field
• Experience using CAD software such as SolidWorks or AutoCAD
• Experience operating laser cutting, laser engraving, CNC, or fabrication equipment preferred
• Strong hands-on technical aptitude
• Creative mindset with interest in product development and innovation
• Able to work independently and solve technical problems
• Must be eligible to work in Singapore`,
      location: 'Kampong Ubi, Central Region, Singapore',
      job_type: 'full-time',
      category: 'Engineering',
      salary_min: 3500,
      salary_max: 5000,
      deadline: '2026-08-31',
      company: 'LumenFuture Pte. Ltd',
    },
    {
      title: 'Video Editor / Videographer',
      description: `Mandarin Learning Tours (MLT) is a boutique founder-led experiential travel company based in Singapore. They design immersive Mandarin cultural journeys for families with young children aged 2 to 6, placing them inside real living cultural environments. Their flagship experience is based in Beijing, with journeys expanding across China and internationally.

The Role:
You'll operate in a backend capacity — owning the content pipeline from raw footage to published post. The immediate priority is to clear the edit backlog, then grow into ongoing seasonal content, documentary-style storytelling, and a video podcast.

You will work closely with the founder, absorbing the brand's aesthetic, narrative context behind each trip, and the editing instincts that define MLT content. Within 3–6 months, the expectation is that you review footage independently, propose directions, and deliver first cuts with minimal briefing — while travelling.

What You'll Do:
• Travel with the team for 6+ tours per year (approx. 7–10 days each) to film on the ground — behind-the-scenes, children, families, educators, and unscripted moments (currently Beijing-based, expanding internationally)
• Edit family travel films, reels, and educational clips for Instagram (and YouTube in future)
• Manage file archival on Google Drive
• Maintain a content calendar
• Apply bilingual (English/Mandarin) captions
• Photo editing for social media and the MLT website
• Create social media graphics, carousels, and promotional collateral
• Perform website updates (text, images, basic layout)

Working Arrangements:
On-site at the Singapore home office when the founder is in Singapore. Remote arrangements introduced gradually over time. During tours, days run approximately 8am–8pm in the field, followed by footage organisation and editing in the evening.

What We Offer:
• SGD $2,800–$3,000/month (commensurate with experience), 3-month probation period
• 6–10 weeks of fully expensed international travel per year (flights, accommodation, meals)
• CPF contributions per MOM requirements
• Annual leave per MOM Employment Act, increasing with tenure
• Off in lieu for weekend/public holiday work during tours
• Real creative ownership with a clear path toward full autonomy

How to Apply:
Send the following to jolyne@mandarinlearningtours.com:
• A short note describing who you are and why this role interests you
• Your portfolio or demo reel (Google Drive link is fine)
• CV or brief summary of relevant experience
• Design or photo editing samples`,
      requirements: `• Strong narrative editing sensibilities
• Ability to perform colour grading to maintain a consistent, high-quality visual style
• Technically sound in common editing software (Adobe Premiere, Capcut, Adobe Podcast Studio, Final Cut Pro, or similar)
• Proficient in handling DSLR and gimbal (gear provided)
• Ability to capture documentary-style footage — anticipate moments, move discreetly, good eye
• Proficiency in both English and Mandarin (much of the footage is in Mandarin; independent editing is not possible without comprehension)
• Photo editing capabilities for social and web
• Female candidates only (bona fide occupational requirement due to shared accommodation during Beijing tours)
• Mid-20s to early 30s
• Singapore Citizens and PRs preferred — culturally fluent in both English-dominant and Mandarin-speaking environments
• Outdoorsy, outgoing lifestyle (hiking, sport, travel)
• Proactive, accountable, and self-driven — plans own week and delivers without being chased
• Emotionally intelligent and discreet; at ease in intimate family settings with young children
• Resilient and adaptable in unpredictable tour environments`,
      location: 'Singapore (with international travel)',
      job_type: 'full-time',
      category: 'Media',
      salary_min: 2800,
      salary_max: 3000,
      deadline: '2026-08-31',
      company: 'Mandarin Learning Tours Pte. Ltd',
    },
    {
      title: 'Sales Liaison Officer',
      description: `MC Packaging Pte Ltd is a metal tin can manufacturer based in Singapore with more than 50 years of experience in the industry.

Vision: To be a leading one-stop metal packaging solutions service provider offering best value and quality to our customers.

Key Responsibilities:
• Relationship Management — Build strong relationships with internal & external customers to ensure key deliverables are met consistently through frequent communication & follow-up
• Sales Support — Assist and support the sales team on order, delivery, quality & sample-related activities through active communication with internal & external stakeholders
• Record Management & Traceability — Maintain and implement a good paper trail on all sales-related activities
• Teamwork — Work as a team in achieving team KPIs and targets

Role Attributes We Value:
• Resourceful and persistent with a "can do" attitude
• Passionate and not afraid to ask questions
• Does the right thing even when nobody is looking
• Team first, individual second

Contact: Send resume to Nicholas Ng at Nicholas.ng@mcpsing.com.sg or call +65 9737 2471.`,
      requirements: `• Minimum Diploma qualification
• 2 years of experience in sales coordination, client relations, or a liaison-type role
• Exceptional verbal and written communication skills with the ability to negotiate and resolve conflicts
• Knowledge of import/export and shipping requirements
• Proficient in Microsoft Office (Word, Excel, PowerPoint) and experience with CRM platforms (Salesforce)
• Highly organised, detail-oriented, and capable of collaborating with various levels of management
• Experience in Supply Chain Management is a plus`,
      location: 'Singapore',
      job_type: 'full-time',
      category: 'Sales',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'MC Packaging Pte Ltd',
    },
  ];

  let inserted = 0;
  for (const job of jobs) {
    await conn.query(
      `INSERT INTO jobs (employer_id, title, description, requirements, location, job_type, category, salary_min, salary_max, deadline, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')`,
      [
        employerId,
        job.title,
        job.description,
        job.requirements,
        job.location,
        job.job_type,
        job.category,
        job.salary_min,
        job.salary_max,
        job.deadline,
      ]
    );
    inserted++;
    console.log(`✅ Inserted: ${job.title} — ${job.company}`);
  }

  console.log(`\n🎉 Done! ${inserted} jobs added to the portal.`);
  await conn.end();
}

seed().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
