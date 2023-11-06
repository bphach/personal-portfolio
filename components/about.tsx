"use client"

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from "framer-motion";

export default function About() {
  return (
  <motion.section className="mb-28 max-w-[45rem] text-center 
  leading-8 sm:mb-40"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}   
  transition={{ delay: 0.175}}
  >
    <SectionHeading>About Me</SectionHeading>
    <p className="mb-3">
    After graduating with an associate's degree in{" "}
        <span className="font-medium text-yellow-500">Science</span>, I decided to pursue my
        passion for programming. Currently learning{" "}
        <span className="font-medium text-yellow-500">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. 
        My core stack is
        {" "}
        <span className="font-medium text-yellow-500">
          React, Next.js, Python, and AWS
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium text-yellow-500">full-time position</span> as a software
        developer.
    </p>

    <p>
    <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching anime, and cooking delicious food. I also enjoy{" "}
        <span className="font-medium text-yellow-500">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium text-yellow-500">drawing and animating </span>. I'm also currently playing lost judgment.
    </p>
  </motion.section>
  );
}
