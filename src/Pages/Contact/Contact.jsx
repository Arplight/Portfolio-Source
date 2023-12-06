import ContactComponent from "../../Components/Sub_Components/Contact_Component/ContactComponent";
import Seo from "../../Components/Sub_Components/SEO/Seo";

export default function Contact() {
  return (
    <div className="contact">
      <Seo title="Contact | Portfolio" url="/Contact" />

      <ContactComponent />
    </div>
  );
}
