import React from 'react';

function Inlinecss() {
    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        maxWidth: '800px',
        margin: '0 auto'
    };

    const headingStyle = {
        color: '#333',
        fontSize: '2rem',
        marginBottom: '20px'
    };

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        margin: '20px 0'
    };

    const imageStyle = {
        width: '200px',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '4px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    };

    const nameStyle = {
        color: '#2c3e50',
        fontSize: '1.5rem',
        margin: '20px 0',
        fontWeight: 'bold'
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Inline CSS Example</h1>
            <div style={imageContainerStyle}>
                <img 
                    src="https://picsum.photos/200/300" 
                    alt="Random" 
                    style={imageStyle} 
                />
                <h2 style={nameStyle}>SHIVAM RAJPUT</h2>
                <img 
                    src="https://picsum.photos/200/300" 
                    alt="Random" 
                    style={imageStyle} 
                />
                <img 
                    src="https://picsum.photos/200/300" 
                    alt="Random" 
                    style={imageStyle} 
                />
            </div>
        </div>
    );
}

export default Inlinecss;