import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from './ui/button';
import { ChartNoAxesGantt, PenBox } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <section className='container  mx-auto' >
        <nav className='py-6 px-4 flex justify-between items-center'>
          <Link to="/">
            <img className='m-2 w-auto h-10' src="logos/project_title.png" width={200} alt="" />
          </Link>
          {/* <ModeToggle/> */}

          <div className='flex gap-2 justify-between self-center '>
            <Link href="/">
              <Button variant={"destructive"} className={"mx-2"}> <PenBox size={18} /> Create Project</Button>
            </Link>
            <SignedOut>
              <SignInButton >
                <Button variant="outline">Login</Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button>
                <UserButton>

                  <UserButton.MenuItems>
                    <UserButton.Link label='My Organizations' labelIcon={<ChartNoAxesGantt />} size={15} href='/onboarding' />
                    <UserButton.Action label='manageAccount'/>
                  </UserButton.MenuItems>
                </UserButton>
              </Button>
            </SignedIn>
          </div>
        </nav>
      </section>

    </>
  )
}
