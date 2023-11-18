import {SectionInfo} from "@/components/SectionInfo";
import Image from "next/image";
import AboutUs from "../../../public/about-us.png";


export default function Page() {
    return (
        <main>
            <SectionInfo title='About Us'/>
            <div className='py-24'>
                <div className='container mx-auto px-8'>
                    <div className='grid grid-cols-2 gap-4'>
                        <Image src={AboutUs} />
                        <div className='space-y-6'>
                            <p>In a world that never stops spinning and keeps pushing businesses towards just one thing is that, how to WOW their customers, we came to add an inspiring value for how our clients not just can wow their customers, but also impress them with how they understand them and can deliver accurate solutions for their pain problems.</p>
                            <p>As we have always dreamed of bringing "the growth mindset" to life. And actually, we consider this as our core mission. So, when everyone is busy creating the WOW of now, our focus goes to telling inspiring stories and building a strong brand presence in the markets to influence customers and inspire people to take desired actions; not only on the short term but beyond.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};