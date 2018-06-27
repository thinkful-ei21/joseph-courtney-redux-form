import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, notEmpty, isFiveCharLong, isNumber} from '../validators';
import Input from './Input';

export class DeliveryForm extends React.Component {

  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div>
        <h1>Report a problem with your delivery</h1>
        <form
          onSubmit={this.props.handleSubmit(values => 
            this.onSubmit(values)
          )}
        >

          <label htmlFor="tracking-number">Tracking Number</label>
          <Field 
            name="tracking-number"
            id="tracking-number"
            type="text"
            component={Input}
            validate={[required, notEmpty, isFiveCharLong, isNumber]}
          />

          <label htmlFor="issue">What is your issue?</label>
          <Field 
            name="issue" 
            id="issue" 
            component={Input}
          >
              <option value="My delivery hasn't arrived">My delivery hasn't arrived</option>
              <option value="The wrong item was delivered">The wrong item was delivered</option>
              <option value="Part of my order was missing">Part of my order was missing</option>
              <option value="Some of my order arrived damaged">Some of my order arrived damaged</option>
              <option value="Other (Give more details below)">Other (Give more details below)</option>
          </Field>
          
          <label htmlFor="details">Give more details (optional)</label>
          <Field 
            name="details"
            id="details"
            type="text"
            component={Input}
            element="textarea"
          />

          <button type="submit">
            Submit
          </button>

        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'delivery'
})(DeliveryForm);