import React from "react"
import { Formik, Form, Field } from 'formik'
import "./contact.css"

export default () => (
  <Formik
    initialValues={{
      picked: '',
      message: ''
    }}
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }}
  >
  {() => (
    <Form className="contact-container">
      <label htmlFor="message"> Hi! Please type your requste and we will come back to you as soon as possible! </label>
      <br /><br />
      <Field name="message" component="textarea" rows="7" cols="80" placeholder="Type your message here..." />

        <br /><br /><br />

        <h5>Choose how you want us to cantact you back:</h5>
        <label>
            <Field type="radio" name="picked" value="Email" />
            Email
        </label><br /><br />
        <label>
            <Field type="radio" name="picked" value="Phone" />
            Phone
        </label><br /><br />
        <label>
            <Field type="radio" name="picked" value="Doar-Israel" />
            Doar Israel
        </label><br /><br />
        <label>
            <Field type="radio" name="picked" value="Homing-pigeon" />
            Homing pigeon
        </label><br /><br />

          
        <button class="custom-btn btn-3"><span>Read More</span></button>

    </Form>
  )}
  </Formik>
)