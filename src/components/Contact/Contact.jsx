import DesingBiv from "../DesingBiv/DesingBiv";
import ContactForm from "./ContactForm";

export default function Contact() {

    return (
        <DesingBiv size={["90%",'auto']}  title='Contact'>
            <div>
                <ContactForm />
            </div>
        </DesingBiv>
        
    )
}