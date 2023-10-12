AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Full Stack Developer",
    cardImage: "assets/images/experience-page/Frame 1.png",
    place: "Vadodara",
    time: "(Aug, 2023 - Till Date)",
    desp: "<li>I have worked in front end in which games and some new websites have been created, as well as working in a team is beneficial.</li><li>Handled the discord community server and made some changes for the club</li>",
  },
 


];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "FOSSASIA",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Open Technologies developed in Asia and Around the Globe (member)",
//   },
//   {
//     title: "DEVs Dungeon",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Open Learning Community connecting Students, Mentors, Job Seekers and Recruiters from across the world!     (member)",
//   },
 


// ];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
      
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
 
   {
    title: "Trash to Treasure- cpcb.gov.in",
    subtitle: "Finalist",
    image: "assets/images/experience-page/cpcb-logo.jpg",
    desp: " ",
    href: "https://cpcb.nic.in/shortlisted-participants/",
  },
  
  {
    title: "NFT Hacks",
    subtitle: "Participant",
    image: "assets/images/experience-page/uplift.png",
    desp: " ",
    href: "https://uplift.girlscript.tech/",
  },
  
  {
    title: "NFT Hacks",
    subtitle: "Participant",
    image: "assets/images/experience-page/electrothon.png",
    desp: " ",
    href: "https://uplift.girlscript.tech/",
  },


];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
