import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required} from '../validators';

export class DeliveryForm extends React.Component {

  render() {
    return (
      <div>
        <h1>Report a problem with your delivery</h1>
        <form>

          <label htmlFor="tracking-number">Tracking Number</label>
          <Field 
            name="tracking-number"
            id="tracking-number"
            type="number"
            component="input"
            validate={[required]}
          />

          <label htmlFor="issue">What is your issue?</label>
          <Field name="issue" id="issue" component="select">
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
            component="textarea"
          />

          <button type="submit">Submit</button>

        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'delivery'
})(DeliveryForm);