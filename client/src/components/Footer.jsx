import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function Footercom() {
  return (
    <Footer container className='border border-t-8 border-green-500'>
        <div className='w-full max-w-7xl mx-auto'>
          <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
            <div className='mt-5'>
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span>Everything100</span>
            </Link>
            </div>
            <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
              <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://wwww.x.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  JS projects
                </Footer.Link>
                <Footer.Link
                  href='/About'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Everything100
                </Footer.Link>
              </Footer.LinkGroup>  
              </div>
              <div>
              <Footer.Title title='Follow Us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://wwww.facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Facebook
                </Footer.Link>
                <Footer.Link
                  href='/About'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  X
                </Footer.Link>
              </Footer.LinkGroup>  
              </div>
              <div>
              <Footer.Title title='legal' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='#'
                  
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href='#'>
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>  
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href='#' by="Everything100" year={new Date().getFullYear()}/>
            <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
              <Footer.Icon href='#' icon={BsFacebook}/>
              <Footer.Icon href='#' icon={BsInstagram}/>
              <Footer.Icon href='#' icon={BsTwitter}/>
              <Footer.Icon href='#' icon={BsDribbble}/>
              <Footer.Icon href='#' icon={BsGithub}/>
            </div>
          </div>
        </div>
    </Footer>
  );
}
