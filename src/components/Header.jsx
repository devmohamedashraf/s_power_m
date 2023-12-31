import Image from 'next/image'
import Logo from '../../public/Logo.png'
export function Header() {
    return (
        <div className='py-6'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Image src={Logo} width={90}/>
                    </div>
                    <div className='flex items-center gap-8'>
                        <div className='flex items-center gap-2'>
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26" r="26" fill="#EFEFEF"/>
                                <path d="M31.4 36.0001C27.3173 35.9948 23.4033 34.3706 20.5164 31.4837C17.6295 28.5968 16.0053 24.6828 16 20.6001C16 19.3801 16.4846 18.2101 17.3473 17.3474C18.21 16.4848 19.38 16.0001 20.6 16.0001C20.8583 15.9981 21.1162 16.0216 21.37 16.0701C21.6153 16.1064 21.8565 16.1667 22.09 16.2501C22.2542 16.3077 22.4006 16.4072 22.5146 16.5388C22.6286 16.6703 22.7063 16.8293 22.74 17.0001L24.11 23.0001C24.1469 23.163 24.1425 23.3325 24.0971 23.4932C24.0516 23.6539 23.9667 23.8007 23.85 23.9201C23.72 24.0601 23.71 24.0701 22.48 24.7101C23.465 26.871 25.1932 28.6063 27.35 29.6001C28 28.3601 28.01 28.3501 28.15 28.2201C28.2694 28.1034 28.4162 28.0185 28.5769 27.9731C28.7376 27.9276 28.9071 27.9232 29.07 27.9601L35.07 29.3301C35.2353 29.3685 35.3881 29.4483 35.5141 29.562C35.64 29.6757 35.735 29.8196 35.79 29.9801C35.8744 30.2175 35.938 30.4617 35.98 30.7101C36.0202 30.9614 36.0403 31.2156 36.04 31.4701C36.0216 32.6849 35.5233 33.8431 34.654 34.6918C33.7847 35.5405 32.6149 36.0108 31.4 36.0001Z" fill="#2BB573"/>
                            </svg>
                            <div className='flex flex-col'>
                                <span className='text-sm text-gray-500'>Phone Number</span>
                                <span className='text-base font-bold'>+2010 26 75 48 31</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26" r="26" fill="#EFEFEF"/>
                                <path d="M26 14C23.6139 14.0027 21.3262 14.9729 19.639 16.6977C17.9518 18.4225 17.0027 20.761 17 23.2002C17 26.9436 19.6584 30.0521 22.4743 33.3424C23.3653 34.3843 24.2878 35.4619 25.109 36.5521C25.2141 36.6915 25.3491 36.8043 25.5035 36.882C25.658 36.9596 25.8279 37 26 37C26.1721 37 26.342 36.9596 26.4965 36.882C26.6509 36.8043 26.7859 36.6915 26.891 36.5521C27.7122 35.4619 28.6347 34.3843 29.5258 33.3424C32.3416 30.0521 35 26.9436 35 23.2002C34.9973 20.761 34.0482 18.4225 32.361 16.6977C30.6738 14.9729 28.3861 14.0027 26 14ZM26 26.6503C25.3325 26.6503 24.68 26.448 24.125 26.0689C23.5699 25.6898 23.1374 25.151 22.8819 24.5205C22.6265 23.8901 22.5596 23.1964 22.6898 22.5272C22.8201 21.8579 23.1415 21.2432 23.6135 20.7607C24.0855 20.2782 24.6869 19.9496 25.3416 19.8164C25.9963 19.6833 26.6749 19.7516 27.2916 20.0128C27.9083 20.2739 28.4354 20.7161 28.8062 21.2835C29.1771 21.8508 29.375 22.5179 29.375 23.2002C29.375 24.1153 29.0194 24.9928 28.3865 25.6398C27.7536 26.2868 26.8951 26.6503 26 26.6503Z" fill="#2BB573"/>
                            </svg>
                            <div className='flex flex-col'>
                                <span className='text-sm text-gray-500'>Email</span>
                                <span className='text-base font-bold'>info@spowerm-corp.com</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26" r="26" fill="#EFEFEF"/>
                                <path d="M35.9895 23.3684C35.9902 23.0106 35.9 22.6586 35.7273 22.3455C35.5546 22.0324 35.3051 21.7686 35.0025 21.5789L25.5 16L15.9975 21.5789C15.4043 21.9526 15 22.6105 15 23.3684V33.8947C15 35.0579 15.9398 36 17.1 36H33.9C35.0603 36 36 35.0579 36 33.8947L35.9895 23.3684ZM25.5 28.6316L16.827 23.1947L25.5 18.1053L34.173 23.1947L25.5 28.6316Z" fill="#2BB573"/>
                            </svg>
                            <div className='flex flex-col'>
                                <span className='text-sm text-gray-500'>Location</span>
                                <span className='text-base font-bold'>To be Added</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};