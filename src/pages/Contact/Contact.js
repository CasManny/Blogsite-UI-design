import './contact.css'

const Contact = () => {
    return (
        <div className="contactContainer">
            <div className="contactWrapper">
                <form action="" className="contactForm">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Chukwu sabatine' />
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Chukwusabastine@018@gmail.com' />
                    <label htmlFor="">Your Message</label>
                    <textarea placeholder='Your message...'></textarea>

                    <button className="contactSubmitBtn">Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;