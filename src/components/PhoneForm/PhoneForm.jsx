import { Component } from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik } from 'formik';

import Button from 'components/Button/Button';
import { StyledInput } from '../Input/Input.styled';
import { FormLabel, StyledError, StyledForm } from './PhoneForm.styled';

let contactShema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Short name !!!')
    .max(50, 'Long name !!!')
    .required('Required'),
  number: yup.number().required('Requiered').positive().integer(),
});

class PhoneForm extends Component {
  static propTypes = {
    addNewContact: PropTypes.func.isRequired,
  };

  submitForm = (values, actions) => {
    this.props.addNewContact(values);
    actions.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.submitForm}
        validationSchema={contactShema}
      >
        <StyledForm>
          <FormLabel>
            Name
            <StyledInput
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <StyledError component="span" name="name" />
          </FormLabel>

          <FormLabel>
            Number
            <StyledInput
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <StyledError component="div" name="number" />
          </FormLabel>

          <Button type="submit" width={185}>
            Add contact
          </Button>
        </StyledForm>
      </Formik>
    );
  }
}

export default PhoneForm;




