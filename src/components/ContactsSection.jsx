import ContactForm from "./ContactForm";
function ContactSection() {
  return (
    <section id="contact-section" className="container d-flex justify-content-center">
      <div className="row w-100 row-cols-1 row-cols-lg-2">
        <div className="col">Contact us</div>
        <div className="col">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
