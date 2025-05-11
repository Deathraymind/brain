
#security 
# Security Policies, Risk Management, and Compliance

## <mark style="background: #FF5582A6;">5.1 Security Policies and Procedures</mark>

### 5.1.1 Security Policies

- **Information Security Policies**
?
  - Large list of rules that are compliance requirements
  - Has to be enforced

- **AUP (Acceptable Use Policies)**
?
  - What users are allowed to do with the tech they are provided

- **Business Continuity**
?
  - Not everything goes according to plan
  - Disasters can cause disruption to the norm
  - Plan for tech down
  - Lots of docs and testing

- **Incident Response Roles**
?
  - Specialized group and tested
  - IT security management
  - Compliance officers
    - Intricate knowledge and compliance rules

- **SDLC (Software Development Lifecycle)**
?
  - Software development life cycle
  - Idea to app
  - Agile and waterfall are the popular ways to create applications
  - Agile is faster, test review throughout development
  - Waterfall is linear

- **Change Management**
?
  - How to make a change
    - Upgrade software, change firewall configuration
  - Have a fallback and low risks

### <mark style="background: #FFB86CA6;">5.1.2 Security Standards</mark>

- **Popular Security Standards**
?
  - ISO (International Organization for Standardization)
  - NIST (National Institute of Standards and Technology)

- **Access Control**
?
  - Determines which information at what time and under what circumstances
  - You also need standards on how to remove that access

### <mark style="background: #FFF3A3A6;">5.1.3 Security Procedures</mark>

- **Steps in Change Management**
?
  - Avoid downtime, confusion, and mistakes
  - Determine the scope of the change
  - Analyze the risk associated with change
  - Create a plan, get approval, be sure there is backup

- **Onboarding**
?
  - Bringing a new person into the organization
  - Create accounts
  - Give devices

- **Offboarding**
?
  - This should be pre-planned
  - What happens to the hardware and their data

- **Playbooks**
?
  - Conditional steps to follow a broad process
  - Investigate a data breach, recover from ransomware
  - Integrated with a SOAR platform
    - Security Orchestration Automation and Response

- **Monitoring and Revision**
?
  - IT needs to tighten security, change control, playbooks, addition of tech

- **Boards**
?
  - A panel of specialists
  - Sets tasks or requirements

- **Governance Structures**
?
  - Legal concerns, administrative, and political issues
  - Meetings are often public
    - Centralized/decentralized
      - The source of the processes and procedures
      - Centralized
        - Governance is located in one location with a group of decision makers
      - Decentralized
        - Governance spreads decision making processes to other individuals or locations

### <mark style="background: #ABF7F7A6;">5.1.4 Security Considerations</mark>

- **Sarbanes-Oxley Act (SOX)**
?
  - The Public Company Accounting Reform and Investor Protection Act of 2002

- **HIPAA**
?
  - The Health Insurance Portability and Accountability Act

### <mark style="background: #FFF3A3A6;">5.1.5 Data Roles and Responsibilities</mark>
- Use your brain when you give data to someone

## <mark style="background: #ABF7F7A6;">5.2 Risk Management</mark>

### <mark style="background: #FFB86CA6;">5.2.1 Risk Management Concepts
</mark>
- **One-time Risk Assessment**
?
  - The assessment may be part of a one-time project
  - Company acquisition, new equipment installation, unique new security threats, etc.

- **Continuous Assessments**
?
  - May be part of an existing process
  - Change control requires a risk assessment as part of the change

- **Ad Hoc Assessments**
?
  - An organization may not have a formal process
  - Perform an assessment when the situation requires
  - CEO wants to know if we are protected from a new attack type

### <mark style="background: #FFF3A3A6;">5.2.2 Risk Analysis</mark>

- **ARO (Annualized Rate of Occurrence)**
?
  - How many times a year a risk occurs
<!--SR:!2025-02-26,1,230-->

- **AV (Asset Value)**
?
  - The value of the asset to the organization
  - Includes the cost of the asset and the effect on company sales

- **EF (Exposure Factor)**
?
  - The percentage of the value lost due to an incident
  - Losing a quarter of the value is .25

- **SLE (Single Loss Expectancy)**
?
  - What's the monetary loss if a single event occurs
  - AV * EF = SLE

- **Impact**
?
  - Life
  - Property
  - Safety
  - Finance

- **Likelihood and Probability**
?
  - Likelihood
    - A qualitative measurement of risk
    - Rare, possible, almost certain
  - Probability
    - A quantitative measurement of risk
    - Done with numbers

- **Risk Appetite and Tolerance**
?
  - Appetite
    - A broad description of risk-taking deemed acceptable
    - Amount of risk before taking action
    - Qualitative description
      - Conservative, neutral, and expansionary
  - Tolerance
    - Amount of stress before taking action

- **Risk Register**
?
  - When doing a project, identify and document risks associated with each step
  - Apply a possible solution and monitor results
  - Key risk indicators
    - Risks that could impact the organization
    - Each of these will have an owner who manages the risk
    - Risk threshold: how much money the risk will cost

### <mark style="background: #D2B3FFA6;">5.2.3 Risk Management Strategies</mark>

- **Accept with Exemption**
?
  - When a security policy cannot be met but the software is critical
  - Windows XP is needed for X-ray machine, but it needs to have a patch according to a policy; it is exempted as long as it's not connected to the internet

- **Accept with Exception**
?
  - Internal security policies are not applied
  - A patch is required every 3 days, but one causes a crash. A policy exception is made to increase the time frame for the new patch

### <mark style="background: #ABF7F7A6;">5.2.4 Business Impact Analysis</mark>

- **RTO (Recovery Time Objective)**
?
  - Time before we can get back up and running

- **RPO (Recovery Point Objective)**
?
  - Point in time where we declare up and running
  - We need at least the last 12 months of data recovered before we can be operational

- **MTTR (Mean Time to Repair)**
?
  - Mean time to repair
  - Average time required to fix an issue

- **MTBF (Mean Time Between Failures)**
?
  - Time between outages
  - Can be used as a prediction or calculated based on historical factors

## 5.3 Third-Party Risk Management

### 5.3.1 Third-Party Risk Assessment

- **Third-Party Risk**
?
  - Company data is often shared
  - So you have to do a risk assessment with that third party
  - Add risk assessment in the contract

- **Pen-Testing**
?
  - Is a third-party risk assessment
  - Yourself and the third party do penetration testing
  - Often done through another third party
  - Rules of engagement
    - The rules and scope of a risk assessment/pen test
    - IP address, emergency contacts, and how to handle sensitive information

- **Right to Audit Clauses**
?
  - Common to work with business partners
  - Data sharing, outsourcing
  - Basically how both the company and the third party are able to share security requirements and rules for each other

- **Evidence of Internal Audits**
?
  - Audits are done by third party
  - Focusing on the security control between the third party and the company
    - Passwords, offboarding, how to access VPN

- **Supply Chain Analysis**
?
  - The system involved when creating a product
  - Identify the chain of where software and hardware comes from

- **Independent Assessments**
?
  - Bring a smart person to the team to get a new perspective
  - Specialists in their field will go more in depth

- **Vendor Selection Process**
?
  - Investigating and verifying that a company is legit
  - Background checks with individuals
  - There is sometimes a conflict of interest

- **Vendor Monitoring**
?
  - You will want to keep an eye on the vendor to be sure that you are secure
  - Make sure the company is not having any issues
  - Group of individuals are in charge of monitoring

- **Questionnaires**
?
  - What is the vendor's due diligence process
  - What plans are in place for disaster recovery

### 5.3.2 Agreement Types

- **SLA (Service Level Agreement)**
?
  - Uptime, response time agreement
  - A list of compliances that the third party must agree on
  - Example:
    - A customer of an ISP will want backup hardware on site in case theirs goes down

- **MOU (Memorandum of Understanding)**
?
  - Both sides agree to the contents
  - Informal, may contain statements of confidentiality
<!--SR:!2025-02-28,3,250-->

- **MOA (Memorandum of Agreement)**
?
  - Both sides conditionally agree to the objectives
  - Can be done in a legal document
  - Unlike a document, they are not legally enforceable

- **MSA (Master Service Agreement)**
?
  - Legal contract that sets the terms between companies
  - Detailed negotiations, future projects will be based on this agreement

- **WO or SOW (Work Order/Statement of Work)**
?
  - Specific list of items to be completed
  - Used in conjunction with an MSA
  - Detailed scope of the job, location, deliverables, schedule, acceptance criteria
  - If the job was done properly, refer to a SOW

- **NDA (Non-Disclosure Agreement)**
?
  - Agree to maintain confidentiality
  - This can be one-way or multilateral

- **BPA (Business Partner Agreement)**
?
  - Going into business together
  - Who gets to make decisions, what happens when something goes wrong

## 5.4 Compliance and Privacy

### <mark style="background: #BBFABBA6;">5.4.1 Compliance</mark>

- **Internal Compliance Checks**
?
  - Due care
  - Use tools for automation, varies from company to company

- **CCO (Central Compliance Officer)**
?
  - Make sure we're following compliance
  - State, federal, etc.

- **External Compliance Checks**
?
  - You are required by a third party to provide compliance checks at a set interval
  - Due diligence

- **SOX (Sarbanes-Oxley Act)**
?
  - Accounting and investing protection act of 2002

### <mark style="background: #FF5582A6;">5.4.2 Privacy</mark>

- **Data Subject**
?
  - Any information related to a person

- **Data Inventory**
?
  - A list of data, the owner, update frequency, format of the data
  - What data is and can be shared

## 5.5 Audits and Testing

### <mark style="background: #FFB86CA6;">5.5.1 Audits and Assessments</mark>

- **Audits**
?
  - Examines the IT infrastructure, software, devices, etc.
  - Checks that policies and procedures are effective and being followed
  - Find vulnerabilities before attackers

- **Attestation**
?
  - Provides accuracy of audit

### <mark style="background: #ABF7F7A6;">5.5.2 Penetration Tests</mark>

- **Physical Penetration Testing**
?
  - Super powerful if you have physical access to a computer

- **Red Team**
?
  - Offense, attack systems, look for vulnerabilities

- **Blue Team**
?
  - Identify attacks real-time and block the attacks

- **Reconnaissance**
?
  - Get info before attacking

- **Passive Reconnaissance**
?
  - Gathering information that doesn't tie us back to victim's network
  - Google a company
  - Look for public data
  - Social engineering, dumpster diving

- **Active Reconnaissance**
?
  - Get in the network, detectable and loggable
  - Ping scans, DNS queries

## 5.6 Security Training and Awareness

### <mark style="background: #BBFABBA6;"> 5.6.1 Security Awareness</mark>

- **Phishing Campaigns**
?
  - Send emails to employees to try to catch them lacking

- **Security Awareness Team**
?
  - Create training materials
  - Managers and stakeholders will want to talk to these people

### <mark style="background: #FFF3A3A6;">5.6.2 User Training</mark>

- Train users before they have access to the network
- Track who has been trained and what training they received

- **Policy/Handbooks**
?
  - Document all security requirements
  - Users should be trained to always be looking for threats