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
      <h1 style={{...styles.imageDiv}}>Henry's Week 9 Blog</h1>
      
    </div>
  )
}

function Section() {
  return (
    <div className="blog-entry" style={{...styles.text}}>
      <h4>What have you learned about CLIs? Do you think they are scary?</h4>
      <p>I have not learned much about CLIs. For the most part, we have been using 
        them to upload our projects to GitHub and also to install NPM packages. 
        Beyond that, I'm not sure of their full capabilities.<br></br>
        I don't really find CLIs scary, but sometimes they can feel a bit daunting
        as there is no user interface. Keeping track of what I am doing feels 
        more abstract.</p><br></br>
      <h4>If you were to build a CLI, what would it do?</h4>
      <p>I'm not certain how to answer this question as I am not yet aware of
        all the things that CLIs can do, but I am looking forward to learning.</p><br></br>
      <h4>List some ideas that without a Framework, would take you a long time to code.</h4>
      <p>Anything where you are displaying a lot of similar information. For example, 
        a restaurant menu, stock information, actors and their roles in a film, etc.</p><br></br>
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