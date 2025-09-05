export interface Contribution {
  contributor: string;
  percentage: number;
  tasks: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'ai' | 'data' | 'other';
  status: 'completed' | 'in-progress' | 'planned';
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
  contributions?: Contribution[];
}

export const projectsData: Project[] = [
  // Featured Projects
  {
    id: 'my-billmate',
    title: 'My BillMate',
    description: 'Comprehensive full-stack billing and route management system for distribution businesses with real-time analytics, multi-payment support, and mobile-optimized agent interface.',
    longDescription: 'My BillMate is a complete digital transformation solution for distribution businesses, designed to replace traditional paper-based route management with a modern, efficient system. The application serves businesses like FMCG distributors, milk delivery services, and wholesale distributors who need to manage route-based deliveries, agent performance, and customer billing.\n\nThe system features a dual-interface design: an admin dashboard for business owners to manage routes, assign agents, track performance, and analyze business metrics; and a mobile-optimized agent interface for field operations including customer billing, invoice generation, and payment collection.\n\nKey Features:\n• **Route Management**: Create delivery routes, assign agents, track real-time progress\n• **Multi-Payment Billing**: Support for cash, UPI, credit, and mixed payments\n• **Real-time Analytics**: Live dashboard with business metrics and performance tracking\n• **Invoice Generation**: Automatic invoice creation with unique numbers and payment tracking\n• **Customer Management**: Comprehensive customer database with credit and outstanding tracking\n• **Inventory Management**: Product catalog with real-time stock updates\n• **Mobile-First Design**: Optimized for field agents with offline capability\n• **Comprehensive Reporting**: Detailed analytics with drill-down capabilities\n\nThe application handles the complete business workflow from morning route assignments to end-of-day performance analysis, providing complete visibility and control over distribution operations. Built with React 18, TypeScript, Supabase, and Tailwind CSS for a modern, scalable solution.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'shadcn/ui', 'React Router DOM', 'Context API'],
    category: 'web',
    status: 'completed',
    demoUrl: 'https://lovable.dev/projects/c4b8cde0-449e-40a4-914b-9a4674676cf4',
    githubUrl: '#',
    featured: true,
    date: '2024-09',
    contributions: [
      {
        contributor: 'Raj Kumar Reddy Tenali',
        percentage: 85,
        tasks: [
          'Conceptualized complete distribution business management system architecture',
          'Designed comprehensive business workflow from route assignment to performance analysis',
          'Planned dual-interface system (Admin dashboard + Mobile agent interface)',
          'Designed multi-payment billing system supporting cash, UPI, credit, and mixed payments',
          'Architected real-time analytics and reporting system with drill-down capabilities',
          'Planned mobile-first responsive design strategy for field agents',
          'Designed role-based access control and security implementation',
          'Created comprehensive feature specifications and user experience flows',
          'Managed product development lifecycle and implementation strategy',
          'Designed invoice generation system with automatic numbering and payment tracking',
          'Planned offline capability and real-time sync architecture'
        ]
      },
      {
        contributor: 'AI Assistance (GPT)',
        percentage: 10,
        tasks: [
          'Generated React TypeScript components based on specifications',
          'Implemented Supabase database queries and real-time subscriptions',
          'Created responsive Tailwind CSS layouts and styling',
          'Developed Context API state management patterns',
          'Implemented form validation and error handling logic',
          'Generated utility functions for data processing and calculations'
        ]
      },
      {
        contributor: 'Bolt.new (AI Frontend)',
        percentage: 5,
        tasks: [
          'Assisted with shadcn/ui component integration and styling',
          'Generated responsive layout components and mobile optimizations',
          'Created interactive UI elements and navigation components',
          'Implemented chart components for analytics dashboard'
        ]
      }
    ]
  },
  {
    id: 'eapcet-rank-prediction',
    title: 'EAPCET Rank Prediction using Machine Learning',
    description: 'ML-based system that predicts engineering college admission chances for EAPCET exam candidates using linear regression and decision trees with 85%+ accuracy.',
    longDescription: 'EAPCET is an entrance exam conducted in Andhra Pradesh for engineering college admissions. As a student who went through this process at VIT AP, I experienced the challenge of predicting admission chances for CSE seats. This project aims to help future students make informed decisions about their college options based on historical rank data.\n\nThe project involved extensive data collection by scraping official EAPCET rank lists from previous years. After analyzing multiple machine learning models, I found that linear regression provided the best fit with over 85% accuracy for rank prediction. Additionally, decision trees were implemented to determine admission probability for specific colleges and branches.\n\nKey Features:\n• Historical data analysis from official EAPCET rank lists\n• Linear regression model for rank prediction (85%+ accuracy)\n• Decision tree implementation for admission probability\n• Data scraping from official websites\n• Interactive prediction interface\n• Comprehensive analysis of previous year trends\n\nThis tool serves as a valuable resource for EAPCET aspirants to make strategic decisions during the web options selection process.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'BeautifulSoup', 'Linear Regression', 'Decision Trees', 'Data Scraping'],
    category: 'ai',
    status: 'completed',
    githubUrl: 'https://github.com/tenalirajkumarreddy/RankPredictionUsingML.git',
    featured: true,
    date: '2024-07',
    contributions: [
      {
        contributor: 'Raj Kumar Reddy Tenali',
        percentage: 75,
        tasks: [
          'Conceptualized the project based on personal EAPCET experience',
          'Researched and understood machine learning model structures and workflows',
          'Collected and analyzed historical EAPCET rank data from official sources',
          'Designed the data collection strategy and web scraping approach',
          'Documented the entire machine learning pipeline and methodology',
          'Tested and validated model accuracy and performance',
          'Created project documentation and user guidelines'
        ]
      },
      {
        contributor: 'AI Assistance (GPT)',
        percentage: 25,
        tasks: [
          'Provided code snippets for machine learning model implementation',
          'Assisted with Python syntax and library usage for data manipulation',
          'Helped optimize data scraping scripts and error handling',
          'Suggested best practices for model evaluation and validation',
          'Provided guidance on scikit-learn library functions and parameters'
        ]
      }
    ]
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack web application built with React, Node.js, and MongoDB. Features include user authentication, shopping cart, and payment integration.',
    longDescription: 'A comprehensive e-commerce platform with modern UI/UX design. Built using the MERN stack with features including user authentication, product catalog, shopping cart functionality, secure payment processing with Stripe, admin dashboard, order management, and responsive design. The platform includes advanced features like product search, filtering, user reviews, and real-time inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT'],
    category: 'web',
    status: 'completed',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    date: '2024-08',
    contributions: [
      {
        contributor: 'Raj Kumar Reddy Tenali',
        percentage: 100,
        tasks: [
          'Full-stack development and implementation',
          'UI/UX design and user experience optimization',
          'Database design and backend API development',
          'Payment integration with Stripe',
          'Testing, debugging, and deployment'
        ]
      }
    ]
  },
  {
    id: 'ai-task-manager',
    title: 'AI Task Manager',
    description: 'Intelligent task management system using machine learning to prioritize tasks and predict completion times. Built with Python and TensorFlow.',
    longDescription: 'An AI-powered task management application that uses machine learning algorithms to analyze user behavior patterns and automatically prioritize tasks. The system predicts task completion times based on historical data, suggests optimal scheduling, and provides intelligent insights to improve productivity. Built with Python backend, TensorFlow for ML models, and a modern React frontend.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'TensorFlow', 'Flask', 'PostgreSQL', 'React', 'Scikit-learn'],
    category: 'ai',
    status: 'completed',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    date: '2024-07'
  },
  {
    id: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    description: 'React-based analytics dashboard for social media management. Includes real-time data visualization and automated reporting features.',
    longDescription: 'A comprehensive social media analytics dashboard that aggregates data from multiple platforms. Features include real-time analytics, custom report generation, audience insights, engagement tracking, and automated posting capabilities. Built with React, D3.js for visualizations, and integrates with major social media APIs.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'D3.js', 'Express', 'Socket.io', 'Redis', 'Chart.js'],
    category: 'web',
    status: 'completed',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    date: '2024-06'
  },
  {
    id: 'mobile-fitness-app',
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile app for fitness tracking and workout planning. Features include progress tracking and social challenges.',
    longDescription: 'A comprehensive fitness tracking mobile application built with React Native. Features include workout planning, progress tracking, nutrition logging, social challenges, goal setting, and integration with wearable devices. The app includes a community feature for sharing achievements and participating in group challenges.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js', 'Expo'],
    category: 'mobile',
    status: 'completed',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    date: '2024-05'
  },

  // Additional Projects
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    description: 'Modern weather application with beautiful UI and accurate forecasts using OpenWeatherMap API.',
    longDescription: 'A sleek weather application that provides detailed weather information including current conditions, hourly forecasts, and 7-day predictions. Features location-based weather, interactive maps, weather alerts, and beautiful animations. Built with React and integrates with multiple weather APIs for accurate data.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'OpenWeatherMap API', 'CSS3', 'JavaScript'],
    category: 'web',
    status: 'completed',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    date: '2024-04'
  },
  {
    id: 'expense-tracker',
    title: 'Personal Expense Tracker',
    description: 'Full-stack application for tracking personal finances with charts and budget management.',
    longDescription: 'A comprehensive personal finance management application that helps users track expenses, set budgets, and analyze spending patterns. Features include expense categorization, budget alerts, financial goals tracking, and detailed analytics with charts and graphs. Built with React frontend and Node.js backend.',
    image: 'https://images.pexels.com/photos/164652/pexels-photo-164652.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MySQL', 'Chart.js', 'Express'],
    category: 'web',
    status: 'completed',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    date: '2024-03'
  },
  {
    id: 'movie-recommendation',
    title: 'Movie Recommendation System',
    description: 'AI-powered movie recommendation system using collaborative filtering and content-based algorithms.',
    longDescription: 'An intelligent movie recommendation system that uses machine learning algorithms to suggest movies based on user preferences and viewing history. Implements both collaborative filtering and content-based recommendation approaches. Features include user ratings, reviews, watchlist management, and personalized recommendations.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'SQLite', 'React'],
    category: 'ai',
    status: 'completed',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    date: '2024-02'
  },
  {
    id: 'chat-application',
    title: 'Real-time Chat Application',
    description: 'Real-time messaging app with group chats, file sharing, and emoji reactions using Socket.io.',
    longDescription: 'A modern real-time chat application with support for one-on-one and group conversations. Features include message encryption, file sharing, emoji reactions, typing indicators, message search, and user presence status. Built with React frontend and Node.js backend using Socket.io for real-time communication.',
    image: 'https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    category: 'web',
    status: 'in-progress',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    date: '2024-09'
  },
  {
    id: 'data-visualization',
    title: 'COVID-19 Data Visualization',
    description: 'Interactive dashboard displaying COVID-19 statistics with various charts and global maps.',
    longDescription: 'An interactive data visualization dashboard that displays COVID-19 statistics from around the world. Features include interactive maps, time-series charts, country comparisons, and trend analysis. Built with React and D3.js for creating dynamic and interactive visualizations with real-time data updates.',
    image: 'https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'D3.js', 'Python', 'Pandas', 'API Integration'],
    category: 'data',
    status: 'completed',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    date: '2024-01'
  },
  {
    id: 'blockchain-voting',
    title: 'Blockchain Voting System',
    description: 'Secure voting application using blockchain technology to ensure transparency and immutability.',
    longDescription: 'A decentralized voting system built on blockchain technology to ensure secure, transparent, and tamper-proof elections. Features include voter authentication, candidate registration, real-time vote counting, and audit trails. Built with Solidity smart contracts and React frontend.',
    image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Solidity', 'React', 'Web3.js', 'Ethereum', 'Truffle'],
    category: 'other',
    status: 'in-progress',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
    date: '2024-08'
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projectsData.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projectsData;
  return projectsData.filter(project => project.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};
