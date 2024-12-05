
import ross from './assets/rostyslavyakubenko.svg'
import './header.css'

export default function Header() {
    return (
        <header>
            <nav className="nav-bar">
                
                {/* <img src={reactLogo} alt="navigation-bar-logo" className="nav-logo" /> */}
                <img src={ross} alt="navigation-bar-logo" className="name-logo" />
                <a className="contact-me" href="#">Contact Me
                    <span className="phone-number">+1 (585) 764-4534</span>
                </a>
                {/* <ul className="nav-items">
                   
                    <li className="nav-item">Email</li>
                  
                </ul> */}
            </nav>
        </header>
    )
  }