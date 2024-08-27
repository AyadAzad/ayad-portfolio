export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certificates", link: "#certificates" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] cursor-pointer",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/ayad-resume.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with working globally",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A Computer Scientist with a passion for Software engineering",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning Mobile Development",
    description: "learning Mobile development",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-80 w-50",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/icons8-react-js-240.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project or hire me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Blog Website",
    des: "Explore new blogs related to programming, blogs from one of the best platforms (FreeCodeCamp)",
    img: "/insight_blog.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://insightblogas.netlify.app/",
    projectState: "Check Live Site"
  },
  {
    id: 2,
    title: "Rent Ride",
    des: "Explore new cars and rent your favourite car ",
    img: "/Rent Ride web.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://comingsoon.com",
    projectState: "Coming soon"
  },

];


export const skills = [
  {
    id: 1,
    name: "NextJS",
    img: "/icons8-nextjs-240.png",
  },
  {
    id: 2,
    name: "ReactJS",
    img: "/icons8-react-js-240.png",

  },
  {
    id: 3,
    name: "TailwindCss",
    img: "/icons8-tailwind-css-240.png",
  },
  {
    id: 4,
    name: "NodeJs",
    img: "/icons8-nodejs-240.png",
  },
  {
    id: 5,
    name: "Expressjs",
    img: "/icons8-express-js-240.png",
  },
  {
    id: 6,
    name: "Spring Boot",
    img: "/icons8-spring-boot-240.png",
  },
  {
    id: 7,
    name: "MySQL",
    img: "/icons8-mysql-240.png",
  },
  {
    id: 7,
    name: "PostgreSQL",
    img: "/icons8-postgresql-240.png",
  },
  {
    id: 8,
    name: "MongoDB",
    img: "/icons8-mongodb-240.png",
  },
  {
    id: 9,
    name: "django",
    img: "/icons8-django-250.png",
  },
  {
    id: 10,
    name: "TypeScript",
    img: "/icons8-typescript-240.png",
  },
  {
    id: 11,
    name: "GraphQL",
    img: "/icons8-graphql-240.png",
  },
  {
    id: 12,
    name: "Redux",
    img: "/icons8-redux-240.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Learning NextJS",
    desc: "Acquired expertise in Next.js for building server-side rendered React applications. Demonstrated skills in creating high-performance web platforms with improved interactivity and SEO optimization.",
    className: "md:col-span-2",
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/icons8-nextjs-240.png", "/icons8-react-js-240.png"],
    certificateLink: "https://www.linkedin.com/learning/certificates/abfc4714aab043faf95939c9e0722f931003098843e225a84beb079dd5c5e6d9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAeYHtT3nSkO8mkVnttYKfg%3D%3D",
  },
  {
    id: 2,
    title: "React: Securing Applications",
    desc: "Gained proficiency in securing React applications, focusing on best practices for web app security. Implemented robust security measures and authentication protocols.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/icons8-react-js-240.png"],
    certificateLink: "https://www.linkedin.com/learning/certificates/baccfb5b87bbf96aed817b22e3d0d8b25d3fcce8b540e41f07d748eef05e0a14?trk=share_certificate",
  },
  {
    id: 3,
    title: "React: Design Patterns",
    desc: "Mastered design patterns in React for scalable and maintainable application development. Led the development of a mobile app from concept to deployment, employing industry-standard design practices.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/icons8-react-js-240.png"],
    certificateLink: "https://www.linkedin.com/learning/certificates/c375190372715d83666899b4d9cba222ab28f9aa28d838b2bfd5d2aed4c607ae?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAeYHtT3nSkO8mkVnttYKfg%3D%3D",
  },
  {
    id: 4,
    title: "TypeScript Essential Training",
    desc: "Developed strong TypeScript skills for building robust, type-safe applications. Leveraged TypeScript in modern frontend development to enhance code quality and maintainability.",
    className: "md:col-span-2",
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/icons8-typescript-240.png"],
    certificateLink: "https://www.linkedin.com/learning/certificates/af9d84cac1a43a4a2b01d8b9fed3a18e60908d3bf54cedbe4816d31b82a84a8b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bgl2oRnAfQCq5mSxyk4uAMg%3D%3D",
  },
  {
    id: 5,
    title: "Getting Started In Spring Development",
    desc: "Gained foundational knowledge in Spring development, focusing on creating and managing user-facing features with Spring Boot for scalable and maintainable Java applications.",
    className: "md:col-span-2",
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/icons8-spring-boot-240.png"],
    certificateLink: "https://www.linkedin.com/learning/certificates/ced0d6fd99a78a1b76216d5aabc17f6c501c28e80378d058b92a56c0833bf7fd?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bgl2oRnAfQCq5mSxyk4uAMg%3D%3D",
  },
  {
    id: 6,
    title: "Advanced Node.js: Scaling Application",
    desc: "Specialized in advanced Node.js techniques for scaling applications, including performance optimization and efficient resource management in high-traffic environments.",
    className: "md:col-span-2",
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/icons8-nodejs-240.png"],
    certificateLink: "https://www.linkedin.com/learning/certificates/d8b9f5c46d7b2d968705f7c45b02d4ca01107fb58b764a2250b86583999576d4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bgl2oRnAfQCq5mSxyk4uAMg%3D%3D",

  },
  {
    id: 7,
    title: "Node.js: Microservices",
    desc: "Developed expertise in building microservices with Node.js, focusing on creating modular, scalable systems with a strong emphasis on inter-service communication and data consistency.",
    className: "md:col-span-2",
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/icons8-nodejs-240.png"],
    certificateLink: "https://www.linkedin.com/learning/certificates/a028501c07b36fef6459a26bd1129119745f876e184b90264a9ce7d1f2df96a3?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bgl2oRnAfQCq5mSxyk4uAMg%3D%3D",

  },
  {

    id: 8,
    title: "Advanced Express",
    desc: "Advanced proficiency in Express.js for building web applications and APIs. Enhanced skills in creating high-performance server-side applications with scalable architecture.",
    className: "md:col-span-2",
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/icons8-express-js-240.png"],
    certificateLink: "",
  },
  {

    id: 9,
    title: "Advanced SQL for Application Development",
    desc: "Developed advanced SQL skills for application development, focusing on complex queries, optimization techniques, and efficient data management for high-performance applications.",
    className: "md:col-span-2",
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/mysql-svgrepo-com.svg"],
    certificateLink: "https://www.linkedin.com/learning/certificates/a471dcbb7036fb8f4a24bcbabe0e040698a4430587b17d73d4d280b09ef75fa0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bgl2oRnAfQCq5mSxyk4uAMg%3D%3D",

  },
  {
    id: 10,
    title: "Advanced PostgreSQL",
    desc: "Acquired advanced skills in PostgreSQL for application development, including complex data modeling, query optimization, and performance tuning for robust database solutions.",
    className: "md:col-span-2",
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/icons8-postgresql-240.png"],
    certificateLink: "https://www.linkedin.com/learning/certificates/8968e046f4b3a4dead65b5968e27c6353d7ffb7939a79168b7054466e94b7267?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bgl2oRnAfQCq5mSxyk4uAMg%3D%3D",

  },
  {

    id: 11,
    title: "MongoDB Essential Training",
    desc: "Mastered essential MongoDB concepts for managing NoSQL databases, including schema design, indexing, and aggregation for building efficient and scalable data-driven applications.",
    className: "md:col-span-2",
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/icons8-mongodb-240.png"],
    certificateLink: "https://www.linkedin.com/learning/certificates/270b39f83f0d1d35670853b07b6c05a89484d218fba178b54f9e38d7a92a68d3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bgl2oRnAfQCq5mSxyk4uAMg%3D%3D",
  },
  {
    id: 12,
    title: "Advanced MongoDB: Efficient and Secure Data Management",
    desc: "Specialized in advanced MongoDB techniques for efficient and secure data management, focusing on performance optimization, security practices, and effective data organization.",
    className: "md:col-span-2",
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/icons8-mongodb-240.png"],
    certificateLink: "https://www.linkedin.com/learning/certificates/1305b2f2a35c5d74ef0dc7e6b05a6a183c01aeec832274805025f0d2aff45fac?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bgl2oRnAfQCq5mSxyk4uAMg%3D%3D",

  },
  {

    id: 13,
    title: "AWS Essential Training for Developers",
    desc: "Acquired essential AWS skills for developers, including cloud computing basics, deployment strategies, and AWS services for building scalable and reliable cloud-based applications.",
    className: "md:col-span-2",
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/aws-svgrepo-com.svg"],
    certificateLink: "https://www.linkedin.com/learning/certificates/eb1ff90a27a63134a6e8bdda4769f7f58dab225f9fdaf86fe4c415b31d35c6f8?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BAeYHtT3nSkO8mkVnttYKfg%3D%3D",
  },
  {
    id: 14,
    title: "GraphQL Essential Training",
    desc: "Developed a strong foundation in GraphQL for querying APIs, focusing on building efficient and flexible data retrieval systems and implementing best practices for schema design and client-server communication.",
    className: "md:col-span-2",
    thumbnail: "/linkedin-svgrepo-com.svg",
    skillsIcon: ["/icons8-graphql-240.png"],
    certificateLink: "https://www.linkedin.com/learning/certificates/63cd0896c6efbb5ba04433c0e22191ded7d3fa3a9455f5a125378650d016219a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bgl2oRnAfQCq5mSxyk4uAMg%3D%3D",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/AyadAzad"
  },
  {
    id: 2,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/ayad-ali-cps/"
  },
];
