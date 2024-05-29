import React from 'react';

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.paragraph}>The page you are looking for does not exist.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#666',
  },
};

export default PageNotFound;
