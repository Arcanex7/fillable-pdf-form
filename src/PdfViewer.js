// src/PdfViewer.js
import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = ({ file }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      {file && (
        <div style={{ height: '750px' }}>
          <Viewer fileUrl={file} plugins={[defaultLayoutPluginInstance]} />
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
