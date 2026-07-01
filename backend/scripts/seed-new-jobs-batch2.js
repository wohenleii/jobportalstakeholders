/**
 * Seed 5 new job listings from uploaded PDFs (batch 2)
 * Usage: node backend/scripts/seed-new-jobs-batch2.js
 */
require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
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
      title: 'Facilities Management Executive',
      description: `Metro Global Partners Pte. Ltd. is hiring a Facilities Management Executive (Hotel Concierge) to provide professional and courteous concierge services at the hotel driveway area.

Primary Job Function:
To provide professional and courteous concierge services at the hotel driveway area by welcoming guests, assisting with luggage handling, and supporting guests' transportation requests to ensure a pleasant arrival and departure experience.

Job Duties & Responsibilities:
• Welcome and greet guests warmly with professionalism and a positive attitude
• Assist in opening car doors for arriving and departing guests
• Assist guests with loading and unloading luggage and personal belongings
• Issue luggage tags and ensure proper handling and storage of guest luggage
• Transport luggage safely using trolley to and from the Luggage Storage Room
• Assist guests with transportation arrangements such as taxi bookings and related enquiries
• Provide directions and basic hotel information to guests when required
• Maintain cleanliness, organization, and safety of the driveway and luggage storage areas
• Coordinate closely with Front Office and hotel operations team to ensure smooth guest service operations
• Report any guest incidents, lost & found items, or operational concerns to the supervisor promptly
• Ensure compliance with hotel grooming standards, SOPs, and service expectations at all times
• Perform any other duties assigned by the management or hotel operations team

Skills: Assisting Visitors, Baggage Handling System, Cargo Handling, Cleanliness Testing, Facilities Management, Guest Service Management, Managerial Duties, Organization, Transportation Safety

4 vacancies available. Workplace: 10 Ubi Crescent, UBI TECHPARK, Singapore 408564.
Contact: hr006.sg01@metroglobal.net`,
      requirements: `• Minimum ITE Diploma in Hospitality and Tourism or related field
• 0 years minimum experience required (fresh graduates welcome)
• Full-time, non-executive position
• Job function: Customer Service, Hospitality
• Must be willing to work at hotel driveway area
• Comply with hotel grooming standards and SOPs at all times`,
      location: 'Singapore',
      job_type: 'full-time',
      category: 'Hospitality',
      salary_min: 2500,
      salary_max: 3200,
      deadline: '2026-07-21',
      company: 'Metro Global Partners Pte. Ltd.',
    },
    {
      title: 'Adjunct Officer (School Administration & Operations)',
      description: `Ministry of Education (MOE) is looking for Adjunct Officers to be deployed to support administration and operations of schools on a 1-year contract to address localised manpower needs of schools.

Available Positions:
• Adjunct Operations Manager
• Adjunct Administrative Executive / Corporate Support Officer
• Adjunct STEM Instructor (Laboratory)
• Adjunct STEM Instructor (Workshop)

As an Adjunct Officer, you will be deployed to support the administration and operations of schools on a 1-year contract to address localised manpower needs of schools.

Learn more: go.gov.sg/moe-adjunct-eas
Apply: go.gov.sg/moe-application

Stay connected with MOE at go.gov.sg/moe-linkedin.`,
      requirements: `• Open to candidates from various backgrounds
• Relevant administrative or operations experience preferred
• Candidates with STEM background are preferred for STEM Instructor roles
• Comfortable working in a school environment
• Strong communication and interpersonal skills
• Application closes 28 June 2026`,
      location: 'Singapore',
      job_type: 'contract',
      category: 'Education',
      salary_min: null,
      salary_max: null,
      deadline: '2026-06-28',
      company: 'Ministry of Education (MOE)',
    },
    {
      title: 'Kindergarten Teacher (MOE Kindergarten Teacher Training Programme)',
      description: `Ministry of Education (MOE) invites candidates to take the first step towards a career in preschool education with the MOE Kindergarten Teacher Training Programme (MK TTP).

MOE Kindergarten is looking for:
• English Medium Kindergarten Teacher
• Malay Language Kindergarten Teacher

If you do not have the required Early Childhood qualifications to teach in a kindergarten setting, you can become an MK teacher through the MK TTP.

It takes a big heart to teach little minds. Join MOE today to provide a strong start for every child!

The MK TTP application window opens from 1 Jun to 21 Jun 2026.
Apply now at go.gov.sg/moe-mkttp.

For enquiries: moe_hscd_rmu@moe.gov.sg`,
      requirements: `• Open to candidates who do not yet hold Early Childhood qualifications (training provided via MK TTP)
• Passion for working with young children
• Good communication skills in English and/or Malay (depending on stream)
• Commitment to providing quality preschool education
• Application window: 1 Jun – 21 Jun 2026`,
      location: 'Singapore',
      job_type: 'full-time',
      category: 'Education',
      salary_min: null,
      salary_max: null,
      deadline: '2026-06-21',
      company: 'Ministry of Education (MOE)',
    },
    {
      title: 'Outdoor Adventure Educator (OAE)',
      description: `Ministry of Education (MOE) invites passionate individuals to leverage their strengths and help students scale greater heights as an Outdoor Adventure Educator (OAE).

As an Outdoor Adventure Educator (OAE), you will:
• Conduct camping activities for students
• Facilitate learning through outdoor experiences
• Ensure the well-being of students at MOE Outdoor Adventure Learning Centres

If you are keen to learn how you can play a key role in developing every student through the outdoors, join MOE at the OAE Information Session on 23 Jun 2026 (Tuesday) at 7.30pm (Zoom Webinar).

Register at go.gov.sg/oaeinfo
More information: go.gov.sg/moe-oae
MOE Careers Mailing List: go.gov.sg/moecareersml`,
      requirements: `• Passion for outdoor education and student development
• Experience or interest in outdoor activities, camping, and adventure learning
• Strong communication and facilitation skills
• Commitment to student well-being and safety
• Attend OAE Information Session on 23 Jun 2026 to learn more`,
      location: 'Singapore',
      job_type: 'full-time',
      category: 'Education',
      salary_min: null,
      salary_max: null,
      deadline: '2026-08-31',
      company: 'Ministry of Education (MOE)',
    },
    {
      title: 'Project Engineer / FM Senior Engineer',
      description: `Newtech Technology (South Asia) Pte Ltd, an ISO 9001 Certified Company and one of the leading Consulting and Engineering Service Providers, is hiring a Project Engineer / FM Senior Engineer based in Kaki Bukit, East Region.

Project Engineer - Job Description:
• Project planning and management
• Ensure timely completion of projects and execute project tasks within the agreed timescales and budget
• Responsible for site supervision, safety, resource planning, coordination, testing & commissioning
• Plan, coordinate, and monitor orders and deliveries
• Work with sales team to ensure design plan and output meet customers' requirements
• Ability to handle combination of projects concurrently with respective project technical leads on-site
• Liaise with customer, vendors, MEP consultants, and project team to ensure quality control and customer satisfaction
• Initiate, implement, and document new processes/procedures to improve project quality, cost, and productivity
• Liaise with MEP consultants and vendors
• Adhere to ISO procedures and standards
• Handle ad hoc assignments or tasks as required

Senior Engineer / Engineer - Role Description:
This is a full-time on-site role. The Engineer will be responsible for facilities engineering, operations, maintenance, troubleshooting, and preventive maintenance tasks related to critical environments and infrastructure.
• Responsible for maintenance and troubleshooting for all Facility Systems to ensure operational health 24x7
• Provide on-site technical support to customers as needed
• Train and monitor contractors providing Systems servicing
• Troubleshoot, repair/replace jobs on malfunctioning equipment, systems, and facilities
• Conform to documented procedures and standards per ISO requirements
• Provide coaching to train team members for shutdown exercises
• Must be able to travel to customer's facilities on short notice, including after office hours
• Data Centre experience is an advantage
• Handle ad hoc assignments or tasks as required

Perks & Benefits: Medical, Dental
Company: Newtech Technology (South Asia) Pte Ltd — Registration No. 200010424D`,
      requirements: `Project Engineer Requirements:
• Bachelor's degree in project management, business management, or related field
• 5–7 years of experience as a Project Manager or similar position
• Experience managing delivery of customer-facing and internally facing products/services
• PMI or PMP certification or similar from an accredited organization
• Intermediate to advanced proficiency with Microsoft Office (Word, Excel, PowerPoint)

Senior Engineer / Engineer Requirements:
• Diploma in Engineering / Electrical / Mechanical services
• At least 3 years of managing operations matters
• Good leadership & supervisory skills
• Able to work under pressure with good problem-solving skills
• Good knowledge of Excel and Word
• Class 3 Driving License preferred
• Candidates with short notice period preferred`,
      location: 'Kaki Bukit, Singapore',
      job_type: 'full-time',
      category: 'Engineering',
      salary_min: 3500,
      salary_max: 5000,
      deadline: '2026-08-31',
      company: 'Newtech Technology (South Asia) Pte Ltd',
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
