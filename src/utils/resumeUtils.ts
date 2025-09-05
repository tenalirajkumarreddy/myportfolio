// Resume download utility
export interface ResumeDownloadOptions {
  fileName?: string;
  resumePath?: string;
  trackDownload?: boolean;
}

export const downloadResume = async (options: ResumeDownloadOptions = {}) => {
  const {
    fileName = 'Raj_Kumar_Reddy_Tenali_Resume.pdf',
    resumePath = '/resume.pdf',
    trackDownload = true
  } = options;

  try {
    // Check if the resume file exists
    const response = await fetch(resumePath, { method: 'HEAD' });
    
    if (!response.ok) {
      throw new Error('Resume file not found');
    }

    // Create download link
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = fileName;
    link.style.display = 'none';
    
    // Add to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Track download event (optional analytics)
    if (trackDownload) {
      console.log('Resume downloaded:', {
        fileName,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      });
      
      // You can integrate with Google Analytics here:
      // gtag('event', 'resume_download', { fileName });
    }

    return { success: true, message: 'Resume downloaded successfully' };
    
  } catch (error) {
    console.error('Error downloading resume:', error);
    return { 
      success: false, 
      message: 'Failed to download resume. Please try again.' 
    };
  }
};

// Alternative method for external resume links
export const openResumeLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

// Utility to check if resume file exists
export const checkResumeExists = async (resumePath: string = '/resume.pdf'): Promise<boolean> => {
  try {
    const response = await fetch(resumePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};
