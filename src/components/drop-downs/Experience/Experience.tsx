import { Timeline } from '@mui/lab';
import React from 'react';
import { Paper } from '@mui/material';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { ExperienceCard } from './ExperienceCard';
import background from '../../../assets/background_experience.avif';

const experiences = [
  {
    year: 2021,
    title: 'Graduated A.S. in Computer Science',
    institution: 'Diablo Valley College',
    description:
      'I discovered my passion for computer science and developed a strong work ethic that has carried me to where I am today.',
    defaultOpen: true,
  },
  {
    year: 2022,
    title: 'Lead Software Engineer/Mentor',
    institution: 'SchedGo (now EduRoute)',
    description:
      'This was my first role in a professional company. I led an extension to the startup’s web application, helping the organization win first place at UC Davis’ Big Bang Business Competition 2023. I am grateful for this opportunity and the amazingly dedicated people I met.',
  },
  {
    year: 2023,
    title: 'Graduated B.S. in Computer Science',
    institution: 'University of California, Davis',
    description:
      'I found a new passion: AI and machine learning. This area of computer science is very intriguing, and it amazed me how powerful the application potential can be. I also developed an interest in web programming and its ability to bring ideas to life.',
  },
  {
    year: 2023,
    title: 'STEM Instructor',
    institution: 'STEMNETICS',
    description:
      'One of my goals in life is to give back, and this role is a step in that direction. I currently work as a STEM instructor for underserved communities in the Los Angeles area. Through educational empowerment, I positively influence children’s lives and hope to inspire future engineers.',
  },
  {
    year: 2024,
    title: 'ML Student Researcher',
    institution: 'USC AutoDrive Lab',
    description:
      'This is my first hands-on experience with research. I focus on researching, reproducing, and improving SoTA machine learning models in their application to autonomous driving. Guided by Professor Rahul Jain, I am learning to think as a researcher and ride the cutting edge of discovery.',
  },
  {
    year: 2024,
    title: 'Integration Engineer Intern',
    institution: 'NASA Deep Space Network (Peraton)',
    description:
      "I accepted a summer internship at NASA's Deep Space Network. I use an Agile development process to help the organization redesign and reimplement its internal web applications.",
  },
];

export const Experience: React.FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        position: 'relative',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        borderRadius: '5px',
      }}
    >
      <TouchAppIcon
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          margin: 1.5,
        }}
      />

      <Timeline position="alternate">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            year={experience.year}
            title={experience.title}
            institution={experience.institution}
            description={experience.description}
            defaultOpen={experience.defaultOpen}
          />
        ))}
      </Timeline>
    </Paper>
  );
};
