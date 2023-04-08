import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import { Appbar } from "@/components/Appbar/Appbar";

export default function Contact() {

    return (
        <>
            <Appbar/>
            <div className="bg-gray-800">
                <ContactForm/>
            </div>
            <Footer/>
        </>
    )
}