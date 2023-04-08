
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";

const ContactForm = () => {

const [state, handleSubmit] = useForm("mayzlywo");

if (state.succeeded) {
    return(
      <>
        <div className='w-full h-auto py-10'>
          <div className='mx-auto py-4 max-w-lg bg-green-500 text-white px-4 text-center'>
            Su mensaje ha sido enviado, gracias por ponerte en contacto con nosotros.
          </div>
        </div>
      </>
    );
}

return (
  <>
    <div className="flex flex-col justify-center items-center justify-items-center gap-5 w-full">
        <h3 className='font-bold text-2xl '>
          Contacto 
        </h3>
        <h3 className="w-[80%] text-center">
            Para obtener más información acerca de cómo podemos trabajar juntos en el desarrollo de tu sitio web o aplicación, simplemente completa tus datos de contacto y nos pondremos en contacto contigo en breve.
        </h3>
    </div>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto py-16 px-4">
      <div className='mb-4'>
        <label htmlFor="email"  className="block font-bold mb-2">
          Correo Electronico
        </label>
        <input
          id="email"
          type="email" 
          name="email"       
          placeholder="ejemplo: correo@ecoparque.com"   
          className="w-full p-2 border border-gray-400 rounded-md"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div className='mb-4'>
        <label htmlFor="name"  className="block font-bold mb-2">
          Nombre Completo
        </label>
        <input
          id="name"
          type="name" 
          name="name"       
          placeholder="ejemplo: Jhon Doe"   
          className="w-full p-2 border border-gray-400 rounded-md"
        />
        <ValidationError 
          prefix="name" 
          field="name"
          errors={state.errors}
        />
      </div>
      <div className='mb-4'>
        <label htmlFor="phone"  className="block font-bold mb-2">
          Telefono De Contacto
        </label>
        <input
          id="phone"
          type="phone" 
          name="phone"       
          placeholder="ejemplo: 57 3019999999"   
          className="w-full p-2 border border-gray-400 rounded-md"
        />
        <ValidationError 
          prefix="phone" 
          field="phone"
          errors={state.errors}
        />
      </div>
      <div className='mb-4'>
        <label htmlFor="subject"  className="block font-bold mb-2">
          Asunto
        </label>
        <input
          id="subject"
          type="subject" 
          name="subject"       
          placeholder="Asunto de su solicitud"
          className="w-full p-2 border border-gray-400 rounded-md"
        />
        <ValidationError 
          prefix="subject" 
          field="subject"
          errors={state.errors}
        />
      </div>
      <div className='mb-4'>
        <label htmlFor="message"  className="block font-bold mb-2">
          Descripción del software:
        </label>
        <textarea
          id="message"
          type="message" 
          name="message"
          rows="5"  
          placeholder="Objetivo de su solicitud"
          className="w-full p-2 border border-gray-400 rounded-md"
        ></textarea>
        <ValidationError 
          prefix="message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <button type="submit" disabled={state.submitting} className='bg-green-600 w-full text-white py-2 px-4 rounded-md hover:bg-green-700'>
        Enviar
      </button>
    </form>
  </>
);
};

export default ContactForm;





