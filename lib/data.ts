import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Indian Institute of Information Technology",
    location: "Ranchi",
    description:
      "I will be graduated in 2025 of studying in Electronics and Communication Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Full Stack web Developer",
    location: "College",
    description:
      "I worked on verious Projects with wide horizon and depth be it Frontend or the Backend technologies. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Open to any",
    description:
      "I'm with Full of Confidence and zeal looking for a full-stack developer role. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Tomato.",
    description:
      "I worked as a full-stack developer on this food-delivery project. It's a MERN based food-delivery project.",
    tags: ["React js", "Node js", "Express js ","MongoDB" ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Chess",
    description:
      "Enables to play game of chess with Drag & Drop feature and infinite  pairing of Chess-Masters. ",
    tags: ["React", "Node js", "Socket-IO", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Resume Builder",
    description:
      "To build professional resume with templete selection  PDF export option, dark mode and image upload for profile customization.",
    tags: ["React", "Node js", "Tailwind", "Framer"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "DSA",
  "OOP",
  "OS",
  "DBMS",
  "Problem Solving",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "SQL",
  "MySQL",
  "Python",
  "C/C++",
  "JAVA",
] as const;