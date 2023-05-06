import styles from "../../src/styles/contact.module.scss";
interface IContactInput {
  type: string;
  placeholder: string;
  name: string;
  text: string;
}
const ContactInput = ({ type, placeholder, name, text }) => (
  <label htmlFor="" className={styles.contact__form__label}>
    {" "}
    <span className={styles.contact__form__label__text}>{text}</span>
    <input
      className={styles.contact__form__label__input}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  </label>
);
export default ContactInput;
