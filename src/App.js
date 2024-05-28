// src/App.js
import React, { useState } from 'react';
import GeneratePdf from './GeneratePdf';
import PdfViewer from './PdfViewer';
import Form from './Form';

const App = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handlePdfGenerated = (fileUrl) => {
    setPdfFile(fileUrl);
  };

  return (
    <div>
      <Form />
      <GeneratePdf onPdfGenerated={handlePdfGenerated} />
      {pdfFile && (
        <>
          <h2>Generated PDF Preview</h2>
          <PdfViewer file={pdfFile} />
        </>
      )}
    </div>
  );
};

export default App;
