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
      'This was my first role in a professional company. I led an extension to the startup’s web application, helping the company win first place at UC Davis’ Big Bang! Business Competition 2023.',
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
      'Shortly after starting my M.S. at USC, I joined an on-campus lab where I focused on researching and reproducing SoTA machine learning-based systems for autonomous driving.',
  },
  {
    year: 2024,
    title: 'Software Integration Engineer Intern',
    institution: 'NASA Deep Space Network (Peraton)',
    description:
      "Over Summer 2024, I worked as a software integration engineer intern at NASA's Deep Space Network, where I collaborated with cross-functional teams to redesign and redevelop an internal app.",
  },
  {
    year: 2025,
    title: 'M.S. in Computer Science (Focus: AI/ML)',
    institution: 'University of Southern California',
    description:
      'I graduated with an M.S. in Computer Science (Focus: AI/ML) from USC in May 2025. During my time at USC, I strengthened my data structures, algorithms, and OOP skills while developing advanced skills in AI/ML.',
  },
  {
    year: 2025,
    title: 'Software Engineer',
    institution: 'Visa',
    description:
      'I currently work full-time as a SWE building AI applications on Visa’s Automated Payment Fraud Disruption (APFD) team, part of the Value Added Services division, to detect, prevent, and mitigate prepaid card fraud across the global payment ecosystem.',
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
