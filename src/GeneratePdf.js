// src/GeneratePdf.js
import React from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';

const GeneratePdf = ({ onPdfGenerated }) => {
  const createPdf = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    // Add text field
    const form = pdfDoc.getForm();
    const textField = form.createTextField('textField');
    textField.setText('Type here');
    textField.addToPage(page, { x: 50, y: 350, width: 200, height: 20 });

    // Instead of using a button field, we can add static text indicating a submit action
    page.drawText('Submit Button (Placeholder)', { x: 50, y: 300, size: 18, color: rgb(0, 0, 0) });

    // Add some text
    page.drawText('Fill out the form:', { x: 50, y: 370, size: 18, color: rgb(0, 0, 0) });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    saveAs(blob, 'fillable_form.pdf');

    onPdfGenerated(URL.createObjectURL(blob));
  };

  return (
    <div>
      <button onClick={createPdf}>Generate PDF</button>
    </div>
  );
};

export default GeneratePdf;
