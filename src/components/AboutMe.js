import { AboutMeData } from '../data/AboutMeData'
import My_image from '../data/my_image.jpg'
export function AboutMe(props){
    const {self, occupation, description } = AboutMeData()

    function descriptionLineBreaks(array){
        return array.map((line) => <p>{line}</p>)
    }

    return (
        <section id='about-me' className='about-me'>
                <div className="left">
                    <p className="self">{self}</p>
                    <p className="occupation">{occupation}</p>
                    <p className="description">{descriptionLineBreaks(description)}</p>
                </div>
                <img src={My_image} alt="Allens smiling face!" className="my-image"/>
        </section>
    )
}