AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HTML",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "CSS",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/Tailwind.png",
    langName: "Tailwind",
    langDesc: "<li>Tailwind is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/socketio.jpg",
    langName: "Socket.io",
    langDesc: "<li>Socket.io is a JavaScript library that enables real-time, bidirectional communication between clients (typically web browsers) and servers. It simplifies the process of building applications that require real-time features such as chat applications, online gaming, collaborative editing, and live updates.</li>",
  },
  {
    langImage: "assets/images/techstack-page/nodejs.png",
    langName: "Node js",
    langDesc: "<li>Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run server-side JavaScript code. It is built on the V8 JavaScript runtime engine, which is the same engine used by the Google Chrome browser for executing JavaScript code.</li>",
  },
  {
    langImage: "assets/images/techstack-page/mongodb.png",
    langName: "MongoDB",
    langDesc: "<li>MongoDB is a popular, open-source NoSQL database management system that is designed to handle large amounts of data and provide high performance and scalability.</li>",
  },
  {
    langImage: "assets/images/techstack-page/express.png",
    langName: "Express",
    langDesc: "<li>Express is a minimal and flexible web application framework for Node.js, designed to make it easier to build web and mobile applications.</li>",
  },


];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
