import Image from 'next/image'
import Button from "@/components/Button";
import Input from "@/components/Input";
import {SectionInfo} from "@/components/SectionInfo";

export default function Page() {
  return (
    <main>
        <SectionInfo title='Contact Us'/>
        <div className='container mx-auto px-4 py-6'>
            <form className='space-y-4'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                    <div>
                        <label className='block mb-2 font-medium'>Full name</label>
                        <Input placeholder='Ex : John Doe'/>
                    </div>
                    <div>
                        <label className='block mb-2 font-medium'>E-mail</label>
                        <Input placeholder='Ex: John.doe@gmail.com' />
                    </div>
                    <div className='md:col-span-2'>
                        <label className='block mb-2 font-medium'>Your Message for us</label>
                        <textarea className='w-full p-2.5 px-6 border border-secondary focus:outline-secondary rounded-lg' rows="5" placeholder='leave your message here'></textarea>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Button className=' bg-secondary text-white'>Submit</Button>
                </div>
            </form>
        </div>
    </main>
  )
}
