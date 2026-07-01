/**
 * Seed real job listings from uploaded PDFs
 * Usage: node backend/scripts/seed-real-jobs.js
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

  // Get the employer_id (use the first employer)
  const [empRows] = await conn.query('SELECT id FROM employers ORDER BY id ASC LIMIT 1');
  if (empRows.length === 0) {
    console.error('❌ No employer found. Run npm run setup-db first.');
    process.exit(1);
  }
  const employerId = empRows[0].id;
  console.log('Using employer_id:', employerId);

  const jobs = [
    {
      title: 'Project Executive',
      description: `We're growing, and looking for a Project Executive who's keen in project management career and eager to work meaningful digital products in a fast-moving consultancy.\n\nYou will support the delivery of projects across the full lifecycle — from requirements gathering and planning through to quality assurance and launch. Reporting to a Senior Project Manager, you will receive structured guidance on processes and ways of working as you build your project management foundation.\n\nDay-to-day, you'll work closely with our design and development teams to keep deliverables on track, timelines intact, and projects moving forward. You'll also start building direct relationships with clients.\n\nCore Responsibilities:\n• Support Project Managers in handling projects across the full lifecycle\n• Coordinate between various teams to maintain project momentum\n• Assist in defining and documenting project scope\n• Support client communication, including meeting preparation and follow-ups\n• Track and maintain project tasks, timelines, and deliverables\n• Capture meeting notes and translate them into action items\n• Document requirements and change requests accurately\n• Support QA coordination and contribute to launch readiness activities\n\nWhy Join Us?\n• Projects with tangible public and commercial impact\n• Mentorship and real responsibility from day one\n• Hybrid work arrangement\n• Potential project bonuses and annual bonuses\n• Free annual health screening\n• Quarterly company team bonding activities`,
      requirements: `• Degree or Diploma in any discipline\n• Background in business, technology, design, or communications is advantageous\n• Self Motivated with strong eye for details\n• Strong organisation and communication skills\n• Comfortable coordinating across different teams and cultures\n• Open to learning structured, process-driven ways of working\n• Bonus: Familiarity with Monday.com, Figma, Slack\n• Bonus: Interest in AI tools for coordination and documentation\n• 0-1 year experience`,
      location: 'Singapore',
      job_type: 'full-time',
      category: 'Business',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'Originally US',
    },
    {
      title: 'Process Associate Engineer',
      description: `Silicon Box Pte Ltd is looking for a Process Associate Engineer responsible to support the engineering activities as well as the daily production activities reliably and efficiently.\n\nCandidates with related experience in semiconductor and/or electronics manufacturing industry are encouraged to apply.\n\nResponsibilities:\n• Ensure process integrity for machine is in place for production\n• Process monitoring via SPC / real time monitoring system\n• Work on process improvement projects\n• Handle disposition and on hold lots\n• Maintain good housekeeping in the production area\n• Support in recipe setup and qualification for production\n• Assist to troubleshoot process-related issues\n• Engineering data collection\n• Other ad-hoc duties as assigned`,
      requirements: `• Diploma in electrical / mechatronics / mechanical / microelectronics engineering or equivalent\n• Able to work in both day and night rotating shifts\n• Flexible to work under various shift patterns\n• Fresh graduates are welcome to apply`,
      location: 'Singapore',
      job_type: 'full-time',
      category: 'Engineering',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'Silicon Box Pte Ltd',
    },
    {
      title: 'Market Intelligence & Database Executive',
      description: `Steve Tay Real Estate (STRE) is one of the leading transactors in Singapore's premier and top-end real estate market. We specialize in connecting discerning buyers and sellers with luxury properties that define prestige, elegance, and exclusivity.\n\nThis is a full-time on-site role for a Market Intelligence & Database Executive. This role is the backbone of our lead generation and market analysis. You will be responsible for translating market raw data into actionable intelligence for our sales team.\n\nKey Responsibilities:\n• Listing Surveillance: Conduct daily audits of new property listings and transactions\n• Property Identification: Use deductive reasoning and tools to identify and organize market information\n• Database Integrity: Maintain and update the internal property database; track listings and transaction statuses\n• Reporting: Generate property recommendations, Comparative Market Analysis (CMA) reports and transacted data for client presentation decks`,
      requirements: `• Analytical Mindset: Strong ability to connect vague data points to find specific information\n• Technical Proficiency: Familiarity with Singapore property market and property portals\n• Ability to learn and use data and analysis tools effectively\n• Highly organized, disciplined, and detail-oriented\n• Ability to thrive in a dynamic, fast-paced setting`,
      location: 'Singapore',
      job_type: 'full-time',
      category: 'Real Estate',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'Steve Tay Real Estate Pte Ltd',
    },
    {
      title: 'Logistics Customer Interface Supervisor',
      description: `WIS Pte Ltd is hiring a Logistics Customer Interface Supervisor.\n\nResponsibilities:\n• Coordinate, plan and manage daily vessel scheduling, berth allocation, and truck operations\n• Act as the primary day-to-day contact for customers regarding scheduling and operational matters\n• Ensure timely and accurate communication of schedules, updates, and changes\n• Monitor execution of logistics plans and resolve scheduling or coordination issues\n• Support inventory monitoring and ensure accurate recording of product movements\n• Work closely with Operations to ensure safe and efficient execution of activities\n• Monitor turnaround times and highlight delays, constraints, or risks\n• Assist in minimizing demurrage and logistics-related inefficiencies\n• Liaise with shipping agents, surveyors, and other external stakeholders\n• Ensure compliance with SSHEQ standards and terminal procedures\n• Prepare daily reports and operational updates\n• Support billing verification and customer documentation requirements`,
      requirements: `• Minimum Diploma Level\n• Fresh Graduates are Welcome to Apply\nApplication Period: 11 Jun 2026 – 11 Jul 2026`,
      location: 'Singapore',
      job_type: 'full-time',
      category: 'Logistics',
      salary_min: null,
      salary_max: null,
      deadline: '2026-07-11',
      company: 'WIS Pte Ltd',
    },
    {
      title: 'Analyst, Project Management (1-Year Contract)',
      description: `Verian is a world leading, independent research, evidence, evaluation, and communications agency, providing services to government and the public realm.\n\nVerian is looking for an Analyst to join our Operations division. The successful candidate will need to be excited about working on high-profile and complex projects, and be able to handle multiple tasks and work to tight deadlines.\n\nResponsibilities:\n• Support the team in managing projects and fieldwork for qualitative and quantitative studies\n• Tracking of project/fieldwork progress and cost management with vendors and clients\n• Ensure compliance of project management and fieldwork practice to Verian's standard\n• Attend fieldwork observations, and interviewers and recruitment briefings\n• Actively involve in Project Review Meetings and document project learnings\n• Timely escalation of any risks/challenges relating to fieldwork and projects\n• Support in administrative duties relating to projects such as creating purchase orders, invoicing\n• Support in other ad-hoc operational needs as required\n\nVisit https://www.veriangroup.com for more information.`,
      requirements: `• Diploma holders with strong aptitude and keen interest in project execution management\n• Good time management, organisational skills and attention to detail\n• Strong interpersonal, analytical thinking and problem-solving skills\n• Organised, meticulous, deadline driven and able to multi-task\n• Works well under pressure\n• Proficient in Excel\n• Strong verbal, written and presentation skills\n• Bilingual – English and mother tongue (Chinese/Malay/Tamil)\n• Must be a Singapore citizen or PR`,
      location: 'Singapore',
      job_type: 'contract',
      category: 'Business',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'Verian Group Pte Ltd',
    },
  ];

  let inserted = 0;
  for (const job of jobs) {
    await conn.query(
      `INSERT INTO jobs (employer_id, title, description, requirements, location, job_type, category, salary_min, salary_max, deadline, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')`,
      [employerId, job.title, job.description, job.requirements, job.location, job.job_type, job.category, job.salary_min, job.salary_max, job.deadline]
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
