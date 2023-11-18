import Image from 'next/image'
import Button from "@/components/Button";
import Input from "@/components/Input";
import {SectionInfo} from "@/components/SectionInfo";
import CorporateIdentity from '../../../public/Corporate-Identity.jpg'
export default function Page() {
    const services = [
        {
            desc: 'Where we can develop your business/brand personality and give it a charismatic sense to speak over a distinctive tone of voice in order to deliver a tailored image that ends up serving your strategic business goals.',
            name: 'CORPORATE IDENTITY'
        },
        {
            desc: 'Where we can develop your business/brand personality and give it a charismatic sense to speak over a distinctive tone of voice in order to deliver a tailored image that ends up serving your strategic business goals.',
            name: 'CORPORATE IDENTITY'
        },
        {
            desc: 'Where we can develop your business/brand personality and give it a charismatic sense to speak over a distinctive tone of voice in order to deliver a tailored image that ends up serving your strategic business goals.',
            name: 'CORPORATE IDENTITY'
        },
        {
            desc: 'Where we can develop your business/brand personality and give it a charismatic sense to speak over a distinctive tone of voice in order to deliver a tailored image that ends up serving your strategic business goals.',
            name: 'CORPORATE IDENTITY'
        },
        {
            desc: 'Where we can develop your business/brand personality and give it a charismatic sense to speak over a distinctive tone of voice in order to deliver a tailored image that ends up serving your strategic business goals.',
            name: 'CORPORATE IDENTITY'
        },
    ]
    return (
        <main>
            <SectionInfo title='Our Services'/>
            <div className='container mx-auto py-6'>
                <h2 className='text-center font-semibold text-4xl leading-[60px]'>We provide wide range of <br /> business services</h2>
                <div className='my-6 flex flex-col gap-8'>
                    {services.map((service, index) => {
                        return (
                            <div className='bg-white rounded-[35px] drop-shadow-lg flex items-start gap-4' dir={index % 2 === 0 ? 'rtl' : 'ltr'}>
                                <div className='relative'>
                                    <Image src={CorporateIdentity} className='rounded-[35px] '/>
                                    <div className='absolute w-full h-full inset-0 rounded-[35px] bg-[#00000050]'></div>
                                    <div className='absolute text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                        {service.name}
                                    </div>
                                </div>
                                <div className='p-6 px-6 text-[#979797]'>
                                    <p className='text-left' >
                                        Where we can develop your business/brand personality and give it a charismatic sense to speak over a distinctive tone of voice in order to deliver a tailored image that ends up serving your strategic business goals
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
