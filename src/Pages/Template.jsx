import React from "react";
import { useSelector } from "react-redux";
import "./template.css";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import avatar from "../assets/images/bg-auth-dark.jpg"
import { useNavigate } from "react-router-dom";

function Template() {
  const navigate = useNavigate()
  const step1Response = useSelector((state) => state.step1Reducer);
  const step2Response = useSelector((state) => state.step2Reducer);
  const step3Response = useSelector((state) => state.step3Reducer);
  const step4Response = useSelector((state) => state.step4Reducer);
  const printDocument = () => {
    const input = document.getElementById("resume");
    html2canvas(input).then((canvas) => {
      let imgWidth = 208;
      let extraHeight = -25;
      let imgHeight = ((canvas.height * imgWidth) / canvas.width) + extraHeight ;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <div className="resume" id="resume">
        <div className="resume_left">
          <div className="resume_profile">
            <img src={avatar} alt="profile_pic" />
          </div>
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold">
                  {step1Response.first_name} {step1Response.middle_name}{" "}
                  {step1Response.last_name}
                </p>
                <p className="regular">
                  {step1Response.post}, {step2Response.age} <br />{" "}
                  {step1Response.gender}
                </p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fas fa-map-signs" />
                  </div>
                  <div className="data">{step2Response.address}</div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-mobile-alt" />
                  </div>
                  <div className="data">{step2Response.phone_no}</div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="data">{step2Response.email}</div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-skype" />
                  </div>
                  <div className="data">{step2Response.skype}</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">skill's</p>
              </div>
              <ul>
                <li>
                  <div className="skill_name">HTML</div>
                  <div className="skill_progress">
                    <span style={{ width: "80%" }} />
                  </div>
                  <div className="skill_per">80%</div>
                </li>
                <li>
                  <div className="skill_name">CSS</div>
                  <div className="skill_progress">
                    <span style={{ width: "70%" }} />
                  </div>
                  <div className="skill_per">70%</div>
                </li>
                <li>
                  <div className="skill_name">SASS</div>
                  <div className="skill_progress">
                    <span style={{ width: "90%" }} />
                  </div>
                  <div className="skill_per">90%</div>
                </li>
                <li>
                  <div className="skill_name">JS</div>
                  <div className="skill_progress">
                    <span style={{ width: "60%" }} />
                  </div>
                  <div className="skill_per">60%</div>
                </li>
                <li>
                  <div className="skill_name">JQUERY</div>
                  <div className="skill_progress">
                    <span style={{ width: "88%" }} />
                  </div>
                  <div className="skill_per">88%</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fab fa-facebook-square" />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Facebook</p>
                    <p>mihir@facebook</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-twitter-square" />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Twitter</p>
                    <p>mihir@twitter</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-youtube" />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Youtube</p>
                    <p>mihir@youtube</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-linkedin" />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Linkedin</p>
                    <p>mihir@linkedin</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title">
              <p className="bold">About us</p>
            </div>
            <p>{step2Response.about}</p>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold">Work Experience</p>
            </div>
            <ul>
              <li>
                <div className="date">{step3Response.duration}</div>
                <div className="info">
                  <p className="semi-bold">
                    {step3Response.agencyName}
                    <br /> {step3Response.role}
                  </p>
                  <p>{step3Response.aboutJOB}</p>
                </div>
              </li>
              {step3Response.duration2 && (
                <li>
                  <div className="date">{step3Response.duration2}</div>
                  <div className="info">
                    <p className="semi-bold">
                      {step3Response.agencyName2}
                      <br /> {step3Response.role2}
                    </p>
                    <p>{step3Response.aboutJOB}</p>
                  </div>
                </li>
              )}
              {step3Response.duration3 && (
                <li>
                  <div className="date">{step3Response.duration3}</div>
                  <div className="info">
                    <p className="semi-bold">
                      {step3Response.agencyName3}
                      <br /> {step3Response.role3}
                    </p>
                    <p>{step3Response.aboutJOB}</p>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="resume_item resume_education">
            <div className="title">
              <p className="bold">Education</p>
            </div>
            <ul>
              <li>
                <div className="date">{step4Response.Year}</div>
                <div className="info">
                  <p className="semi-bold">
                    {step4Response.agencyName} ({step4Response.UniversitySchool}
                    )
                  </p>
                  <p>{step4Response.aboutJOB}</p>
                </div>
              </li>
              {step4Response.Year2 && (
                <li>
                  <div className="date">{step4Response.Year2}</div>
                  <div className="info">
                    <p className="semi-bold">
                      {step4Response.agencyName2} (
                      {step4Response.UniversitySchool2})
                    </p>
                    <p>{step4Response.aboutJOB}</p>
                  </div>
                </li>
              )}
              {step4Response.Year3 && (
                <li>
                  <div className="date">{step4Response.Year3}</div>
                  <div className="info">
                    <p className="semi-bold">
                      {step4Response.agencyName3} (
                      {step4Response.UniversitySchool3})
                    </p>
                    <p>{step4Response.aboutJOB}</p>
                  </div>
                </li>
              )}
            </ul>
          </div>
          {/* <div className="resume_item resume_hobby">
          <div className="title">
            <p className="bold">Hobby</p>
          </div>
          <ul>
            <li>
              <i className="fas fa-book" />
            </li>
            <li>
              <i className="fas fa-gamepad" />
            </li>
            <li>
              <i className="fas fa-music" />
            </li>
            <li>
              <i className="fab fa-pagelines" />
            </li>
          </ul>
        </div> */}
        </div>
      </div>
      <i onClick={printDocument} className="fas fa-download downButton" />
      <i onClick={()=> navigate("/")} className="fas fa-home homeButton" />
    </>
  );
}

export default Template;
