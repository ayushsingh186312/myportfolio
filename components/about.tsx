"use client";

import React from 'react'
import { LuGraduationCap } from 'react-icons/lu';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {


  const { ref } = useSectionInView("About",0.75);
  return (
    <motion.section 
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
        <SectionHeading>
            About me
        </SectionHeading>
        <p className="mb-3">
        I embarked on my programming journey during my academic years at{' '}
        <LuGraduationCap className="inline" />{' '}
        <span className="font-medium">IIIT , Ranchi.</span>{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect.
      </p>

      <p className="mb-3">
        With Graduation and my keen interest in Software, I  evolved myself as a Software Engineer. I
        started my professional journey with {' '}
        <span className="font-medium">Backend Development</span> where I learnt
        extensively in cutting-edge technologies like{' '}
        <span className="font-medium">Node js</span> ,{' '}
        <span className="font-medium">Express js</span> .{' '}
        I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}<span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript . I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.

      </p>

      <p>
        <span className="italic">Beyond my professional endeavors</span>,
        I&apos;ve undertaken personal projects utilizing{' '}
        <span className="font-medium">TypeScript</span>,{' '}
        <span className="font-medium">Node.js</span>,{' '}
        <span className="font-medium">Next.js</span>,{' '}
        <span className="font-medium">React.js</span> and{' '}
        <span className="font-medium">MongoDB</span> for{' '}
        <span className="font-medium">Web Dev</span> and leveraged{' '}
        <span className="font-medium">OpenAI API</span>, further solidifying my
        versatility and dedication to mastering new technologies. Also,{' '}
        <span className="italic">during my college years</span>, I dedicated
        some time to <span className="font-medium">Machine learning</span>, utilizing{' '}
        <span className="font-medium">Python</span> to build basic applications.
      </p>
    </motion.section>

  )
}
