export function Contact(){

    return(
        <form className='contact-form'>

            <input type="text" for="name" name="name" placeholder='Your name'/>

            <input type="email" for="email" name="email"placeholder='Your email address'/>

            <textarea id="message" name="mesage" placeholder='Your message'>

            </textarea>
            <input type="submit" value='Submit'/>

        </form>
    )
}