/**
 * Seed new job listings from batch 4 PDFs
 * Jobs:
 *  1. Onemt Pte Ltd - Accounts Executive
 *  2. Crestar Enterprise Pte Ltd - Technical Specialist Officers
 *  3. PharmaGend Global Medical Services Pte Ltd - Trainee Production Technician
 *  4. 3 Eats Pte Ltd (Hua Kee) - Line Cook & Kitchen Assistant
 *  5. Telistar Solutions - Field Service Technician (Cold Storage Equipment)
 *
 * Usage: node backend/scripts/seed-new-jobs-batch4.js
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
      title: 'Accounts Executive',
      description: `Onemt Pte Ltd is hiring an Accounts Executive.

Contact: careers@onemtsg.com
Salary: $3,000 – $4,000/month

Key Responsibilities:

Financial Accounting & Bookkeeping:
• Perform daily bookkeeping entries and ensure timely recording of financial transactions.
• Assist with month-end and year-end closing activities, ensuring alignment between physical assets and books, ledger-to-ledger consistency, and proper supporting documentation.
• Timely preparation of monthly, quarterly, and annual financial statements.

Tax & Compliance Management:
• Support the company's tax filings and ensure full compliance with regulations.
• Assist with the company's annual audit, working with external auditors to provide required documentation.
• Assist with annual return filings and other government license renewals or compliance procedures.

Operational Support:
• Collaborate with other departments and provide necessary financial data support.
• Work closely with Finance team to support finance operations and reporting.
• Assist in organising financial data for audit and compliance purposes.
• Perform ad-hoc finance and administrative support tasks as required.`,
      requirements: `Education & Qualifications:
• Diploma or higher in Accounting, Finance, or related fields.
• Certifications such as LCCI, ACCA, or similar will be an added advantage.

Work Experience:
• Fresh graduates are welcome to apply.
• 0–2 years of relevant financial accounting experience.
• Experience managing full-set accounts for overseas entities is preferred.

Professional Knowledge:
• Familiar with Singapore Financial Reporting Standards (SFRS), tax regulations, and corporate compliance requirements.
• Knowledge of full procedures for annual return filings, tax filings, and corporate compliance, with hands-on experience preferred.
• Proficient in major accounting software (e.g., QuickBooks, Xero, SAP) and MS Office; advanced Excel skills.

Skills & Attributes:
• Strong communication skills in both Chinese and English (written and verbal), confident in ability to communicate effectively with colleagues in China as well as external parties (e.g., auditors, banks, government agencies).
• Meticulous, responsible, and capable of working independently and solving problems.
• Strong team player with a good willingness to learn.`,
      location: 'Singapore',
      job_type: 'full-time',
      category: 'Finance',
      salary_min: 3000,
      salary_max: 4000,
      deadline: '2026-08-31',
      company: 'Onemt Pte Ltd',
    },
    {
      title: 'Technical Specialist Officer',
      description: `Crestar Enterprise Pte. Ltd. is a leader in ceiling fan innovation and energy-efficient climate solutions, helping homes and businesses stay comfortable, stylish, and sustainable for over 20 years.

We are looking for Technical Specialist Officers to join our company. In this role, you will be responsible for ensuring the high quality and performance of our ceiling fans through expert installation, repair, maintenance, and exceptional customer service. A company van will be provided for installation and servicing trips across Singapore.

We value employee well-being with a range of wellness events, flexible working environments and conducive workspaces.

Job Description:

Installation and Testing: Install ceiling fans on both concrete and false ceilings. Perform comprehensive safety checks and testing to confirm that the installation meets all required standards.

Diagnosis and Troubleshooting: Inspect ceiling fans to identify issues and malfunctions. Use diagnostic tools and techniques to pinpoint problems accurately.

Repair and Maintenance: Repair or replace defective components such as motors. Clean fans and components to remove dust and debris. Perform preventive maintenance to extend the lifespan of fans.

Customer Interaction: Interact with customers to understand their fan-related issues and provide cost estimates for repairs. Offer guidance on proper fan usage and maintenance. Collect payment from customer.

Testing and Quality Control: Test repaired fans to ensure they operate correctly. Perform quality control checks to verify the quality of repairs.

Safety Compliance: Adhere to safety protocols and guidelines to prevent accidents and injuries during repair work. Ensure all repaired fans meet safety standards.

Technical Expertise: Stay updated on the latest ceiling fan models and technologies. Attend training sessions or workshops to enhance technical skills. Mentor and train new technician team members as needed.

Spare Parts & Motor Repairs: Repair the faulty parts if able to fix. Diagnose motor issues and malfunctions, perform motor repairs, including rewiring, replacing worn components, and reassembling motors.

Team Collaboration: Coordinate with other technicians, sales, and customer service team for efficient workflow. Share knowledge and insights to improve repair processes.

Customer Feedback: Solicit and collect customer feedback to assess satisfaction and identify areas for improvement. Relay feedback of faulty/defect products to manager for consideration in decision-making processes.

Driving and Delivery: Responsible for using company vehicle to transport and deliver goods in a safe, timely and professional manner.

Working Hours: Mondays to Fridays (9am to 5.30pm), Alternate Saturdays (9am to 1pm)
Working Location: 1 Tampines North Drive 1, #04-18, T-Space, Singapore 528559
To Apply: Email resume to gladys@crestarfan.com.sg`,
      requirements: `• Possess Class 3/3A Driving License (company van provided)
• ITE NITEC / Higher NITEC / Diploma in Electrical, IT, Mechanical, Electronics, Mechatronics, or related technical field
• Open to candidates with or without experience; experienced candidates may be considered for a senior role
• Basic knowledge of electrical, mechanical, or IT systems
• Basic computer skills
• Attention to detail and ability to follow procedures
• Willing to learn
• Professional, respectful, and customer-oriented attitude
• Good communication skills`,
      location: 'Tampines, Singapore',
      job_type: 'full-time',
      category: 'Engineering',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'Crestar Enterprise Pte. Ltd.',
    },
    {
      title: 'Trainee Production Technician (CDMO Pharmaceutical Manufacturing)',
      description: `PharmaGend Global Medical Services Pte Ltd is a next-generation pharmaceutical CDMO (Contract Development and Manufacturing Organization) operating a highly automated, digitally integrated GMP facility. Our operations combine advanced manufacturing technologies, paperless systems, automation, robotics, and data-driven manufacturing to produce high-quality pharmaceutical products for global markets.

This role is designed to provide fresh graduates with structured training and hands-on exposure across various production functions within a CDMO environment.

Selected candidates will be trained in pharmaceutical solid dosage manufacturing processes including dispensing, granulation, compression, coating, blister packing, and bulk packing while ensuring compliance with GMP, safety, and quality standards.

Department: Production
Location: Tuas Biomedical Park

Key Responsibilities:

Production Operations:
• Assist in dispensing raw materials according to batch manufacturing records (BMR).
• Support granulation activities including equipment setup, operation, and cleaning.
• Operate and monitor compression machines for tablet production.
• Perform coating operations under supervision to meet product specifications.
• Assist in blister packing and bulk packing activities.
• Carry out line clearance, changeover, and cleaning activities.
• Record production data accurately in logbooks and batch records.
• Follow SOPs, GMP, hygiene, and safety procedures at all times.

Equipment & Documentation:
• Learn operation and troubleshooting of pharmaceutical production equipment.
• Perform basic equipment checks and report abnormalities.
• Ensure documentation is completed accurately and in a timely manner.
• Support inventory handling and material reconciliation activities.

Quality & Compliance:
• Adhere to cGMP, EHS, and company quality standards.
• Participate in training programs and continuous improvement initiatives.
• Support deviation reporting and corrective actions when required.

Training Exposure:
Candidates will receive structured on-the-job training in: Dispensing, Wet/Dry Granulation, Tablet Compression, Tablet Coating, Blister Packing, Bulk Packing, GMP Documentation Practices, and Pharmaceutical Safety & Compliance.

To Apply: Email to Phghr@pharmagend.com with education background, date of availability, current and expected salary, work experiences and job responsibilities (if any), and reason for leaving (if any).`,
      requirements: `• Diploma / Degree in Pharmaceutical Science, Chemical Engineering, Biotechnology, Pharmaceutical Technology, Mechanical/Mechatronics Engineering, or related disciplines.
• Fresh graduates are encouraged to apply.
• Willingness to work in a manufacturing environment and rotating shifts if required.
• Good attention to detail and willingness to learn.
• Basic understanding of GMP is an advantage.
• Team player with good communication skills.`,
      location: 'Tuas Biomedical Park, Singapore',
      job_type: 'full-time',
      category: 'Healthcare',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'PharmaGend Global Medical Services Pte Ltd',
    },
    {
      title: 'Line Cook & Kitchen Assistant',
      description: `Hua Kee Cantonese Chicken Rice (3 Eats Pte Ltd) is a growing Singapore-based F&B company serving quality, wholesome, and affordable meals. We value traditional recipes, fresh ingredients, and excellent customer service in a supportive, team-oriented environment.

Salary: $2,500 – $3,200/month (Full-Time)
Location: Islandwide, Singapore
Industry: F&B

Key Responsibilities:
• Prepare, cook and serve food according to recipes and company standards
• Prepare ingredients and maintain mise en place
• Handle cashiering and cash transactions
• Maintain cleanliness and hygiene standards
• Pack food and prepare takeaway orders
• Manage inventory and replenish stock
• Adhere to food safety and hygiene regulations

What We Offer:
• Competitive salary package
• Training and career growth opportunities
• Friendly and supportive work environment
• Staff meals provided
• Opportunities for advancement

Eligibility: Singapore Citizens & PRs only. Applicants must have the legal right to work in Singapore.
Enquiries: +65 86689698`,
      requirements: `• Positive attitude and willingness to learn
• Able to work in a fast-paced environment
• Kitchen/F&B experience is an advantage
• Team player with good work ethics
• Physically fit and able to stand for long hours`,
      location: 'Islandwide, Singapore',
      job_type: 'full-time',
      category: 'F&B',
      salary_min: 2500,
      salary_max: 3200,
      deadline: '2026-08-31',
      company: '3 Eats Pte Ltd (Hua Kee Cantonese Chicken Rice)',
    },
    {
      title: 'Field Service Technician (Cold Storage Equipment)',
      description: `Telistar Solutions is looking for hands-on individuals to support essential operations across various sites.

Contract Type: 1-year renewable contract

This role involves physical tasks such as equipment cleaning and maintenance (e.g., cleaning condenser of the compressor system, cleaning of equipment), and will require travel to different locations.

While the work is routine, it plays a vital role in maintaining high operational standards. You will gain valuable field service experience and exposure to industry-leading practices, which serve as a strong foundation for future career growth.

Scope of Responsibilities (but not limited to):
• Perform maintenance and calibration services in accordance with maintenance checklist for Cold Storage Equipment, Ovens and Furnaces, and Water Purification Systems
• Obtain customer signoff on e-service reports and update ticketing system as required to close job
• Perform ad-hoc works as assigned by superior

To Apply: Send your resume to Chevelle at chevelle.tan@telistar.com`,
      requirements: `• Minimum ITE or Diploma in Engineering related field
• Good knowledge of Microsoft Office suite
• Knowledge of Electronic, Electrical, or Mechanical systems
• Training will be provided to work on CRM tools
• Training on device/equipment maintenance and calibration will be provided
• Good interpersonal and analytical skills
• Open to travel to different sites`,
      location: 'Singapore (multiple sites)',
      job_type: 'contract',
      category: 'Engineering',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'Telistar Solutions',
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
