import ContactForm from '../ContactForm';

const Contact = () => {
  return (
    <div
      id="contact"
      className="container mx-auto flex flex-col md:flex-row gap-10 xl:gap-40 pb-36 xl:pr-32"
    >
      <div className="flex flex-col gap-5 md:text-right">
        <h1 className="text-xl md:text-3xl">Contact Us</h1>
        <p className="text-5xl md:text-7xl 2xl:text-8xl font-bold md:font-black text-accent">
          We&apos;d love to hear from you!
        </p>
      </div>
      <div className="flex flex-col gap-10 2xl:w-full">
        <p className="text-xl">
          Send us a message, criticism or love, or a booking inquiry. We will
          answer at our earliest convenience!
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
