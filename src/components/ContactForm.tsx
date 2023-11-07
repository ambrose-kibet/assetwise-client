import { FiSend } from 'react-icons/fi';
import FormInputComponent from './FormInputComponent';
import FormTextArea from './FormTextArea';
import validator from 'validator';
import { toast } from 'react-toastify';
import {
  handleChange,
  resetForm,
} from '../redux/features/contact/contactSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';

const ContactForm = () => {
  const { email, name, subject, message } = useAppSelector(
    (state: RootState) => state.contact
  );

  const dispatch = useAppDispatch();
  const handleChanges = ({ name, value }: { name: string; value: string }) => {
    dispatch(handleChange({ name, value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !name || !subject || !message) {
      return toast.error('Please provide email, name, subject and message');
    }
    if (!validator.isEmail(email)) {
      return toast.error('Please provide a valid email');
    }
    try {
      const response = await fetch('/.netlify/functions/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await response.json();

      console.log(data);
      toast.success('Message Sent Succesfully');
      resetForm();
    } catch (error) {
      console.log(error);
      toast.error('Could not send message');
    }
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
