import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaGithub, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-100 p-0 m-0 row justify-content-center py-5 bg_linder_red'>
        <div className='text-center col-12 col-sm-11 col-lg-6 p-0 m-0  d-flex flex-wrap justify-content-center px-4'>
           <span className='fs-4 fw-bold w-100 px-2 px-sm-4 px-lg-0'>
                Our community grows stronger every day.
                Please follow our social platforms to get the most up-to-date, accurate HajiInu information.
            </span> 
            <span style={{color:"#22242e"}} className='fs-5 fw-bold w-100 pt-3'>
              To Get latest updates on HajiInu Swap join!
            </span> 
            <span className='d-flex pt-4'>
              <Link href={"/"}>
              <span className='mx-1 icon_bg'>
                   <FaTwitter/>
               </span>
              </Link>
              <Link href={"/"}>
              <span className='mx-1 icon_bg'>
                   <FaGithub/>
               </span>
              </Link>
              <Link href={"/"}>
              <span className='mx-1 icon_bg'>
                   <FaYoutube/>
               </span>
              </Link>
              <Link href={"/"}>
              <span className='mx-1 icon_bg'>
                   <FaTelegram/>
               </span>
              </Link>
              <Link href={"/"}>
              <span className='mx-1 icon_bg'>
                   <FaEnvelope/>
               </span>
              </Link>
              
            </span>
        </div>
    </div>
  )
}

export default Footer
