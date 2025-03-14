import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from './ui/button';
import { PenBox } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

export const Header = () => {
  return (
    <>
      <section className='container  mx-auto' >
        <nav className='py-6 px-4 flex justify-between items-center'>
          <a href="/">
            <img className='m-2 w-auto h-10' src="logos/project_title.png" width={200} alt="" />
          </a>
          <ModeToggle/>

          <div className='flex gap-2 justify-between self-center '>
            <a href="/">
              <Button variant={"destructive"} className={"mx-2"}> <PenBox size={18} /> Create Project</Button>
            </a>
            <SignedOut>
              <SignInButton forceRedirectUrl="/onboarding">
                <Button variant="outline">Login</Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button><UserButton /></Button>
            </SignedIn>
          </div>
        </nav>
      </section>

    </>
  )
}
