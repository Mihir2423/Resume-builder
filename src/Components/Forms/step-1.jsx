import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { step1Action } from "../../redux/action/actions";

function Step1(props) {
  const dispatch = useDispatch();
  const initialValues = {
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    post: "",
    upload_file: "",
    file_name:""
  };
  const validateSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    middle_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    post: Yup.string().required("Required"),
  });
  const handleSubmit = (values) => {
    const finalData = {
      first_name: values.first_name,
      middle_name: values.middle_name,
      last_name: values.last_name,
      gender: values.gender,
      post: values.post,
      file_name:values.file_name,
      upload_file: values.upload_file,
    };
    dispatch(step1Action(finalData))
      alert("Details Saved successfully❤️");
      props.onClick()
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <div
          className={
            props.state === 1
              ? "tab-pane active  px-3 py-2"
              : "tab-pane px-3 py-2"
          }
          id="basictab1"
        >
          <div className="col-12 ">
            <h5 className="mt-0 bg-light p-2 mb-2">
              <i className="fa fa-info-circle me-1" />
              User Details
            </h5>

            {/* First Name  */}

            <Form>
              <div className="row">
                <div className="mb-2 col-md-4">
                  <label htmlFor="first_name" className="form-label">
                    First Name
                  </label>
                  <div className="input-group">
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Enter first name"
                      name="first_name"
                    />
                  </div>
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text text-danger ml-2"
                  />
                </div>


                {/* Middle Name */}


                <div className="mb-2 col-md-4">
                  <label htmlFor="middle_name" className="form-label">
                    Middle name
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter middle name"
                    name="middle_name"
                    required=""
                  />
                  <ErrorMessage
                    name="middle_name"
                    component="div"
                    className="text text-danger ml-2"
                  />
                </div>

                {/* Last Name  */}


                <div className="mb-2 col-md-4">
                  <label htmlFor="last_name" className="form-label">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter last name"
                    name="last_name"
                  />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text text-danger ml-2"
                  />
                </div>
              </div>


              {/* Gender */}


              <div className="row">
                <div className="mb-2 col-md-4">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <Field
                    as="select"
                    className="form-select"
                    name="gender"
                    id="gender"
                  >
                    <option value="">Select an option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text text-danger ml-2"
                  />
                </div>

                {/* Post */}


                <div className="mb-2 col-md-4">
                  <label htmlFor="post" className="form-label">
                    Post
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Skill that describes you"
                    name="post"
                  />
                  <ErrorMessage
                    name="post"
                    component="div"
                    className="text text-danger ml-2"
                  />
                </div>
              </div>
              <h5 className="mt-2 bg-light p-2 mb-2">
                <i className="fa fa-info-circle me-1" />
                Upload Documents
              </h5>


              {/* File Name */}


              <div className="row  d-flex align-items-end">
                <div className="col-md-4 mb-2">
                  <label htmlFor="file_name" className="form-label">
                    File Name
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Enter File Name"
                    name="file_name"
                  />
                </div>

                {/* IMAGE */}


                <div className="col-md-4 mb-2 ">
                  <label htmlFor="upload_file" className="form-label">
                    Upload your image
                  </label>
                  <Field
                    className="form-control"
                    type="file"
                    name="upload_file"
                    id="upload_file"
                    accept=".png, .jpg, .jpeg"
                  />
                </div>
              </div>
              <ul className="pager wizard mb-0 list-inline text-end mt-2">
                <li className="next list-inline-item">
                  <button type="submit" className="btn btn-success">
                    Add More Info <i className="mdi mdi-arrow-right ms-1" />
                  </button>
                </li>
              </ul>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default Step1;
