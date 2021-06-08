import image from '../components/my_image.jpg'

export function Home(props){

    return(
        <div>
            <section className='first-section'>
                <span>
                    <img id="my-image" src={image} alt="my smiling face!"/>
                </span>
                <span>
                    <ul className='work'>
                        Things I've done for money
                        <li>
                            Build Stuff
                        </li>
                        <li>
                            Grow secile food
                        </li>
                        <li>
                            Raise mobile food
                        </li>
                        <li>
                            Clean Stuff
                        </li>
                        <li>
                            Manicure Flora
                        </li>
                        <li>
                            Dance
                        </li>
                        <li>
                            Tell Stories
                        </li>
                        <li>
                            Educate
                        </li>
                        <li>
                            Communicate
                        </li>
                        <li>
                            Document Stuff
                        </li>
                        <li>
                            Lead Humans
                        </li>
                    </ul>
                </span>
                <span>
                    <ul>
                        Places I've lived
                        <li>
                            Small towns
                        </li>
                        <li>
                            Big cities
                        </li>
                    </ul>
                </span>
                <span>
                    <ul>
                        Dreams I've had
                        <li>
                            Be an amazing spouse
                        </li>
                        <li>
                            Be an amazing dad
                        </li>
                        <li>
                            Be a pillar of my community
                        </li>
                        <li>
                            Be an expert in my field of work
                        </li>
                        <li>
                            Be respected by my peers 
                        </li>
                        <li>
                            Not wake up in the morning and worry about bills 
                        </li>
                    </ul>
                </span>
                <span>
                    <ul>
                        What I've accomplished so far
                        <li>
                            Developed robust character
                            <ul>
                                <li>
                                    Honesty
                                </li>
                                <li>
                                    Integrity
                                </li>
                                <li>
                                    Mindfullness
                                </li>
                                <li>
                                    etc
                                </li>
                            </ul>
                        </li>
                        <li>
                            Reached level 30 in human
                        </li>
                        <li>
                            Picked up a wide array of skills
                        </li>
                        <li>
                            Learned how to talk with computers
                        </li>
                    </ul>
                </span>
            </section>
        </div>
    )
}