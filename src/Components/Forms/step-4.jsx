import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { step4Action } from "../../redux/action/actions";

function Step4(props) {
  const dispatch = useDispatch();
  const initialValues = {
    UniversitySchool: "",
    agencyName: "",
    Year: "",
    aboutJOB: "",
    UniversitySchool2: "",
    agencyName2: "",
    Year2: "",
    aboutJOB2: "",
    UniversitySchool3: "",
    agencyName3: "",
    Year3: "",
    aboutJOB3: "",
  };
  const validateSchema = Yup.object({
    UniversitySchool: Yup.string().required("Required"),
    agencyName: Yup.string().required("Required"),
    Year: Yup.string().required("Required"),
    aboutJOB: Yup.string().required("Required"),
  });
  const handleSubmit = (values) => {
    const finalData = {
      UniversitySchool: values.UniversitySchool,
      agencyName: values.agencyName,
      Year: values.Year,
      aboutJOB: values.aboutJOB,
      UniversitySchool2: values.UniversitySchool2,
      agencyName2: values.agencyName2,
      Year2: values.Year2,
      UniversitySchool3: values.UniversitySchool3,
      agencyName3: values.agencyName3,
      Year3: values.Year3,
    };
    dispatch(step4Action(finalData));
    alert("Details Saved successfully❤️");
    props.onClick();
  };
  return (
    <Formik initialValues={initialValues}
    validationSchema={validateSchema}
    onSubmit={handleSubmit}>
      <div
        className={
          props.state === 4 ? "tab-pane active px-3 py-2" : "tab-pane px-3 py-2"
        }
        id="basictab4"
      >
        <Form>
          <h5 className="mt-0 bg-light p-2 mb-2">
            <i className="fa fa-info-circle me-1" />
            Education 1
          </h5>
          <div className="row">
            <div className="mb-2 col-md-4">
              <label htmlFor="UniversitySchool" className="form-label">
                University / School
              </label>
              <div className="input-group">
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter your University / School"
                  name="UniversitySchool"
                />
              </div>
              <ErrorMessage
                name="UniversitySchool"
                component="div"
                className="text text-danger ml-2"
              />
            </div>
            <div className="mb-2 col-md-4">
              <label htmlFor="agencyName" className="form-label">
                Degree
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter Degree"
                name="agencyName"
              />
            <ErrorMessage
                name="agencyName"
                component="div"
                className="text text-danger ml-2"
              />
            </div>
            <div className="mb-2 col-md-4">
              <label htmlFor="Year" className="form-label">
                Year
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter Year"
                name="Year"
              />
            <ErrorMessage
                name="Year"
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
            <ErrorMessage
              name="aboutJOB"
              component="div"
              className="text text-danger ml-2"
            />
            </div>
          </div>
          <h5 className="mt-0 bg-light p-2 mb-2">
            <i className="fa fa-info-circle me-1" />
            Education 2
          </h5>
          <div className="row">
            <div className="mb-2 col-md-4">
              <label htmlFor="UniversitySchool2" className="form-label">
                University / School
              </label>
              <div className="input-group">
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter your University / School"
                  name="UniversitySchool2"
                />
              </div>
            </div>
            <div className="mb-2 col-md-4">
              <label htmlFor="agencyName2" className="form-label">
                Degree
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter Degree"
                name="agencyName2"
              />
            </div>
            <div className="mb-2 col-md-4">
              <label htmlFor="Year2" className="form-label">
                Year
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter Year"
                name="Year2"
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
            Education 3
          </h5>
          <div className="row">
            <div className="mb-2 col-md-4">
              <label htmlFor="UniversitySchool3" className="form-label">
                University / School
              </label>
              <div className="input-group">
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Enter your University / School"
                  name="UniversitySchool3"
                />
              </div>
            </div>
            <div className="mb-2 col-md-4">
              <label htmlFor="agencyName3" className="form-label">
                Degree
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter Degree"
                name="agencyName3"
              />
            </div>
            <div className="mb-2 col-md-4">
              <label htmlFor="Year3" className="form-label">
                Year
              </label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter Year"
                name="Year3"
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
  )
}

export default Step4
