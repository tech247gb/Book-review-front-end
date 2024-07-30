import React from 'react';

interface FullScreenBannerProps {
    backgroundImage: string;
    title: string;
    subtitle?: string;
}

const FullScreenBanner: React.FC<FullScreenBannerProps> = ({ backgroundImage, title, subtitle }) => {
    return (
        <div
            className="relative w-full h-[50vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
                {subtitle && <p className="text-lg md:text-xl">{subtitle}</p>}
            </div>
        </div>
    );
};

export default FullScreenBanner;
