// import { useState } from 'react'

import projects from './assets/projects-box.svg'
import skills from './assets/skills.svg'
import project_1_p1 from './assets/project1/Project_1_p1.png'
import project_1_p2 from './assets/project1/Project_2_p2.png'
import technical from './assets/technical.svg'

import css from './assets/CSS.webp'
import python from './assets/python.png'
import docker from './assets/97_Docker_logo_logos-512.webp'
import jenkins from './assets/jenkins.png'
import git from './assets/git.png'
import ansible from './assets/ansible.png'
import mysql from './assets/mysql.svg'
import mongo from './assets/mongo.svg'



import myphoto from './assets/Headshot.jpg'
import html from './assets/HTML5_logo_and_wordmark.svg.png'
import javascript from './assets/Unofficial_JavaScript_logo_2.svg.png'


import { ImageSlider } from './ImageSlider'
import Header from './Header'
import Window from './Window'
import './App.css'

const project1imgs = [project_1_p1, project_1_p2]


function App() {
  return (
    <>
        
        <Header />

     
        <div className='aboutme-tv'>
          
            
           <div className='tv-container'>
                <img className='skillsimg' src={skills} alt=""  />

                <div className='tv-screen'>


                              <div className='aboutme-window'>

                                      <h3>Error</h3>
                                          <div className='aboutme-window-info-top'>
                                            <img className='myphoto' src={myphoto} alt="" />
                                            
                                              <div>
                                                <p><strong>./Name:</strong> Rostyslav Yakubenko</p>
                                                <p><strong>./Location:</strong> Penfield, NY</p>
                                                <p><strong>./Phone:</strong> (585) 764 3434</p>
                                                <p></p>
                                                <p><strong>./Email:</strong> Yakubenkoross@gmail.com</p>
                                              </div>
                                              
                                          </div>
                                          <div className='btns-area'>
                                            <p className='accept-btn'>ok</p>
                                          </div>
                              </div>
                       
                    </div>
                </div>
            </div>
    


        {/* <div className='window-heading-div'>
          <img className='projects-img' src={tools} alt="" width="300px" />
        </div> */}
        <div className='window-heading-div'>
          
          <img  src={technical} alt="" width="300px" />
      </div>
      <div className='all-windows'>
        
        <Window 
        
            name="Coding"
            tool1={javascript} 
            tool1text="Javascript"
            tool2={css}
            tool2text="CSS"
            tool3={html}
            tool3text="HTML"
            tool4={python}
            tool4text="Python"
        />

        <Window 
            // img={trucking}
            name="Continuous integration"
            tool1={jenkins} 
            tool1text="Jenkins"
            tool2={docker}
            tool2text="Docker"
            tool3={git}
            tool3text="Git"
            tool4={ansible}
            tool4text="Ansible"
        />

<Window 
            // img={trucking}
            name="Database"
            tool1={mongo} 
            tool1text="Mongo DB / Atlas"
            tool2={mysql}
            tool2text="MySQL"
   
        />

 
      </div> 
      <div className='window-heading-div'>
          
          <img  src={projects} alt="" width="300px" />
      </div>

      <div className='project-area'>
        <div className='project-area-text'>
            <h2>ClipboardBuddy</h2>
            <p>ClipboardBuddy is a Chrome Extension designed to streamline data capture and organization. This intuitive tool enables users to seamlessly collect and store various data types, including: Text, URLs, Images, and Screenshots, </p>
            <p>Key Features: </p>
            <p>- Data Storage: Collected data is securely stored in the "Saved Items" folder for easy access and management.</p>
            <p>- PDF Export: Users can conveniently print all collected data in PDF format.</p>
            <p>- Edit / Delete / Copy: collected data with easy to use UI. </p>
        </div>
        <div className='project-area-child project-area-img'  >
          <ImageSlider imageUrls={project1imgs} />
        </div>
      </div>
    </>
  )
}

export default App;  

// ClipboardBuddy is a Chrome Extension designed to streamline data capture and organization. This intuitive tool enables users to seamlessly collect and store various data types, including:
// Text
// Images
// URLs
// Screenshots
// Key Features:
// Data Storage: Collected data is securely stored in the "Saved Items" folder for easy access and management.
// PDF Export: Users can conveniently print all collected data in PDF format.
// Local Storage: Data is stored locally, ensuring confidentiality and offline accessibility.




<input type="text"  name="" id="" />












// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
    // tool2={javascript}//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
