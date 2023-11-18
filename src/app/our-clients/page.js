import {SectionInfo} from "@/components/SectionInfo";
import Image from "next/image";
import clients from "../../../public/clients.png";


export default function Page() {
    return (
        <main>
            <SectionInfo title='Our Clients'/>
            <div className='py-24'>
                <div className='container mx-auto px-8'>
                    <Image src={clients} />
                </div>
            </div>
        </main>
    )
};