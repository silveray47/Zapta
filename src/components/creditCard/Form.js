import React, { useRef, useState } from "react";
import CreditCard from "./CreditCard";
import { Formik } from "formik";
import * as yup from "yup";
import "./Form.scss";

const CardForm = props => {
  const [element, setElement] = useState();
  const [number, setNumber] = useState();
  const cvvInput = useRef();
  const handleTransition = (cardInner, numberItem) => {
    setElement(cardInner);
    setNumber(numberItem);
  };
  const turnFront = () => {
    element.current.classList.remove("cardInnerTransform");
  };
  const turnBack = () => {
    element.current.classList.add("cardInnerTransform");
  };
  const getSchema = () =>
    yup.object().shape({
      cardNumber: yup.string().min(16, "not less than 16"),
      cardHolder: yup.string().required(),
      cardMonth: yup.string().required()
    });

  return (
    <div>
      <Formik
        initialValues={{
          cardNumber: "",
          cardHolder: "",
          cardMonth: "",
          cardYear: "",
          cvv: ""
        }}
        onSubmit={(values, formikBag) => {
          alert(JSON.stringify(values, null, 2));
          formikBag.resetForm();
        }}
        validationSchema={getSchema()}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            {" "}
            <CreditCard
              values={props.values}
              handleTransition={handleTransition}
            />
            <div className="form">
              <label className="label">Card Number</label>
              <input
                type="text"
                onChange={props.handleChange}
                onClick={turnFront}
                onBlur={props.handleBlur}
                value={props.values.cardNumber
                  .replace(/\s/g, "")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim()}
                name="cardNumber"
                maxLength="19"
                onKeyDown={e => {
                  console.log(e.which);
                  if (e.which !== "#")
                    number.current.classList.add("numberTransform");
                }}
              />
              <label className="label">Card Holder</label>
              <input
                type="text"
                onChange={props.handleChange}
                onClick={turnFront}
                onBlur={props.handleBlur}
                value={props.values.cardHolder}
                name="cardHolder"
              />
              <div className="row">
                <div className="column">
                  <label className="label">Expiration Date</label>
                  <div>
                    <select
                      type="text"
                      onChange={props.handleChange}
                      onClick={turnFront}
                      onBlur={props.handleBlur}
                      value={props.values.cardMonth}
                      placeholder="Month"
                      name="cardMonth"
                    >
                      <option value="" disabled defaultValue>
                        Month
                      </option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m, i) => (
                        <option key={i} value={m}>{m < 10 ? `0${m}` : m}</option>
                      ))}
                    </select>

                    <select
                      type="text"
                      onChange={props.handleChange}
                      onClick={turnFront}
                      onBlur={props.handleBlur}
                      value={props.values.cardMonth}
                      name="cardYear"
                    >
                      <option value="" disabled defaultValue>
                        Year
                      </option>
                      {[
                        2020,
                        2021,
                        2023,
                        2024,
                        2025,
                        2026,
                        2027,
                        2028,
                        2029,
                        2030,
                        2031,
                        2032
                      ].map((y, i) => (
                        <option key={i} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                </div>{" "}
                <div className="column">
                  <label className="label">CVV</label>
                  <input
                    type="text"
                    ref={cvvInput}
                    onClick={turnBack}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.cvv}
                    name="cvv"
                  />
                </div>
              </div>
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              <button type="submit" disabled={!props.isValid}>
                Submit
              </button>
            </div>
            {/* <pre>{JSON.stringify(props.values, null, 2)}</pre> */}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CardForm;
