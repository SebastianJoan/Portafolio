import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import { Appbar } from "@/components/Appbar/Appbar";
import Head from "next/head";

export default function Contact() {

    return (
        <>  
            <main>
                <Head>
                    <link rel="shortcut icon" href="../imgs/avatar.jpg" />
                    <title> Joan Sebastian Giraldo Morales  </title>
                    <meta name="description" content="
                        I'm a Systems engineer, Full Stack Web Developer from Colombia. I am currently working as a freelancer in different projects, both for myself and for some clients."
                    />
                </Head>
                <Appbar/>
                <div className="bg-gray-800">
                    <ContactForm/>
                </div>
                <Footer/>
            </main>
        </>
    )
}