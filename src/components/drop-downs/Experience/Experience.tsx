import { Timeline } from '@mui/lab';
import React from 'react';
import { Paper } from '@mui/material';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { ExperienceCard } from './ExperienceCard';
import background from '../../../assets/background_experience.avif';

const experiences = [
  {
    year: 2021,
    title: 'A.S. in Computer Science',
    institution: 'Diablo Valley College',
    description:
      'While in community college, I discovered my passion for computer science and developed a strong work ethic that has carried me to where I am today.',
    defaultOpen: true,
  },
  {
    year: 2021,
    title: 'B.S. in Computer Science',
    institution: 'University of California, Davis',
    description:
      'During my time at UC Davis, I found a new passion: AI and machine learning. This area of computer science is incredibly intriguing, and I was amazed by its powerful real-world applications. I also developed a strong interest in web programming and its ability to bring ideas to life through interactive, user-focused experiences.',
  },
  {
    year: 2022,
    title: 'Lead Software Engineer',
    institution: 'SchedGo (now EduRoute)',
    description:
      'This was my first role in a professional company. I led an extension to the startup’s web application, helping the company win first place at UC Davis’ Big Bang Business Competition 2023.',
  },
  {
    year: 2023,
    title: 'M.S. in Computer Science (Focus: AI/ML)',
    institution: 'University of Southern California',
    description:
      'I am currently pursuing a Master of Science in Computer Science (Focus: AI/ML) at USC with an expected graduation date of May 2025. Here I am continuing to stregthen my AI/ML skillset through academic work and personal projects.',
  },
  // {
  //   year: 2023,
  //   title: 'STEM Instructor (Current)',
  //   institution: 'STEMNETICS',
  //   description:
  //     'One of my goals in life is to give back, and this role is a step in that direction. I currently work as a STEM instructor for underserved communities in the Los Angeles area. Through educational empowerment, I positively influence children’s lives and hope to inspire future engineers.',
  // },
  {
    year: 2024,
    title: 'ML Student Researcher',
    institution: 'USC AutoDrive Lab',
    description:
      'I joined a lab at USC where I focus on researching, reproducing, and improving SoTA machine learning-powered solutions to autonomous driving.',
  },
  {
    year: 2024,
    title: 'Software Integration Engineer Intern',
    institution: 'NASA Deep Space Network (Peraton)',
    description:
      "Last Summer, I worked as a Software Integration Engineer Intern at NASA's Deep Space Network, where I collaborated with cross-functional teams to redesign and redevelop an internal application from scratch.",
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
