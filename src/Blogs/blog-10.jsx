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
      <h1 style={{...styles.imageDiv}}>Henry's Week 10 Blog</h1>
      
    </div>
  )
}

function Section() {
  return (
    <div className="blog-entry" style={{...styles.text}}>
      <p>
        We're about halfway through the in-person portion of the bootcamp, and for this 
        week, we transitioned into learning back end development, switching from JavaScript 
        React to Python.
        <br></br>
        <br></br>
        This transition was interesting. I expected it to be more difficult. While there are
        new concepts to learn in Python, such as Object Oriented Programming, for the most part
        the logic is very similar. What differentiates it from other languages, like say JavaScript, 
        boils down mostly to syntax differences (or at least so far). Once I was able to pick up on 
        Python's syntax rhythm, it wasn't too difficult to translate the logic we've learned in front
        end to the back end. 
        <br></br>
        <br></br>
        Our project this week was to create a game of High Card in the terminal using Python and 
        Object Oriented Programming. One initial obstacle I encountered was the lack of visual
        representation. With front end, it is much easier to visualize exactly what my code is doing
        because I can see the effects of it on the user interface. With back end, while the terminal 
        does allow me to see the results of my code, it feels more abstract - as if I'm juggling a 
        bunch of different elements in my head while coding. This made pseudocoding an even more 
        valuable process this week.
        <br></br>
        <br></br>
        While High Card's amount of elements wasn't an unmanageable amount to juggle, the project's 
        stretch goals of BlackJack and War proved more difficult. As I said, pseudocoding proved even
        more valuable this week. I quickly found coding these games without pseudocoding quite
        unmanageable, juggling a multitude of objects and functions. Breaking each step of each game
        down into a manageable step streamlined my process. I took things step by step, checking off each
        one as I completed them. This process proved far more manageable, and I'll definitely be making sure to 
        use it moving forward.
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