import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { features } from '@/Data/features';
import { BarChart, Calendar, Layout } from "lucide-react";



export const MainSection = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className='text-center'>
                <h1 className='text-6xl sm:text-7xl lg:text-8xl font-extrabold pb-6 flex flex-col gradient-title text-center'>Refine Your Work Process <br />
                    <span className='flex flex-wrap justify-center mx-auto gap-3 sm:gap-4'>with
                        <img src="project_title.png" alt="logo" width={400} height={80} className='inline' />
                    </span>
                </h1>
                <p className='text-xl text-gray-300 max-wd-3xl '>Unlock your team's potential with our effortlessly simple project management solution.</p>
                <a href="/onboarding">
                    <Button size="lg" className='mr-2 mt-4 cursor-pointer'>Get Started</Button>
                </a>
                <a href="#features">
                    <Button size='lg' variant='outline' className='mt-4 cursor-pointer'>Learn More</Button>
                </a>
            </section>
            <section>
                <div id='features' className='text-center'>
                    <h3 className='text-2xl my-5 mx-auto text-gray-100'>Key Features</h3>
                    <div className='flex flex-wrap justify-center gap-1'>
                        {features.map((data, index) => {
                            return (
                                <Card key={index} className='bg-blue-950 text-gray-100 content-center max-w-100 m-2 p-5 border-0'>
                                    <CardHeader className='flex flex-row mx-auto text-2xl'>
                                        <data.icon ></data.icon>
                                        <CardTitle >{data.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{data.description}</p>
                                    </CardContent>
                                </Card>
                            )

                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
