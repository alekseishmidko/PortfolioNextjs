import React, { MutableRefObject } from "react";
import ContactInput from "./ContactInput";
import styles from "../../src/styles/contact.module.scss";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";

const ContactForm = () => {
  const [acceptWithRules, setAcceptWithRules] = React.useState(false);
  const toggleAcceptWithRules = () => {
    setAcceptWithRules(!acceptWithRules);
  };
  const [spinner, setSpinner] = React.useState(false);
  const formRef = React.useRef() as MutableRefObject<HTMLFormElement>;
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setSpinner(true);
    e.preventDefault();
    // 1-service id;2-template id; 4-api public key;
    emailjs
      .sendForm(
        "service_nef2hq9",
        "template_mnx5v3e ",
        formRef.current,
        "7jhF1aZHv0e_gNOe6"
      )
      .then(
        (result) => {
          setSpinner(false);
          toast(`Данные отправлены ${result.text}`);
        },
        (error) => {
          setSpinner(false);
          toast.error(`Данные отправлены ${error.text}`);
        }
      );
    formRef.current.reset();
  };
  return (
    <form className={styles.contact__form} ref={formRef} onSubmit={sendEmail}>
      <ContactInput
        text="Ф.И.О.*"
        placeholder="Укажите ваши Ф.И.О."
        type="text"
        name="fullName"
      />
      <ContactInput
        text="Должность/компания"
        placeholder="Укажите вашу должность/компанию"
        type="text"
        name="company"
      />
      <ContactInput
        text="E-mail*"
        placeholder="Укажите ваш E-mail"
        type="email"
        name="email"
      />
      <ContactInput
        text="Телефон*"
        placeholder="Укажите ваш телефон"
        type="tel"
        name="phone"
      />
      <button className={styles.contact__form__btn} disabled={!acceptWithRules}>
        {spinner ? <PropagateLoader color="#fff" /> : "Отправить заявку"}
      </button>
      <label className={styles.contact__checkbox}>
        <input
          className={styles.contact__checkbox__input}
          type="checkbox"
          onChange={toggleAcceptWithRules}
        />
        <span className={styles.contact__checkbox__span} />
        <span className={styles.contact__checkbox__text}>
          Нажимая на кнопку «Отправить заявку», я соглашаюсь с{" "}
          <Link href="/privacy-policy" passHref legacyBehavior>
            <a className={styles.contact__checkbox__link}>
              Политикой конфиденциальности
            </a>
          </Link>{" "}
          и даю{" "}
          <Link legacyBehavior href="/personal-data-of-clients" passHref>
            <a className={styles.contact__checkbox__link}>
              Согласие на обработку персональных данных.
            </a>
          </Link>
        </span>
      </label>
    </form>
  );
};

export default ContactForm;
