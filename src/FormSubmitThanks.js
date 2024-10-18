import React from 'react';

const FormSubmitThanks = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Thank You!</h1>
                <p style={styles.message}>We have received your submission and will get back to you shortly.</p>
                <a href="/" style={styles.button}>Go Back to Home</a>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#083d3deb' // Adjust to match your theme background
    },
    card: {
        width:'70%',
        margin:'auto',
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: '10px',
        WebkitBackdropFilter: 'blur(6px)',
        backdropFilter: 'blur(6px)',
        background: 'rgba(0, 0, 0, 0)',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.9)',
        color: '#fff',
    },
    title: {
        fontSize: '2rem',
        color: 'white', // Adjust to match your theme color
    },
    message: {
        fontSize: '1.2rem',
        color: '#b9b9b9', // Adjust as per the color scheme
        margin: '20px 0',
    },
    button: {
        background: '#fff',
        border: 'none',
        borderRadius: '40px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        color: '#333',
        cursor: 'pointer',
        display: 'block',
        fontWeight: 600,
        margin: 'auto',
        outline: 'none',
        transition: 'all 0.5s ease',
        width: '37%',
        textDecoration:'none',
        padding:'12px 2px',

    },
};

export default FormSubmitThanks;
