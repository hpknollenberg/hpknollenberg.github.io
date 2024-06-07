import Menu from "../Menu"



const styles = {
  text: {
    backgroundColor: 'white',
    margin: '10px',
    borderRadius: '5px',
    padding: '10px',
    boxShadow: '10px 10px 10px rgb(72, 15, 72)'
  }
}

function Title() {
  return (
    <div className="ps-3 p-3">
      <h1 style={{...styles.imageDiv}}>Henry's Week 14 Blog</h1>
      
    </div>
  )
}

function Section() {
  return (
    <div className="blog-entry" style={{...styles.text}}>
      <p>
        This is our last week of learning before our final project. This week we continued our
        venture into full stack development with React JavaScript and Django Admin. Our task, which 
        we were given the full week to complete (normally we only have half a week), was to create
        a social media app. Besides the week prior (when we were to create a book tracking app), this 
        has been easily the most extensive of the projects.
        <br></br>
        <br></br>
        Some of the tasks involved were to allow a user to create posts (with full CRUD - create, read, update, and delete -
        capability), allow users to comment on each other's posts, allow users to view each other's profiles, and allow them
        to edit their profiles. Alongside these tasks, one of the more challenging ones was perhaps the most obvious - to
        allow a user to create a profile and login to it. This is our second week dealing with authentication, and while it 
        was still difficult, it did come easier, and I was able to get things off the ground relatively quickly. It's nice to 
        be able to witness a real change in my own knowledge/abilities.
        <br></br>
        <br></br>
        Like I said, this is our last week before the final project. This both excites me and worries me. It is intimidating
        to go into a 2-week project, and it is even more intimidating to have to begin the job search. Still, I'm excited 
        because this project will allow me to put to use everything I've learned so far toward a project that I really care 
        about, and also, I'm excited to find a job that I enjoy, that challenges me, and that pays the bills. 
        <br></br>
        <br></br>
        For my final project, I've decided to create an app for indie movie theaters. This app would allow theaters to 
        have a profile where they can post information, events, and even polls for their consumer base to interact with.
        The polls would allow them to hold special film events where moviegoers can vote on what films they'd like to see. 
        The app in general will further foster a moviegoing community surrounding the indie movie theater and might even
        allow users to discuss specific films and/or events. 
        <br></br>
        <br></br>
        All in all, I'm excited to get to work on this project, both because it's something I care about and because it will 
        further demonstrate my coding abilities for potential employers. The bootcamp has really flown by, yet the beginning 
        feels so long ago. I'm really proud of myself, as well as my fellow bootcampers, for making it this far, and I look 
        forward to all of our futures. 
      </p>
    </div>
  )
}




function About() {
  return (
    <div>
      <Menu />
      <div className="d-flex justify-content-center">
        <div className="">
          <Title />
          <Section />
        </div>
      </div>
    </div>
  )
}


export default About