-- Seed data for defaultdb

-- ─────────────────────────────────────────────
-- Employer Users (password: password)
-- ─────────────────────────────────────────────
INSERT IGNORE INTO users (name, email, password, role) VALUES
('Alpha REIT HR', 'hr@alphareit.com.sg', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'employer'),
('Altallo HR', 'hr@altallo.com.sg', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'employer'),
('Hua Kee HR', 'hr@huakee.com.sg', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'employer'),
('Angel Manufacturing HR', 'hr@angelmanufacturing.com.sg', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'employer'),
('Beureka HR', 'hr@beureka.com.sg', '$2b$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'employer');

-- ─────────────────────────────────────────────
-- Employer Profiles
-- ─────────────────────────────────────────────
INSERT IGNORE INTO employers (user_id, company_name, company_website, company_description, industry, location)
SELECT id, 'Alpha Integrated REIT Management Pte Ltd', NULL,
  'Alpha Integrated REIT Management is a professional property management firm overseeing commercial and residential real estate assets in Singapore.',
  'Real Estate', 'Singapore'
FROM users WHERE email = 'hr@alphareit.com.sg';

INSERT IGNORE INTO employers (user_id, company_name, company_website, company_description, industry, location)
SELECT id, 'Altallo Asset Management', NULL,
  'Altallo is a growing real estate investment and fund management platform offering early-career professionals exposure to a fast-paced investment environment.',
  'Real Estate / Finance', 'Singapore'
FROM users WHERE email = 'hr@altallo.com.sg';

INSERT IGNORE INTO employers (user_id, company_name, company_website, company_description, industry, location)
SELECT id, 'Hua Kee Cantonese Chicken Rice (3 Eats Pte Ltd)', NULL,
  'Hua Kee Cantonese Chicken Rice is a growing Singapore-based F&B company serving quality, wholesome, and affordable meals. We value traditional recipes, fresh ingredients, and excellent customer service.',
  'Food & Beverage', 'Singapore (Islandwide)'
FROM users WHERE email = 'hr@huakee.com.sg';

INSERT IGNORE INTO employers (user_id, company_name, company_website, company_description, industry, location)
SELECT id, 'Angel Manufacturing Singapore Pte Ltd', 'https://www.angelplayingcards.com/en/',
  'Angel Group owns the world''s largest share for the manufacture of casino playing cards and related equipment. With 70 years of history, Angel has offices across USA, Singapore, Australia, Macau, Philippines, Mexico and France with over 400 employees worldwide.',
  'Manufacturing', 'Singapore'
FROM users WHERE email = 'hr@angelmanufacturing.com.sg';

INSERT IGNORE INTO employers (user_id, company_name, company_website, company_description, industry, location)
SELECT id, 'Beureka Pte Ltd', NULL,
  'Since 2015, Beureka has been a pioneer in the online beauty retail space, offering premium skincare, cosmetics, and fragrance products from brands such as Clarins, La Mer, SK-II, Mont Blanc, and Estee Lauder. Beureka is expanding into social commerce platforms including TikTok and Facebook Live.',
  'E-Commerce / Beauty Retail', 'Singapore'
FROM users WHERE email = 'hr@beureka.com.sg';

-- ─────────────────────────────────────────────
-- Remove old Tech Corp jobs (clean slate)
-- ─────────────────────────────────────────────
DELETE FROM jobs WHERE employer_id IN (
  SELECT e.id FROM employers e
  JOIN users u ON e.user_id = u.id
  WHERE u.email = 'employer@techcorp.com'
);

-- ─────────────────────────────────────────────
-- Job 1: Alpha Integrated REIT — Executive, Property Management
-- ─────────────────────────────────────────────
INSERT IGNORE INTO jobs (employer_id, title, description, requirements, location, job_type, category, salary_min, salary_max, deadline, status)
SELECT e.id,
  'Executive, Property Management',
  'Reporting to the Head of Property Management, you will be responsible for the day-to-day operations and upkeep of the property portfolio.\n\nKey Responsibilities:\n• Conduct rigorous daily walkthroughs of the property to proactively identify defects, cleanliness issues, or safety hazards.\n• Identify facilities defects, log technical anomalies, and coordinate with engineering teams to ensure prompt corrective action.\n• Assist in the coordination of repair works and preventive maintenance schedules for building systems (Lift, Fire Protection, Plumbing).\n• Ensure the property adheres strictly to local building codes and fire safety regulations.\n• Assist in the planning and execution of emergency fire drills and safety briefings for all building occupants.\n• Monitor, evaluate, and audit the performance of term contractors (M&E, security, environmental services, landscaping) against established Service Level Agreements (SLAs).\n• Support procurement workflows by sourcing and obtaining competitive quotations from vendors for minor repair and cyclical works.\n• Serve as the professional first point of contact for tenants, residents, and owners regarding lease management operations and facility inquiries.\n• Manage property feedback loops, resolving tenant grievances and operational friction points with high diplomacy and efficiency.\n• Facilitate seamless unit handover and takeover processes, accurately documenting property condition reports and inventory audits.',
  'Diploma in Real Estate, Facilities Management, Real Estate Business, or a related Built Environment discipline. Foundational knowledge of MEP systems, smart building technologies, or property management software. Strong interpersonal, verbal, and written communication skills. Proactive, solutions-oriented individual with a positive working attitude. Highly collaborative team player.',
  'Singapore', 'full-time', 'Real Estate / Property Management', NULL, NULL, NULL, 'active'
FROM employers e JOIN users u ON e.user_id = u.id WHERE u.email = 'hr@alphareit.com.sg';

-- ─────────────────────────────────────────────
-- Job 2: Altallo Asset Management — Operations and Admin Executive
-- ─────────────────────────────────────────────
INSERT IGNORE INTO jobs (employer_id, title, description, requirements, location, job_type, category, salary_min, salary_max, deadline, status)
SELECT e.id,
  'Operations and Admin Executive',
  'Altallo is growing and we are looking for an Operations / Admin Executive to join our team. This role is ideal for someone who wants early exposure to the operations side of a fast-paced real estate investment and fund management business.\n\nResponsibilities:\n• Provide administrative and operational support across the business and internal teams.\n• Coordinate schedules, meetings, documentation, and internal reporting requirements.\n• Assist with maintaining proper records, filing systems, and business documentation.\n• Support day-to-day office operations and coordination with external stakeholders or service providers.\n• Assist with preparation of presentations, reports, and operational materials.\n• Handle general administrative matters and support ad-hoc operational projects where required.\n• Work closely with management and team members to support smooth business operations.',
  'Organised, responsible, and detail-oriented. Strong willingness to learn and grow professionally. Communicates well and works effectively within a team environment. Proactive and adaptable in a fast-moving work environment. Interest in the real estate, investment, or finance industry. Fresh graduates from Polytechnics / ITE welcome.',
  'Singapore', 'full-time', 'Operations / Administration', 2300, 2600, NULL, 'active'
FROM employers e JOIN users u ON e.user_id = u.id WHERE u.email = 'hr@altallo.com.sg';

-- ─────────────────────────────────────────────
-- Job 3: Hua Kee (3 Eats Pte Ltd) — Line Cook & Kitchen Assistant
-- ─────────────────────────────────────────────
INSERT IGNORE INTO jobs (employer_id, title, description, requirements, location, job_type, category, salary_min, salary_max, deadline, status)
SELECT e.id,
  'Line Cook & Kitchen Assistant',
  'Be part of our team and grow with Hua Kee Cantonese Chicken Rice! We are looking for dedicated individuals to join our kitchen team across our islandwide outlets.\n\nKey Responsibilities:\n• Prepare, cook and serve food according to recipes and company standards.\n• Prepare ingredients and maintain mise en place.\n• Handle cashiering and cash transactions.\n• Maintain cleanliness and hygiene standards.\n• Pack food and prepare takeaway orders.\n• Manage inventory and replenish stock.\n• Adhere to food safety and hygiene regulations.\n\nWhat We Offer:\n• Competitive salary package\n• Training and career growth opportunities\n• Friendly and supportive work environment\n• Staff meals provided\n• Opportunities for advancement\n\nEligibility: Singapore Citizens & PRs only. Applicants must have the legal right to work in Singapore.\nEnquiries: +65 86689698',
  'Positive attitude and willingness to learn. Able to work in a fast-paced environment. Kitchen/F&B experience is an advantage. Team player with good work ethics. Physically fit and able to stand for long hours.',
  'Singapore (Islandwide)', 'full-time', 'Food & Beverage', 2500, 3200, NULL, 'active'
FROM employers e JOIN users u ON e.user_id = u.id WHERE u.email = 'hr@huakee.com.sg';

-- ─────────────────────────────────────────────
-- Job 4: Angel Manufacturing Singapore — Associate Engineer
-- ─────────────────────────────────────────────
INSERT IGNORE INTO jobs (employer_id, title, description, requirements, location, job_type, category, salary_min, salary_max, deadline, status)
SELECT e.id,
  'Associate Engineer',
  'Angel Manufacturing Singapore Pte Ltd is the world''s No. 1 leading company in the playing card industry. We are looking for an Associate Engineer to join our team at our regional headquarters in the Jurong Innovative District.\n\nJob Description:\n• Operate machines and execute production as per production schedule and meet targeted output.\n• Perform initial level of troubleshooting of equipment-related problems to minimise downtime.\n• Interact with staff support to ensure smooth and optimum level of machine operational efficiency.\n• Establish effective preventive maintenance.\n• Control the quality of outputs using advanced technologies.\n• Control the flow of various goods and materials through digital quantity monitoring system.\n• Manage multiple priorities.\n• Other ad hoc duties.\n\nRemuneration:\n• Salary: SGD 3,200/month + Up to SGD 300 Performance Allowance\n• Benefits: Medical Insurance, Lunch provided\n• Annual Leave: 14 days\n\nWorking Hours: 8:30AM to 5:30PM, Monday to Friday (Off Sat & Sun)\nLocation: 12 Bulim Avenue, Singapore 648167 (Nearest MRT: Boon Lay). Company coach available from Jurong East MRT.',
  'No experience needed. Positive attitude and willingness to learn.',
  'Singapore', 'full-time', 'Manufacturing / Engineering', 3200, 3500, NULL, 'active'
FROM employers e JOIN users u ON e.user_id = u.id WHERE u.email = 'hr@angelmanufacturing.com.sg';

-- ─────────────────────────────────────────────
-- Job 5: Beureka Pte Ltd — E-Commerce Operations Coordinator
-- ─────────────────────────────────────────────
INSERT IGNORE INTO jobs (employer_id, title, description, requirements, location, job_type, category, salary_min, salary_max, deadline, status)
SELECT e.id,
  'E-Commerce Operations Coordinator',
  'As an E-Commerce Operations Coordinator at Beureka, you will be responsible for the seamless execution of order fulfilment, inventory management, and platform operations across multiple eCommerce channels including Shopee, Lazada, TikTok, Amazon, and Shopify.\n\nKey Responsibilities:\n\n1. E-Commerce Fulfilment & Logistics\n• Process and track eCommerce orders daily, ensuring alignment with platform SLAs.\n• Coordinate with 3PL partners and internal operations teams to manage timely dispatch and delivery.\n• Manage returns processing and address feedback escalated through Customer Service channels.\n\n2. Inventory Management\n• Monitor and maintain sufficient stock levels across platforms, ensuring optimal cover days and avoiding stockouts.\n• Analyse inventory health, including turnover days and slow-moving SKUs, and propose improvement strategies.\n• Lead platform-level stock allocation and coordinate demand planning to support campaign readiness.\n\n3. Procurement & Assortment Planning\n• Collaborate with the eCommerce and Procurement team to support sourcing and purchasing of SKUs.\n• Ensure accurate tracking of stock arrivals and communicate lead times to relevant stakeholders.\n\n4. Store Operations & Content Management\n• Lead the setup and maintenance of digital storefronts, ensuring accurate product listings and timely content updates.\n• Work cross-functionally with designers to develop promotional assets, banners, and campaign visuals.\n\n5. Internal Operations & 3PL Coordination\n• Coordinate with the Group Distribution Center (GDC) for internal stock transference and goods receiving processes.\n• Liaise with third-party logistics providers to ensure fulfilment SLAs are met.\n\n6. Cross-Functional Financial Support\n• Ensure timely reconciliation of platform invoices in collaboration with the Finance team.\n\n7. Forecasting & Planning\n• Lead the development and updating of the forward forecast file on a quarterly and yearly basis.\n• Support scenario planning and demand adjustments during promotional periods and seasonal peaks.\n\nNote: This role includes weekly live streaming on marketplace platforms such as TikTok and Facebook. Flexibility in working hours is required to support campaign-related streaming activities during weekends or after office hours.\n\nInterested applicants, please send your resume to cheongkiat.koh@henatenn.com.sg',
  'Diploma in Supply Chain, Business, Operations, or related field. 1 to 2 years of experience in eCommerce operations, inventory control, or fulfilment preferred — fresh graduates with strong interest welcome. Proficiency in Excel, inventory management systems, and ERP software. Strong organizational and time management skills with high attention to detail. Experience with Shopee, Lazada, TikTok, Shopify is a plus. Must be open to flexible work hours including evenings or weekends for live streaming activities.',
  'Singapore', 'full-time', 'E-Commerce / Operations', NULL, NULL, NULL, 'active'
FROM employers e JOIN users u ON e.user_id = u.id WHERE u.email = 'hr@beureka.com.sg';
