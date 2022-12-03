import React, { useState } from "react";
import Step1 from "../Components/Forms/step-1";
import Step2 from "../Components/Forms/step-2";
import Step3 from "../Components/Forms/step-3";
import Step4 from "../Components/Forms/step-4";
import Step5 from "../Components/Forms/step-5";
import Header from "../Components/MainPage/Header";

export default function ResumePage() {
  const [state, setState] = useState(1);
  function nextState() {
    return setState(state + 1);
  }
  function prevState() {
    return setState(state - 1);
  }

  return (
    <>
    <Header/>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="ipseityform">
                      <div id="basicwizard" className="d-flex">
                        <div className="col-md-3">
                          <div className="right-conatainer">
                            <div id="sticky-anchor" />
                            <div className="sidebar-item">
                              <ul
                                className="nav d-flex flex-column form-wizard-header w-20 mb-4"
                                id="list-example"
                              >
                                <li
                                  className="nav-item"
                                >
                                  <a
                                    href="#basictab1"
                                    data-bs-toggle="tab"
                                    data-toggle="tab"
                                    className={
                                      state === 1
                                        ? "nav-link active"
                                        : "nav-link"
                                    }
                                  >
                                    <span className="number">1</span>
                                    <span className="d-none d-sm-inline">
                                      User Details
                                    </span>
                                  </a>
                                </li>
                                <li
                                  className="nav-item"
                                >
                                  <a
                                    href="#basictab2"
                                    data-bs-toggle="tab"
                                    data-toggle="tab"
                                    className={
                                      state === 2
                                        ? "nav-link active"
                                        : "nav-link"
                                    }
                                  >
                                    <span className="number">2</span>
                                    <span className="d-none d-sm-inline">
                                      About User
                                    </span>
                                  </a>
                                </li>
                                <li
                                  className="nav-item"
                                >
                                  <a
                                    href="#basictab3"
                                    data-bs-toggle="tab"
                                    data-toggle="tab"
                                    className={
                                      state === 3
                                        ? "nav-link active"
                                        : "nav-link"
                                    }
                                  >
                                    <span className="number">3</span>
                                    <span className="d-none d-sm-inline">
                                      Work Experience
                                    </span>
                                  </a>
                                </li>
                                <li
                                  className="nav-item"
                                >
                                  <a
                                    href="#basictab4"
                                    data-bs-toggle="tab"
                                    data-toggle="tab"
                                    className={
                                      state === 4
                                        ? "nav-link active"
                                        : "nav-link"
                                    }
                                  >
                                    <span className="number">4</span>
                                    <span className="d-none d-sm-inline">
                                      Education
                                    </span>
                                  </a>
                                </li>
                                <li
                                  className="nav-item"
                                >
                                  <a
                                    href="#basictab5"
                                    data-bs-toggle="tab"
                                    data-toggle="tab"
                                    className={
                                      state === 5
                                        ? "nav-link active"
                                        : "nav-link"
                                    }
                                  >
                                    <span className="number">5</span>
                                    <span className="d-none d-sm-inline">
                                      Final
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div className="tab-content pt-0 ">
                            <Step1 state={state} onClick={nextState} />
                            <Step2
                              state={state}
                              onClick={nextState}
                              onClick2={prevState}
                            />
                            <Step3
                              state={state}
                              onClick={nextState}
                              onClick2={prevState}
                            />

                            <Step4
                              state={state}
                              onClick={nextState}
                              onClick2={prevState}
                            />
                            <Step5
                              state={state}
                              onClick={nextState}
                              onClick2={prevState}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
