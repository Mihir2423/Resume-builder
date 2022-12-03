import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { step3Action } from "../../redux/action/actions";
import { useDispatch } from "react-redux";
function Step3(props) {
  const dispatch = useDispatch();
  const initialValues = {
    role: "",
    agencyName: "",
    duration: "",
    aboutJOB: "",
    role2: "",
    agencyName2: "",
    duration2: "",
    aboutJOB2: "",
    role3: "",
    agencyName3: "",
    duration3: "",
    aboutJOB3: "",
  };
  const validateSchema = Yup.object({
    role: Yup.string().required("Required"),
    agencyName: Yup.string().required("Required"),
    duration: Yup.string().required("Required"),
    aboutJOB: Yup.string().required("Required"),
  });
  const handleSubmit = (values) => {
    const finalData = {
      role: values.role,
      agencyName: values.agencyName,
      duration: values.duration,
      aboutJOB: values.aboutJOB,
      role2: values.role2,
      agencyName2: values.agencyName2,
      duration2: values.duration2,
      role3: values.role3,
      agencyName3: values.agencyName3,
      duration3: values.duration3,
    };
    dispatch(step3Action(finalData));
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
          props.state === 3 ? "tab-pane active px-3 py-2" : "tab-pane px-3 py-2"
        }
        id="basictab3"
      >
        <Form>
          <h5 className="mt-0 bg-light p-2 mb-2">
            <i className="fa fa-info-circle me-1" />
            Work Experience 1
          </h5>
          <div className="row">
            <div className="mb-2 col-md-4">
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <div className="input-group">
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter your role"
                  name="role"
                />
              </div>
              <ErrorMessage
                name="role"
                component="div"
                className="text text-danger ml-2"
              />
            </div>
            <div className="mb-2 col-md-4">
              <label htmlFor="agencyName" className="form-label">
                Agency Name
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter agency name"
                name="agencyName"
              />
              <ErrorMessage
                name="agencyName"
                component="div"
                className="text text-danger ml-2"
              />
            </div>
            <div className="mb-2 col-md-4">
              <label htmlFor="duration" className="form-label">
                Duration
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter duration"
                name="duration"
              />
              <ErrorMessage
                name="duration"
                component="div"
                className="text text-danger ml-2"
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-2 col-12">
              <label htmlFor="aboutJOB" className="form-label">
                About Experience
              </label>
              <Field type="text" className="form-control" name="aboutJOB" />
            </div>
            <ErrorMessage
              name="aboutJOB"
              component="div"
              className="text text-danger ml-2"
            />
          </div>
          <h5 className="mt-0 bg-light p-2 mb-2">
            <i className="fa fa-info-circle me-1" />
            Work Experience 2
          </h5>
          <div className="row">
            <div className="mb-2 col-md-4">
              <label htmlFor="role2" className="form-label">
                Role
              </label>
              <div className="input-group">
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter your role"
                  name="role2"
                />
              </div>
            </div>
            <div className="mb-2 col-md-4">
              <label htmlFor="agencyName2" className="form-label">
                Agency Name
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter agency name"
                name="agencyName2"
              />
            </div>
            <div className="mb-2 col-md-4">
              <label htmlFor="duration2" className="form-label">
                Duration
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter duration"
                name="duration2"
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-2 col-12">
              <label htmlFor="aboutJOB2" className="form-label">
                About Experience
              </label>
              <Field type="text" className="form-control" name="aboutJOB2" />
            </div>
          </div>
          <h5 className="mt-0 bg-light p-2 mb-2">
            <i className="fa fa-info-circle me-1" />
            Work Experience 3
          </h5>
          <div className="row">
            <div className="mb-2 col-md-4">
              <label htmlFor="role3" className="form-label">
                Role
              </label>
              <div className="input-group">
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter your role"
                  name="role3"
                />
              </div>
            </div>
            <div className="mb-2 col-md-4">
              <label htmlFor="agencyName3" className="form-label">
                Agency Name
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter agency name"
                name="agencyName3"
              />
            </div>
            <div className="mb-2 col-md-4">
              <label htmlFor="duration3" className="form-label">
                Duration
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter duration"
                name="duration3"
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-2 col-12">
              <label htmlFor="aboutJOB3" className="form-label">
                About Experience
              </label>
              <Field type="text" className="form-control" name="aboutJOB3" />
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

export default Step3;
