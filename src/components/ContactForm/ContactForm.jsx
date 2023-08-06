import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';

import css from './ContactForm.module.css';
import ValidateWarning from 'components/ValidateWarning';

export default function ContactForm({ handleSubmit }) {
  const initialValue = {
    name: '',
    number: '',
    id: '',
  };

  const schema = object({
    name: string().required(),
    number: number().required().positive().integer(),
  });

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage
            name="name"
            component={ValidateWarning}
            text="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
        <label className={css.label}>
          Number
          <Field
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage
            name="number"
            text="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            component={ValidateWarning}
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

// export default class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   addContact = evt => {
//     evt.preventDefault();
//     const { number, name } = this.state;
//     const data = {
//       id: number,
//       name: name,
//       number: number,
//     };
//     this.props.onSubmit(data);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   handleChange = evt => {
//     const { name, value } = evt.currentTarget;

//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={css.form} onSubmit={this.addContact}>
//         <label className={css.label}>
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label className={css.label}>
//           Number
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChange}
//             value={this.state.number}
//           />
//         </label>
//         <button type="submit" className={css.button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
