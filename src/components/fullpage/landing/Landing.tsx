import React from 'react';

export default function Landing() {

    const isAdminMode: boolean = false;

    return (
        <div style={{ width: '100vw', height: '90vh', overflow: "hidden", display: 'inline-block', textAlign: 'center', position: 'absolute', top: 0, left: 0 }}>
            <div style={{ zIndex: 10, width: '100%', height: '90vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, left: 0 }} />
            <video width='100%' height='100%' data-keepplaying muted autoPlay loop playsInline style={{ zIndex: 1, objectFit: 'cover' }}>
                <source className="video-source" src="https://static.obefitness.com/media/hero_desktop.mp4" type="video/mp4" />
            </video>
        </div>
    )
}