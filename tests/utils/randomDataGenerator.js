// Random Data Generator Utility

class RandomDataGenerator {
    
    static firstNames = [
        'John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Chris', 'Lisa',
        'Robert', 'Maria', 'James', 'Jennifer', 'William', 'Linda', 'Richard',
        'Patricia', 'Thomas', 'Susan', 'Charles', 'Jessica', 'Daniel', 'Karen',
        'Matthew', 'Nancy', 'Anthony', 'Betty', 'Mark', 'Helen', 'Donald',
        'Sandra', 'Steven', 'Donna', 'Paul', 'Carol', 'Andrew', 'Ruth',
        'Joshua', 'Sharon', 'Kenneth', 'Michelle', 'Kevin', 'Laura', 'Brian',
        'Sarah', 'George', 'Kimberly', 'Edward', 'Deborah', 'Ronald', 'Dorothy'
    ];

    static lastNames = [
        'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller',
        'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez',
        'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
        'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark',
        'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King',
        'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green',
        'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell',
        'Carter', 'Roberts'
    ];

    static companyNames = [
        'TechCorp', 'InnovateSoft', 'GlobalSystems', 'DataDynamics', 'CloudVision',
        'NextGenTech', 'SmartSolutions', 'DigitalEdge', 'FutureWorks', 'CyberNet',
        'InfoTech', 'WebWorks', 'CodeCraft', 'TechnoLogic', 'SoftwareHub',
        'DataStream', 'CloudFirst', 'InnovateNow', 'TechPioneer', 'DigitalCore',
        'SystemsPro', 'WebMaster', 'CodeGenius', 'TechFlow', 'DataForge',
        'CloudStream', 'InnovatePro', 'TechSavvy', 'DigitalMind', 'SoftFlow',
        'DataWorks', 'CloudTech', 'InnovateMax', 'TechBridge', 'DigitalForce',
        'SystemsEdge', 'WebForce', 'CodeMax', 'TechWave', 'DataEdge',
        'CloudWorks', 'InnovateCore', 'TechMind', 'DigitalFlow', 'SoftEdge',
        'DataCore', 'CloudMax', 'InnovateFlow', 'TechForce', 'DigitalWorks'
    ];

    static departments = [
        'Engineering', 'Sales', 'Marketing', 'QA', 'DevOps', 'Product',
        'Customer Success', 'Finance', 'HR', 'Operations', 'Support',
        'Research', 'Design', 'Analytics', 'Security'
    ];

    static jobTitles = [
        'Software Engineer', 'QA Tester', 'Product Manager', 'DevOps Engineer',
        'Data Analyst', 'UX Designer', 'Sales Manager', 'Marketing Specialist',
        'Technical Lead', 'Automation Tester', 'Backend Developer', 'Frontend Developer',
        'Full Stack Developer', 'Business Analyst', 'Project Manager'
    ];

    // Generate random first name
    static getRandomFirstName() {
        return this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
    }

    // Generate random last name
    static getRandomLastName() {
        return this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
    }

    // Generate random company name
    static getRandomCompanyName() {
        return this.companyNames[Math.floor(Math.random() * this.companyNames.length)];
    }

    // Generate random department
    static getRandomDepartment() {
        return this.departments[Math.floor(Math.random() * this.departments.length)];
    }

    // Generate random job title
    static getRandomJobTitle() {
        return this.jobTitles[Math.floor(Math.random() * this.jobTitles.length)];
    }

    // Generate random phone number
    static getRandomPhoneNumber() {
        const areaCode = Math.floor(Math.random() * 900) + 100;
        const firstThree = Math.floor(Math.random() * 900) + 100;
        const lastFour = Math.floor(Math.random() * 9000) + 1000;
        return `${areaCode}${firstThree}${lastFour}`;
    }

    // Generate random annual revenue
    static getRandomAnnualRevenue() {
        const revenues = [50000, 75000, 100000, 150000, 200000, 250000, 300000, 500000, 750000, 1000000];
        return revenues[Math.floor(Math.random() * revenues.length)];
    }

    // Generate random email based on first and last name
    static getRandomEmail(firstName, lastName) {
        const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'company.com', 'email.com'];
        const domain = domains[Math.floor(Math.random() * domains.length)];
        return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
    }

    // Generate a complete random lead object
    static generateRandomLead() {
        const firstName = this.getRandomFirstName();
        const lastName = this.getRandomLastName();
        
        return {
            firstName: firstName,
            lastName: lastName,
            companyName: this.getRandomCompanyName(),
            department: this.getRandomDepartment(),
            jobTitle: this.getRandomJobTitle(),
            phoneNumber: this.getRandomPhoneNumber(),
            annualRevenue: this.getRandomAnnualRevenue(),
            email: this.getRandomEmail(firstName, lastName),
            personalTitle: firstName.charAt(0) + lastName.charAt(0)
        };
    }
}

module.exports = RandomDataGenerator;