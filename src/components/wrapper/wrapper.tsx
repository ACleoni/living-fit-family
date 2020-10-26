import React from 'react';
import Header from '../header/Header';

interface PropsType {
    children: JSX.Element
}

export default function Wrapper({ children }: PropsType) {
    return (
        <div className="wrapper">
            <Header />
            {children}
        </div>
    )
}
