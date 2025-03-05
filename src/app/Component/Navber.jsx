"use client"; 
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navber() {
    const pathname = usePathname();
    console.log(pathname, pathname.includes("dashboard"));
if (!pathname.includes("dashboard")) {
    return (
        <div><nav className="w-11/12 mx-auto my-5">
            <ul className="flex justify-between font-bold ">
                <Link href="/">HOME</Link>
                <Link href="/about">ABOUT US</Link>
                <Link href="/posts">POST</Link>
                <Link href="/blog">BLOG</Link>
                
            </ul>
        </nav></div>
    )
}
else{
    return <></>
} 
}
