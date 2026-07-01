/**
 * Seed new job listings from batch 5 PDFs
 * Jobs:
 *  1. Beureka Pte Ltd - E-Commerce Operations Coordinator
 *  2. Boustead APEX Inc - Business & Marketing Executive
 *  3. Corporate Travel Management (S) Pte Ltd - Travel Consultant
 *  4. Neutron Technology Enterprise Pte Ltd - Sales Engineer
 *  5. BI Worldwide (Singapore) Pte Ltd - Rewards Customer Care Specialist
 *
 * Usage: node backend/scripts/seed-new-jobs-batch5.js
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
      title: 'E-Commerce Operations Coordinator',
      description: `Beureka Pte Ltd is a pioneer in the online beauty retail space since 2015, serving as a trusted destination for beauty lovers across Singapore. We offer a curated collection of premium skincare, cosmetics, and fragrance products from brands including Clarins, La Mer, SK-II, Mont Blanc, and Estée Lauder.

We are expanding into social commerce platforms such as TikTok and Facebook Live and are looking for an E-Commerce Operations Coordinator to join our team.

Contact: cheongkiat.koh@henatenn.com.sg

Key Responsibilities:

E-commerce Fulfilment & Logistics:
• Process and track eCommerce orders daily, ensuring alignment with platform Service Level Agreements (SLAs).
• Coordinate with 3PL partners and internal operations teams to manage timely dispatch and delivery.
• Manage returns processing and address feedback escalated through Customer Service channels.

Inventory Management:
• Monitor and maintain sufficient stock levels across platforms, ensuring optimal cover days and avoiding stockouts.
• Analyse inventory health, including turnover days and slow-moving SKUs, and propose improvement strategies.
• Lead platform-level stock allocation and coordinate demand planning to support campaign readiness and revenue goals.

Procurement & Assortment Planning:
• Collaborate with the eCommerce and Procurement team to support the sourcing and purchasing of SKUs in line with brand strategy and sales forecasts.
• Ensure accurate tracking of stock arrivals and communicate lead times to relevant stakeholders.

Store Operations & Content Management:
• Lead the setup and maintenance of digital storefronts, ensuring accurate product listings and timely content updates.
• Work cross-functionally with designers to develop compelling promotional assets, banners, and campaign visuals.
• Ensure all published content is aligned with brand tone, aesthetics, and compliance standards.

Internal Operations & 3PL Coordination:
• Coordinate with the Group Distribution Center (GDC) for internal stock transference and goods receiving processes.
• Liaise with third-party logistics providers to ensure fulfilment SLAs are met and any discrepancies are resolved promptly.

Cross-Functional Financial Support:
• Ensure timely reconciliation of platform invoices in collaboration with the Finance team.
• Work closely with the Supply Chain and Ops teams to maintain bookkeeping accuracy across inbound and outbound stock movements.

Forecasting & Planning:
• Lead the development and updating of the forward forecast file on a quarterly and yearly basis to support inventory planning and procurement cycles.
• Support scenario planning and demand adjustments during promotional periods, campaigns, and seasonal peaks.

Note: This role includes weekly live streaming on TikTok and Facebook. Flexibility in working hours is required to support campaign-related streaming activities during weekends or after office hours.`,
      requirements: `• Diploma in Supply Chain, Business, Operations, or related field.
• 1–2 years of experience in eCommerce operations, inventory control, or fulfilment preferred — but fresh graduates with strong interest and relevant skills are welcome to apply.
• Proficiency in Excel, inventory management systems, and ERP software.
• Strong organizational and time management skills, with high attention to detail.
• Excellent communication skills and the ability to collaborate cross-functionally.
• Experience working with marketplace platforms (Shopee, Lazada, TikTok, Shopify) is a plus.
• Familiarity with eCommerce logistics and third-party fulfilment operations is preferred.
• A self-starter mindset with a proactive approach to identifying and solving operational issues.
• Must be open to flexible work hours, including evenings or weekends for live streaming activities.`,
      location: 'Singapore',
      job_type: 'full-time',
      category: 'E-Commerce',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'Beureka Pte Ltd',
    },
    {
      title: 'Business & Marketing Executive',
      description: `Boustead APEX Inc is seeking a dynamic and driven Business & Marketing Executive to support corporate advisory, fundraising, branding, and business development activities across Asia and the United States.

The candidate will work closely with management to drive strategic growth, marketing campaigns, client engagement, and investor outreach initiatives.

Contact: marcuz.apexcapital@gmail.com

Key Responsibilities:
• Support business development and client acquisition activities.
• Assist in marketing campaigns, events, and corporate presentations.
• Manage social media, branding, and digital marketing initiatives.
• Coordinate meetings, proposals, and investor communications.
• Conduct market research and identify growth opportunities.
• Build and maintain relationships with partners and clients.
• Support execution of IPO, fundraising, and strategic projects.`,
      requirements: `• Diploma or Degree in Business, Marketing, Communications, or related field.
• Strong communication and presentation skills.
• Passion for business growth, finance, and technology.
• Familiar with social media and digital marketing tools.
• Proactive, organized, and able to work independently.
• Fresh graduates are welcome to apply.`,
      location: 'Asia & USA (Singapore-based)',
      job_type: 'full-time',
      category: 'Marketing',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'Boustead APEX Inc',
    },
    {
      title: 'Travel Consultant',
      description: `Corporate Travel Management (CTM) is an award-winning global provider of innovative and cost-effective travel solutions spanning corporate, events, leisure, loyalty and wholesale travel. Headquartered in Australia with its Asia head office in Hong Kong, CTM provides local service solutions to customers of all sizes across the world including Hong Kong, Singapore, China, Taiwan and Japan.

Travel Consultants play a key role at CTM. They are valued contributors, and we believe that the company's success grows alongside the development of each individual.

Contact: kendra.yit@travelctm.com

In this role, you will manage end-to-end corporate travel arrangements, including air travel, accommodation, car hire, visas (where applicable), and related services, ensuring smooth and successful journeys for clients. This position suits a detail-oriented, customer-focused professional who thrives in a team environment and consistently delivers high productivity and service quality.

Key Responsibilities:
• Assist customers with travel enquiries and bookings.
• Coordinate reservations and travel documentation.
• Provide customer support before and during travel.
• Handle amendments, cancellations, and travel-related issues.
• Maintain accurate booking and customer records.
• Build and maintain professional client relationships via phone and email.
• Participate in ongoing training to maintain product knowledge and essential soft skills.
• Undertake other duties as reasonably assigned.`,
      requirements: `• Diploma in Tourism, Hospitality, Business, or related disciplines.
• Fresh graduates are welcome to apply.
• Good communication and interpersonal skills.
• Customer-oriented with positive attitude.
• Organized and detail-oriented.
• Basic proficiency in Microsoft Office.
• Ability to work independently and in a team environment.`,
      location: 'Singapore',
      job_type: 'full-time',
      category: 'Travel & Hospitality',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'Corporate Travel Management (S) Pte Ltd',
    },
    {
      title: 'Sales Engineer',
      description: `Neutron Technology Enterprise Pte Ltd partners with visionary manufacturers to develop innovative technology solutions. We provide total parts cleaning and distribution solutions, aiming to be the preferred supplier for semiconductor and related industries.

We seek a committed Sales Engineer to drive sales for front-end process equipment and services, build strong customer relationships, and pursue new business opportunities in semiconductor wafer fabrication, LED, and solar sectors.

Contact: hr@neutrontech.com.sg

Responsibilities:
• Develop and execute sales strategies.
• Build, manage, and strengthen relationships with assigned customer accounts to ensure customer satisfaction and retention.
• Identify and pursue new business opportunities to expand market presence and increase sales pipeline.
• Prepare and deliver timely sales activity updates and accurate sales forecasts to support business planning.
• Collaborate with internal teams and customers to understand technical requirements and provide appropriate solutions.
• Travel domestically and internationally as required to support sales activities and customer engagements.

Why Join Us:
• Opportunity to work with leading semiconductor technologies and global partners.
• Exposure to regional customers and international business environment.
• Career growth and development opportunities.`,
      requirements: `• Diploma or Bachelor Degree in Engineering or Science.
• Experience in the semiconductor industry is advantageous; fresh graduates are welcome to apply.
• Possession of a valid driving license and own car is preferred for travel convenience.`,
      location: 'Singapore (regional travel required)',
      job_type: 'full-time',
      category: 'Engineering',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'Neutron Technology Enterprise Pte Ltd',
    },
    {
      title: 'Rewards Customer Care Specialist',
      description: `BI WORLDWIDE (Singapore) Pte Ltd is the global leader in engagement solutions that drive measurable results for clients around the world. We apply the principles of behavioural economics to engage the people who impact our customers' business results — covering employee engagement, sales force effectiveness, channel partner loyalty, and customer engagement.

We are seeking candidates in Singapore to join our APAC regional Rewards team. As a Customer Care Specialist, you will be responsible for liaising with strategic partners to deliver services for global clients and work with a team of subject matter experts to create the best experience.

Contact: Liza.lee@sg.biworldwide.com

Job Scope / Responsibilities:
• Resolve customer inquiries or feedback via email or social media.
• Manage placement of manual orders, refunds, or exchanges.
• Liaise with suppliers to coordinate order deliveries.
• Follow communication procedures, guidelines and policies of the company.
• Provide administrative and logistic support for business activities.
• Other duties assigned by the company as business requirement.

Contract Type: Full-time, 12-month contract (with potential promotion to permanent based on performance)

Benefits:
• Dental Insurance
• Health Insurance
• Parental Leave
• Hybrid working environment
• Performance bonus
• Monday to Friday schedule`,
      requirements: `• Good command of written and spoken English.
• Minimally A Levels, Diploma and above certification.
• Excellent communication and presentation skills.
• Familiar with CRM systems and practices.
• Ability to multi-task, prioritize and manage time effectively.
• Only Singaporeans and Permanent Residents need apply.
• Positive working attitude, good communication and interpersonal skills.
• Ability to work effectively as a team player and independently.`,
      location: 'Singapore (Hybrid)',
      job_type: 'contract',
      category: 'Customer Service',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'BI Worldwide (Singapore) Pte Ltd',
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
