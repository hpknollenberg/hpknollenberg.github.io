import Menu from "./Menu"



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
      <h1 style={{...styles.imageDiv}}>Pseudo-Code</h1>
      
    </div>
  )
}

function Section() {
  return (
    <div className="blog-entry" style={{...styles.text}}>
      <p>Pseudo-coding is the process of writing out the logic of one’s code 
        in plain language. This can look different for different people,
        but the idea is that most anyone could understand it – even if they
        aren’t skilled in coding. </p>
      <p>The main benefit to pseudo-coding is that it enables one to get the logic down of one’s code before getting into 
        the syntax of the coding language. This way, if one gets stuck syntactically, 
        they always have the logic as a base to refer back to. </p>
      <p>For example, “Use a for-loop to iterate through an array.” This may not 
        make complete sense tosomeone unfamiliar with coding, but they would likely 
        be able to get some idea of its meaning. Whereas, ```for let i = 0; i 
        greaterthan array.length; i++``` appears like gibberish to the average person. 
        To askilled coder, this example might not be much of an issue, but when things 
        get exceedingly complicated, it can help one to keep track of things when the 
        logic of a program is written in plain language. </p>
      <p>This concept has been enormously helpful in my own journey as an aspiring developer. At the
          beginning, I was very hesitant to write pseudo-code. I thought it was somewhat of a waste of time. I
          mean, why not just write the code? Since I’ve transitioned, however, into pseudo-coding more
          regularly, my process of coding has become much more fluid with far less, though not an absence
          of, obstacles. Regardless, those obstacles have become more easy to manage, and when I go into
          commenting my code, I already have a basis for explanation, and it is made much easier to
          understand what I was doing say yesterday, or last week, on a project.  </p>
        <p> I recommend pseudo-coding to every coder out there. It is so helpful and is truly a best practice.</p>
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
