export function Contact(props){

    return (
        <section id='contact' className='contact'>
            <span className='contact-links'>
                <a href="mailto:allenlea2007@gmail.com" target="_blank" rel="noreferrer">allenlea2007@gmail.com</a>
                <a href="https://www.linkedin.com/in/allen-r-lea/" target="_blank" rel="noreferrer">Linkedin</a>
                <a href="tel:918-913-2797" target="_blank" rel="noreferrer">(918)913-2797</a>
            </span>

            <form>
                <label for="name">
                    Name
                </label>
                <input type="text" placeholder="put your name here"/>
                <label for="email">
                    Email
                </label>
                <input type="email" placeholder="put your name here"/>
                <label for="subject">
                    Subject
                </label>
                <input type="text" placeholder="put your name here"/>
                <label for="message">
                    Message
                </label>
                <input type="text" placeholder="put your name here"/>
            </form>
        </section>
    )
}