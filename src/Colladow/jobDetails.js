const jobDetails = [
  {
    name: 'Squarespace',
    location: 'New York, NY',
    dates: 'February 2014 - February 2019',
    title: 'Senior Frontend Software Engineer',
    description: `
      Responsible for frontend code across the account dashboard,
      authentication, domains and Squarespace 7 products.
    `,
    contributions: [
      'Built the Account Dashboard using React, Redux and Styled Components.',
      'Created a small package of reusable Styled Components for use in two separate services.',
      'Coordinated frontend changes to authentication screens for the mobile teams.',
      'Implemented social login flows and two-factor authentication.',
      'Built several features for the Domain Management System including settings and DNS config.',
      'Wrote the sliding menu system used in the Squarespace 7 product launch.',
    ],
  },

  {
    name: 'DeNA',
    location: 'San Francisco, CA',
    dates: 'May 2013 - January 2014',
    title: 'Software Engineer',
    description: `
      Responsible for quickly prototyping web front-ends, as well as
      integrating a server-side platform for providing user services.
    `,
    contributions: [
      'Introduced Angular.js, along with Bootstrap, as the basis for quickly iterating on front-end prototypes.',
      'Developed build scripts and optimized Gruntfiles to keep iterating and deploying the front-end as smooth as possible.',
      'Wrote several API endpoints in Go for our user service, such as a Facebook friend recommender.',
      'Utilized an in-house graph database to store and query user information via Go and through RESTful HTTP calls directly from the front-end.',
      'Wrote a small Python client for running and analyzing queries against our in-house graph database.',
    ],
  },

  {
    name: 'thredUP',
    location: 'San Francisco, CA',
    dates: 'December 2011 - February 2013',
    title: 'Front-end Engineer',
    description: 'Responsible for a consignment store software built with Ruby on Rails.',
    contributions: [
      'Introduced Backbone.js to the user-facing JavaScript to improve the flexibility of front-end code.',
      'Developed several jQuery plugins and widgets to increase code reusability.',
      'Designed and implemented all front-end JavaScript used on the browse portion of the website.',
      'Developed several RESTful end points needed by the AJAX portions of the front-end.',
      'Selected the JavaScript design patterns and tools used by the rest of the engineering team.',
    ],
  },

  {
    name: 'Arc90',
    location: 'New York, NY',
    dates: 'May 2010 - May 2011',
    title: 'Software Engineer',
    description: `
      Responsible for a Python web application that powers a search engine
      used by engineers to find technical information.
    `,
    contributions: [
      'Participated in designing and rebuilding the entire website on an entirely new platform.',
      'Implemented much of the Python code used to wrap the Bottle web framework to fit our needs.',
      'Developed all the model mappings using SQLAlchemy to simplify and abstract data access.',
    ],
  },

  {
    name: 'FactSet Research Systems',
    location: 'New York, NY',
    dates: 'July 2009 - May 2010',
    title: 'Software Engineer',
    description: `
      Responsible for a ColdFusion web application that manages an entitlement
      process for financial companies to share research through FactSet's main
      application, as well as tracking readership records for that research.
    `,
    contributions: [
      'Introduced the MooTools JavaScript framework to provide more Web 2.0 functionality, such as AJAX and auto-suggest searches. Upgraded the web application to be fully UTF-8 compliant by updating the Perl code\'s database connection method.',
      'Wrote a configurable data access layer to manage clusters of mirrored MySQL databases.',
      'Migrated the readership data from MySQL to MongoDB to reduce the load on MySQL and improve readership report.',
      'performance, using a Python web service to query MongoDB.',
      'Developed new JavaScript libraries to reduce redundancy in the code base.',
    ],
  },
];

export default jobDetails;
