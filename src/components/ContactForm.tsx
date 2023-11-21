import { FiSend } from 'react-icons/fi';
import FormInputComponent from './FormInputComponent';
import FormTextArea from './FormTextArea';
import validator from 'validator';
import { toast } from 'react-toastify';
import {
  handleChange,
  sendEmail,
} from '../redux/features/contact/contactSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

const ContactForm = () => {
  const { email, name, subject, message } = useAppSelector(
    (state: RootState) => state.contact
  );

  const dispatch = useAppDispatch();
  const handleChanges = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !name.trim() || !subject.trim() || !message.trim()) {
      return toast.error('Please provide email, name, subject and message');
    }
    if (!validator.isEmail(email)) {
      return toast.error('Please provide a valid email');
    }
    if (subject.length < 5) {
      return toast.error('Subject must be at least 5 characters long');
    }
    if (message.length < 10) {
      return toast.error('Message must be at least 10 characters long');
    }

    dispatch(sendEmail({ email, name, subject, message }));
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-input-group">
        <FormInputComponent
          handleChange={handleChanges}
          name="name"
          type="text"
          placeholder="Your Name"
          value={name}
        />

        <FormInputComponent
          handleChange={handleChanges}
          name="email"
          type="email"
          placeholder="Your Email"
          value={email}
        />

        <FormInputComponent
          handleChange={handleChanges}
          name="subject"
          type="text"
          placeholder="Your Subject"
          value={subject}
        />
      </div>
      <FormTextArea
        value={message}
        handleChange={handleChanges}
        placeholder="Your Message"
        name="message"
      />
      <button type="submit" className="button">
        Send Message
        <span className="button-icon contact-button-icon">
          <FiSend />
        </span>
      </button>
    </form>
  );
};
export default ContactForm;
