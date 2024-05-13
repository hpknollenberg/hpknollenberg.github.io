import Menu from "./Menu"
import email from "./assets/icons/Email.svg"
import github from "./assets/icons/Github.svg"
import instagram from "./assets/icons/Instagram.svg"
import linkedin from "./assets/icons/linkedin.svg"
import website from "./assets/icons/Website.svg"
import allegra_and_henry from "./assets/img/Allegra_and_henry.jpg"
import allegra_and_henry_2 from "./assets/img/Allegra_and_me.jpg"
import allegra_and_lucky from "./assets/img/Allegra_Lucky_and_me.png"
import lucky_and_henry from "./assets/img/Knollenberg_photo.jpg"
import lucky_and_henry_2 from "./assets/img/Screenshot_2023-08-12_003748.png"
import Card10 from "./Blog Cards/Card-10.jsx"
import ToDoList from "./Project Cards/Project-To-Do-List.jsx"


function LandingPage () {
  return(
    <div className="d-flex justify-content-center row flex-column landing p-0"> 
      <div className="links row justify-content-center justify-content-md-end align-items-center col-9 col-xl-10 ">
        <a href="mailto:henryknollenberg@outlook.com" className="icon link-button col-1 col-md-1 p-0"><img src={email} alt="envelope icon" class="icons"></img></a>
        <a href="https://github.com/hpknollenberg" className="icon link-button col-1 col-md-1 p-0"><img src={github} alt="github icon" class="icons"></img></a>
        <a href="https://www.instagram.com/greatsetman/" className="icon link-button col-1 col-md-1 p-0"><img src={instagram} alt="instagram icon" class="icons"></img></a>
        <a href="https://www.linkedin.com/in/henry-knollenberg-44a62829a/" className="icon link-button col-2 col-md-1 p-0"><img src={linkedin} alt="linked-in icon" class="icons"></img></a>
      </div>
            
      <header className="d-flex justify-content-end col-md-9 col-xl-10 col-12 p-0">
        <h1 id="title" className="">Henry Knollenberg</h1>
        <img src={lucky_and_henry_2} alt="Henry with their dog Lucky" className="pictures d-none d-sm-block"></img>
        <img src={allegra_and_henry} alt="Henry and their girlfriend Allegra" className="pictures d-none d-lg-block"></img>
        <img src={allegra_and_lucky} alt="Henry with their girlfriend Allegra and their dog Lucky" className="pictures d-none d-xl-block"></img>
        <img src={allegra_and_henry_2} alt="Henry and their girlfriend Allegra" className="pictures d-none d-xl-block"></img>
        <img src={lucky_and_henry} alt="Henry with their dog Lucky" className="pictures d-none d-xxl-block"></img>
      </header>
      <div className="d-flex col-md-9 col-xl-10 col-12 justify-content-end">
        <h2 id="sub-title">Full-Stack Developer</h2>
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="p-0 m-0">
      <Menu />
      <div className="mt-5 mb-5">
        <LandingPage />
      </div>
      <div className="d-flex row">
        <Card10 />
        <ToDoList />
      </div>
      
    </div>
  )
}


export default App
