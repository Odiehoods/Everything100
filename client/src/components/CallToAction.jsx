import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to listen to more music?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout this music library
            </p>
            <Button color='success' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.naijaloaded.com.ng/" target='_blank' rel='noopener noreferrer'>
                    Click for more music
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://th.bing.com/th?id=OIP.cbjVVDscJEgmityWlEWIaAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
        </div>
    </div>
  )
}