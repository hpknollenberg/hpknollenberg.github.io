import Menu from "./Menu"
import Allegra_Henry_Lucky from "./assets/img/Allegra_Lucky_and_me.png"



const styles = {
  image: {
    height: '100%',
    objectFit: 'contain',
    borderRadius: '200px',
    marginRight: '10px'
    
  },
  imageDiv: {
    height: '200px',
  },
  text: {
    backgroundColor: "white",
    margin: '10px',
    borderRadius: '5px',
    padding: '10px',
    fontWeight: 'bold'
  }
}

function Title() {
  return (
    <div className="p-2">
      <h1 style={{...styles.imageDiv}}><img src={Allegra_Henry_Lucky} style={{...styles.image}}></img>About Me</h1>
      
    </div>
  )
}

function Section() {
  return (
    <div className="blog-entry" style={{...styles.text}}>
      <p>My name is Henry Knollenberg. I am a web developer familiar with HTML, CSS, JavaScript, and React. 
        <br></br>I am a student of Awesome Inc.'s Web-Developer Bootcamp.</p>
      <p>Before becoming a web developer, I received an MFA in Creative Writing from the University of Kentucky.</p>
      <p>My most recent job was to train AI responses concerning writing ability as well as factuality. 
        <br></br> I have also worked in Academia, Data Entry, Retail, and Construction.</p>
      <p>I currently live in Lexington, Kentucky, with my girlfriend Allegra and our dog Lucky.</p>
    </div>
  )
}




function About() {
  return (
    <div className="">
      <Menu />
      <Title />
      <Section />
    </div>
  )
}


export default About
