import React from 'react';

const Section = ({children}) => {
    return (
        <section className={'px-20 py-4'}>
            {children}
        </section>
    );
};

export default Section;