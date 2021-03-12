import { Person } from "./person";

export const PersonDATA: Person[] = 
[
    { 
        id: 1, firstName: 'Joe', 
        lastName: 'Stam', 
        highschool: true, 
        highschoolName:'Liceul 1', 
        college: true, 
        collegeName: 'Colegiul National 1', 
        workExperience: false, 
        workDone: 'None',
        skills:
        {
            competency: 'Teamwork',
            certificates: 'CISM® Certified Information Security Manager',
            otherSkills: 'Communication'
        },
        
    },
    { 
        id: 2, 
        firstName: 'Mark', 
        lastName: 'Stalin', 
        highschool: false, 
        highschoolName:'Liceul 2', 
        college: true,
        collegeName: 'Colegiul National 2', 
        workExperience:true, workDone: 'Bartender at "Let\'s drink some beer Pub! " for 3 years. Personal Cook at "My fish is too dry" for 2 years. Professional Tennis Player for 6 years.',
        skills:
        {
            competency: 'Decision Making',
            certificates: 'PMP® Certified Project Management Professional',
            otherSkills: 'Problem solving'
        },
        
    },
    { 
        id: 3, 
        firstName: 'Ana', 
        lastName: 'Mar', 
        highschool: true, 
        highschoolName:'Liceul 3', 
        college: true, 
        collegeName: 'Colegiul National 3',
        workExperience: true,
        workDone: 'Product Manager at "DentoCare" for 3 years. Professional Dancer for 4 years. Hired hitman for 1 year, part-time.', 
        skills: 
        {
            competency: 'Leadership',
            certificates: 'Google Certified Professional (GCP) Cloud Architect',
            otherSkills: 'Commercial awareness'  
        },
        
    },
];