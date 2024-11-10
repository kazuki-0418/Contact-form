import "./ContactForm.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "./schema";
import toast from "react-hot-toast";
import checkIcon from "../assets/check_circle.svg";

function ContactForm() {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    // resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: false,
    },
  });

  const { register, handleSubmit, formState } = methods;
  const { errors } = formState;

  const onSubmit = () => {
    return toast.custom((t) => (
      <div className="toast-message-sent">
        <div className="message-title">
          <img src={checkIcon} alt="" width={20} height={20} />
          <h3>Message Sent!</h3>
        </div>
        <div className="message-content">
          <p>Thanks for completing the form. We’ll be in touch soon!</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Contact Us</h2>

        <div className="name-fields">
          <div className="name-label">
            <label>
              First Name <span className="required">*</span>
              <input
                type="text"
                {...register("firstName")}
                style={{
                  borderColor: errors.email ? "red" : "#ddd",
                }}
              />
              {errors.firstName && (
                <span className="error-message">
                  {errors.firstName.message}
                </span>
              )}
            </label>
          </div>

          <div className="name-label">
            <label>
              Last Name <span className="required">*</span>
              <input
                type="text"
                {...register("lastName")}
                style={{
                  borderColor: errors.email ? "red" : "#ddd",
                }}
              />
              {errors.lastName && (
                <span className="error-message">{errors.lastName.message}</span>
              )}
            </label>
          </div>
        </div>

        <label>
          Email Address <span className="required">*</span>
          <input
            type="email"
            {...register("email")}
            style={{
              borderColor: errors.email ? "red" : "#ddd",
            }}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </label>

        <label>
          Query Type <span className="required">*</span>
          <div className="radio-group">
            <label className="radio-box">
              <input
                type="radio"
                value="General Enquiry"
                {...register("queryType")}
              />
              <span>General Enquiry</span>
            </label>
            <label className="radio-box">
              <input
                type="radio"
                value="Support Request"
                {...register("queryType")}
              />
              <span>Support Request</span>
            </label>
          </div>
          {errors.queryType && (
            <span className="error-message">{errors.queryType.message}</span>
          )}
        </label>

        <label>
          Message <span className="required">*</span>
          <textarea
            {...register("message")}
            style={{
              borderColor: errors.email ? "red" : "#ddd",
            }}
          ></textarea>
          {errors.message && (
            <span className="error-message">{errors.message.message}</span>
          )}
        </label>

        <label htmlFor="">
          <label className="consent-checkbox">
            <input type="checkbox" {...register("consent")} />
            <span>I consent to being contacted by the team </span>
            <span className="required">*</span>
          </label>
          {errors.consent && (
            <span className="error-message">{errors.consent.message}</span>
          )}
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
