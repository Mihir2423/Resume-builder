import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { step2Action } from "../../redux/action/actions";
function Step2(props) {
  const dispatch = useDispatch();
  const initialValues = {
    about: "",
    age: "",
    email: "",
    phone_no: "",
    skype: "",
    address: "",
  };
  const validateSchema = Yup.object({
    about: Yup.string().required("Required"),
    age: Yup.number().required("Required"),
    address: Yup.string().required("Required"),
    phone_no: Yup.number().required(),
    email: Yup.string().email("Enter a valid email").required("Required"),
    skype: Yup.string().email("Enter a valid email").required("Required"),
  });
  const handleSubmit = (values) => {
    const finalData = {
      about: values?.about,
      age: values?.age,
      email: values?.email,
      phone_no: values?.phone_no,
      skype: values?.skype,
      address: values?.address,
    };
    dispatch(step2Action(finalData));
    alert("Details Saved successfully❤️");
    props.onClick();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={handleSubmit}
    >
      <div
        className={
          props.state === 2 ? "tab-pane active px-3 py-2" : "tab-pane px-3 py-2"
        }
        id="basictab2"
      >
        <Form>
          <h5 className="mt-0 bg-light p-2 mb-2">
            <i className="fa fa-info-circle me-1" />
            About You
          </h5>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="mb-2 col-12">
                  <label htmlFor="about" className="form-label">
                    About Yourself
                  </label>
                  <Field type="text" className="form-control" name="about" />
                </div>
                <ErrorMessage
                  name="about"
                  component="div"
                  className="text text-danger ml-2"
                />
              </div>
            </div>
          </div>
          <h5 className="mt-0 bg-light p-2 mb-2">
            <i className="fa fa-info-circle me-1" />
            Bio
          </h5>
          <div className="row">
            <div className="mb-2 col-md-4">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <div className="input-group">
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter your age"
                  name="age"
                />
              </div>
              <ErrorMessage
                name="age"
                component="div"
                className="text text-danger ml-2"
              />
            </div>
            <div className="mb-2 col-md-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                type="email"
                className="form-control"
                placeholder="Enter email id"
                name="email"
              />
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="text text-danger ml-2"
            />
            <div className="mb-2 col-md-4">
              <label htmlFor="phone_no" className="form-label">
                Phone no.
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter your phone no."
                name="phone_no"
              />
            </div>
            <ErrorMessage
              name="phone_no"
              component="div"
              className="text text-danger ml-2"
            />
          </div>
          <div className="row">
            <div className="mb-2 col-md-4">
              <label htmlFor="skype" className="form-label">
                Skype
              </label>
              <div className="input-group">
                <Field
                  type="email"
                  className="form-control"
                  placeholder="Enter your skype id"
                  name="skype"
                />
              </div>
              <ErrorMessage
                name="skype"
                component="div"
                className="text text-danger ml-2"
              />
            </div>
            <div className="mb-2 col-md-8">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <div className="input-group">
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter your address"
                  name="address"
                />
              </div>
              <ErrorMessage
                name="address"
                component="div"
                className="text text-danger ml-2"
              />
            </div>
          </div>
          <ul className="pager wizard mb-0 list-inline mt-2">
            <li className="previous list-inline-item">
              <button
                type="button"
                className="btn btn-light"
                onClick={props.onClick2}
              >
                <i className="mdi mdi-arrow-left me-1" /> Back to Account
              </button>
            </li>
            <li className="next list-inline-item float-end">
              <button type="submit" className="btn btn-success">
                Add More Info <i className="mdi mdi-arrow-right ms-1" />
              </button>
            </li>
          </ul>
        </Form>
      </div>
    </Formik>
  );
}

export default Step2;
