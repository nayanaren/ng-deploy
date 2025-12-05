export interface WorkExperience {
    title: string;
    company: string;
    start: string;
    end: string;
    duties: string[];
}

export const WorkExperienceData: WorkExperience[] = [

    {
        title: 'SDE 3',
        company: 'ZOOMINFO',
        start: 'March 2024',
        end: 'Present',
        duties: [
            'Working on contributing and maintaining the component library used extensively for all company applications. The component library maintains high standards of accessibility and performance.',
            'Contributing to the design and implementation of new features across different verticals of Sales Intelligence.',
            'Set up and maintaining Playwright e2e tests for features within an Nx repo.'
        ]
    },
    {title: 'SDE 3', company: 'AMADEUS LABS', start: 'October 2023', end: 'March 2024', duties: [
        'Worked in the Mobility and Transfers Engineering to develop libraries/widget modules in Angular providing transfers content for integration in third party applications.',
'Analyze new requirements, implement features, and maintain transfers application on Amadeus Sell Connect.',
'Mentoring intern projects and onboarding ew joiners with knowledge transfer sessions and code reviews.'

    ]},
    {title: 'SDE 2', company: 'AMADEUS LABS', start: 'April 2019', end: 'October 2023', duties: [
        'Part of the team which developed the new E-commerce web application for AC\'s PSS (Passenger Service System) systems migration to Amadeus. Provided onsite support for the migration cutover.', 
        'Fixed critical issues post migration and provided on call support too on occasion.',
        'Implemented Single Sign-on support for logged-in user flows on the application with the AWS Amplify SDK.',
        'Assessed and contributed to improving performance of the application like implementing Service Workers and code cleanup activities.',
        'Migrated legacy features in AngularJS to Angular',
        'Currently contributing to analysing, designing and developing new features for the application such as integration with third-party products.'
    ]},
    {title: 'SDE 1', company: 'AMADEUS LABS', start: 'July 2016', end: 'April 2019', duties: [
        'Developing features for the Air Canada E-commerce web application pre PSS migration.',
        'Implemented many accessibility features to make the application compliant to accessibility guidelines.',
        'Developed email templates for the application using Freemarker Template Language.',
        'Implemented major modules like seat selection and payment for the PSS migration project.'
    ]},
]