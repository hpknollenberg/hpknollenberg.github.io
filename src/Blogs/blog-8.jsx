import Menu from "../Menu"



const styles = {
  text: {
    fontWeight: 'bold',
    backgroundColor: 'white',
    margin: '10px',
    borderRadius: '5px',
    padding: '10px',
  }
}

function Title() {
  return (
    <div className="ps-3 p-3">
      <h1 style={{...styles.imageDiv}}>Henry's Week 8 Blog</h1>
      
    </div>
  )
}

function Section() {
  return (
    <div className="blog-entry" style={{...styles.text}}>
      <h3>Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why?</h3>
      <p>They are difficult for me to wrap my head around at first; however, I can see that 
        they do make things simpler or at least easier to track, especially when projects become
        more and more complex. I very much appreciate the more modular aspects of React over 
        vanilla JavaScript.</p><br></br>
      <h3>What Frameworks or Libraries are you interested in learning more about?</h3>
      <p>I'm not teribly familiar with a lot of frameworks or libraries, but after a quick search,
        Anime.js sounds like an interesting library. It is used to add animations to sites and apps.</p><br></br>
      <h3>Find one emerging JavaScript tool that you would like to learn more about or use in your final project.</h3>
      <p>Vue looks like an interesting tool. It is said to be similar to React, but is gaining traction due 
        to its simplicity and level of performance on all browsers.</p><br></br>
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
