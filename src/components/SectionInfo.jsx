import SectionImage from '../../public/section.png'
import Image from "next/image";
export function SectionInfo({ title }) {
    return (
        <div className='section-info text-white text-6xl'>
            {title}
        </div>
    );
};