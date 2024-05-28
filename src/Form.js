// src/FacultyAdvisorForm.js
import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await generatePdf(formData);
  };

  const generatePdf = async (data) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 750]);

    page.drawText('Club Faculty/Co-Faculty Advisor: Application Form', { x: 50, y: 700, size: 18, color: rgb(0, 0, 0) });
    page.drawText('General Points:', { x: 50, y: 680, size: 14, color: rgb(0, 0, 0) });

    page.drawText('1. Faculty Advisor: Must have a minimum of 1-year experience in Chandigarh University (Ph.D not required).', { x: 50, y: 660, size: 12, color: rgb(0, 0, 0) });
    page.drawText('2. Faculty Co-Advisor: Any fresher who has recently joined Chandigarh University (Ph.D not required).', { x: 50, y: 640, size: 12, color: rgb(0, 0, 0) });
    page.drawText('3. Required Documents: Updated Resume, Achievement proofs, Coordinator-ship proofs, etc.', { x: 50, y: 620, size: 12, color: rgb(0, 0, 0) });

    page.drawText('Generic Club Information:', { x: 50, y: 590, size: 14, color: rgb(0, 0, 0) });
    page.drawText(`Club Name: ${data.clubName}`, { x: 50, y: 570, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`Applied Date: ${data.appliedDate}`, { x: 50, y: 550, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`Nature of Club: ${data.natureOfClub}`, { x: 50, y: 530, size: 12, color: rgb(0, 0, 0) });

    page.drawText('Faculty Advisor/ Faculty Co-Advisor Details:', { x: 50, y: 500, size: 14, color: rgb(0, 0, 0) });
    page.drawText(`Position Applied For: ${data.positionAppliedFor}`, { x: 50, y: 480, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`Faculty Name/EID: ${data.facultyName}`, { x: 50, y: 460, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`E-Mail ID: ${data.email}`, { x: 50, y: 440, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`Mobile Number: ${data.mobileNumber}`, { x: 50, y: 420, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`Designation: ${data.designation}`, { x: 50, y: 400, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`Prior Experience in Co-Curricular Domain (Years): ${data.experience}`, { x: 50, y: 380, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`Specialization: ${data.specialization}`, { x: 50, y: 360, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`Previous Achievements/ Certifications/ Recognitions/ Patents/ Research Papers (SCI, SCOPUS)/ Leadership:`, { x: 50, y: 340, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`${data.achievements}`, { x: 50, y: 320, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`Proposed Vision for Club:`, { x: 50, y: 300, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`${data.vision}`, { x: 50, y: 280, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`Proposed Flagship Event:`, { x: 50, y: 260, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`${data.flagshipEvent}`, { x: 50, y: 240, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`Nomination:`, { x: 50, y: 220, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`${data.nomination}`, { x: 50, y: 200, size: 12, color: rgb(0, 0, 0) });
    page.drawText(`Nominated By: ${data.nominatedBy}`, { x: 50, y: 180, size: 12, color: rgb(0, 0, 0) });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(blob, 'fillable_form.pdf');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', border: '1px solid #ccc' }}>
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
  );
};

export default Form;
