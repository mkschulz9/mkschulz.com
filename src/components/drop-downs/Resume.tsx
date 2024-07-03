import React, { useState, useEffect, useRef } from 'react';
import { Stack, Box } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import resumePDF from '../../assets/Matthew_Schulz_resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume: React.FC = () => {
  const [scale, setScale] = useState(0.75); // Initial zoom level
  const containerRef = useRef(null);

  // Function to handle wheel zoom
  const handleWheel = (e: { deltaY: number }) => {
    if (e.deltaY < 0) {
      setScale(prevScale => Math.min(prevScale * 1.1, 3)); // Zoom in
    } else {
      setScale(prevScale => Math.max(prevScale / 1.1, 0.5)); // Zoom out
    }
  };

  // Attach wheel event listener
  useEffect(() => {
    const container = containerRef.current as unknown as HTMLElement;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <Stack
      alignItems="center"
      sx={{
        display: 'flex',
        border: '2px solid red',
        overflow: 'auto',
        bgcolor: 'secondary.main',
        maxWidth: '100%',
        width: '100%',
      }}
      ref={containerRef}
    >
      <Box sx={{ width: '100%', overflow: 'auto' }}>
        <Document file={resumePDF}>
          <Page pageNumber={1} scale={scale} renderTextLayer={false} />
        </Document>
      </Box>
    </Stack>
  );
};
