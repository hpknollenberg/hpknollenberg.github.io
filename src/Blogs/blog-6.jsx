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
      <h1 style={{...styles.imageDiv}}>Henry's Week 6 Blog</h1>
      
    </div>
  )
}

function Section() {
  return (
    <div className="blog-entry" style={{...styles.text}}>
      <h4>What did you learn about that helped you understand the
          development process? </h4>
      <p>This week we developed our skills further concerning JavaScript, Bootstrap, CSS, and HTML.
        We also learned about APIs and how to interact with them. This week I felt far more
        comfortable working with CSS and Bootstrap; I felt like I could envision what I wanted and
        could quickly make meaningful steps toward that goal. </p><br></br>
      <h4>What does it mean to develop good code?</h4>
      <p>Developing good code is developing readable code that either meets the MVP or goes
        beyond it.</p><br></br>
      <h4>What does it mean to be a good developer? </h4>
      <p>Being a good developer is being able to work well with others and to develop good code.</p><br></br>
      <h4>What is one thing that programmers hate doing?</h4>
      <p>’m not terribly certain what this question is referring to, but what I would assume most
        programmers hate doing is having to parse through unreadable code. </p>
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
