// src/FacultyAdvisorForm.js
import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './index.css';

const Form = () => {
  const [formData, setFormData] = useState({
    clubName: '',
    appliedDate: '',
    natureOfClub: '',
    positionAppliedFor: '',
    facultyName: '',
    email: '',
    mobileNumber: '',
    designation: '',
    experience: '',
    specialization: '',
    achievements: '',
    vision: '',
    flagshipEvent: '',
    nomination: '',
    nominatedBy: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePdf();
  };

  const generatePdf = async () => {
    const input = document.getElementById('form-content');
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('fillable_form.pdf');
  };
  return (
    <div id="form-container">
      <header>
        <img src="path/to/university-logo.png" alt="University Logo" />
        <div>
          <h1>Chandigarh University</h1>
          <p>Pro-Vice Chancellor Academic Affairs</p>
        </div>
        <img src="path/to/pro-vc-logo.png" alt="Pro-VC Logo" />
      </header>
  
      <div className="red-border"></div>
  
      <form id="form-content" onSubmit={handleSubmit}>
        <h2>Club Faculty/Co-Faculty Advisor: Application Form</h2>
        
        <h3>General Points:</h3>
        <ul>
          <li>Faculty Advisor: Must have a minimum of 1-year experience in Chandigarh University (Ph.D not required).</li>
          <li>Faculty Co-Advisor: Any fresher who has recently joined Chandigarh University (Ph.D not required).</li>
          <li>Required Documents: Updated Resume, Achievement proofs, Coordinator-ship proofs, etc.</li>
        </ul>
  
        <h3>Generic Club Information</h3>
        <div>
          <label>Club Name:</label>
          <input type="text" name="clubName" value={formData.clubName} onChange={handleChange} required />
        </div>
        <div>
          <label>Applied Date:</label>
          <input type="date" name="appliedDate" value={formData.appliedDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Nature of Club:</label>
          <div>
            <input type="radio" name="natureOfClub" value="Domain Specific (Skill Based)" onChange={handleChange} required /> Domain Specific (Skill Based)
            <input type="radio" name="natureOfClub" value="Hackathon and Challenge" onChange={handleChange} /> Hackathon and Challenge
            <input type="radio" name="natureOfClub" value="Invention and Incubation" onChange={handleChange} /> Invention and Incubation
            <input type="radio" name="natureOfClub" value="Social Value and Outreach" onChange={handleChange} /> Social Value and Outreach
          </div>
        </div>
  
        <h3>Faculty Advisor/ Faculty Co-Advisor Details:</h3>
        <div>
          <label>Position Applied For:</label>
          <div>
            <input type="radio" name="positionAppliedFor" value="Faculty Advisor" onChange={handleChange} required /> Faculty Advisor
            <input type="radio" name="positionAppliedFor" value="Faculty Co-Advisor" onChange={handleChange} /> Faculty Co-Advisor
          </div>
        </div>
        <div>
          <label>Faculty Name/EID:</label>
          <input type="text" name="facultyName" value={formData.facultyName} onChange={handleChange} required />
        </div>
        <div>
          <label>E-Mail ID:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Designation:</label>
          <input type="text" name="designation" value={formData.designation} onChange={handleChange} required />
        </div>
        <div>
          <label>Prior Experience in Co-Curricular Domain (Years):</label>
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} required />
        </div>
        <div>
          <label>Specialization:</label>
          <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} required />
        </div>
        <div>
          <label>Previous Achievements/ Certifications/ Recognitions/ Patents/ Research Papers (SCI, SCOPUS)/ Leadership:</label>
          <textarea name="achievements" value={formData.achievements} onChange={handleChange} required />
        </div>
        <div>
          <label>Proposed Vision for Club:</label>
          <textarea name="vision" value={formData.vision} onChange={handleChange} required />
        </div>
        <div>
          <label>Proposed Flagship Event:</label>
          <textarea name="flagshipEvent" value={formData.flagshipEvent} onChange={handleChange} required />
        </div>
        <div>
          <label>Nomination:</label>
          <textarea name="nomination" value={formData.nomination} onChange={handleChange} required />
        </div>
        <div>
          <label>Nominated By:</label>
          <input type="text" name="nominatedBy" value={formData.nominatedBy} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="nominatedBy" value={formData.nominatedBy} onChange={handleChange} required />
        </div>
        <div>
          <label>Signature:</label>
          <input type="text" name="nominatedBy" value={formData.nominatedBy} onChange={handleChange} required />
        </div>
        
        <button type="submit">Submit</button>
      </form>
  
      <footer>
        <img src="path/to/university-logo.png" alt="University Logo" />
        <div>
          <p>Pro-Vice Chancellor Academic Affairs Office</p>
          <p>Document Verified</p>
        </div>
        <img src="path/to/pro-vc-logo.png" alt="Pro-VC Logo" />
      </footer>
    </div>
  );
  

  
};

export default Form;
