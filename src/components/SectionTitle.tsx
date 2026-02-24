import React from 'react';

interface SectionTitleProps {
    children: React.ReactElement<{ className?: string }>;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    const className = `${children.props.className || ""} text-3xl lg:text-5xl lg:leading-tight font-bold`.trim();
    return React.cloneElement(children, { className });
};

export default SectionTitle;