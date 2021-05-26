import image from '../components/my_image.jpg'
import {useState} from 'react'
// let baseUrl = 'localhost:3000/paragraph'
export function Home(props){
 let styling = {
     margin: 20,
     maxWidth: 500,
     boxShadow: '0px 0px 2px 1px rgba(5,5,5,0.2)',
    }

 let rightStyling= {
     marginTop: 20,
     minWidth: '50vw',
    }

 let firstSection = {
     display: 'flex',
    }

 let paragraphs = {
     Introduction: "Let me introduce myself...",
     Profession: "My professional history...",
     Hobbies: "My hobbies include...",
     Dreams: "I aspire to be..."
    }
    
 const [activeParagraph, setActiveParagaph] = useState(paragraphs.Introduction)
 let  clickHandler = (event) => {
    let symbol = event.target.textContent
    setActiveParagaph(paragraphs[symbol])
    }

    return(
        <div>
            <section className='first-section' style={firstSection}>
                <span className='left'>
                    <img src={image} style={styling} alt="my smiling face"/>
                </span>
                <span className='right' style={rightStyling}>
                    <div>
                        <span onClick={clickHandler}>Introduction</span>
                        <span> | </span>
                        <span onClick={clickHandler}>Profession</span>
                        <span> | </span>
                        <span onClick={clickHandler}>Hobbies</span>
                        <span> | </span>
                        <span onClick={clickHandler}>Dreams</span>
                    </div>
                    <p>{activeParagraph}</p>
                </span>
            </section>
        </div>
    )
}