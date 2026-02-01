import React from 'react';
import {
  CardContent,
  CardMedia,
  IconButton,
  ImageList,
  ImageListItem,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import TagManager from 'react-gtm-module';
import bits_background from '../../assets/bits_background.jpg';
import aws_logo from '../../assets/aws_logo.png';
import reddit_comments from '../../assets/reddit_comments.png';
import chatbot_screenshot from '../../assets/rag_chatbot_screenshot.png';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import react_logo from '../../assets/react_logo.png';
import typescript_logo from '../../assets/typescript_logo.png';
import vite_logo from '../../assets/vite_logo.jpg';
import prettier_logo from '../../assets/prettier_logo.png';
import eslint_logo from '../../assets/eslint_logo.png';
import mui_logo from '../../assets/mui_logo.jpg';
import express_js_logo from '../../assets/express-js-logo.png';
import swagger_logo from '../../assets/swagger_logo.png';
import beanstalk_logo from '../../assets/beanstalk_logo.png';
import ec2_logo from '../../assets/ec2_logo.png';
import route53_logo from '../../assets/route53_logo.png';

export const FeaturedProjects: React.FC = () => {
  const trackProjectClick = (title: string, url?: string) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'project_link_click',
        project_title: title,
        project_url: url,
      },
    });
  };
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const projects = [
    {
      title: 'RAG Enhanced LLM Chatbot',
      content: [
        <>
          Interested in learning more about my professional background,
          including my education, experience, and passions? Click the link below
          to chat with an AI that can tell you all about it!
        </>,
        <>
          This RAG-enhanced chatbot can answer professional questions about me.
          It's powered by <strong>Anthropic's Claude Haiku 4.5</strong> (
          <strong>claude-haiku-4-5-20251001</strong>) and uses{' '}
          <strong>IBM's Granite-Embedding-125M-English</strong> model for dense
          vector embeddings and semantic search. This project is hosted on
          Hugging Face Spaces and brought to life with a Gradio-powered chat
          interface. Want to see how it was built? Head over to the “Files” tab
          in the Space for implementation details!
        </>,
      ],
      imgList: [chatbot_screenshot],
      githubLink: 'https://huggingface.co/spaces/mkschulz9/personal-chatbot',
      alternateIcon: <OpenInNewIcon />,
    },
    {
      title: 'Multi-Label Emotion Classification in Reddit Comments',
      content: [
        <>
          This project explores the use of both traditional and modern machine
          learning approaches to classify multiple emotions in Reddit comments.
          It explores transformer-based architectures such as{' '}
          <strong>DistilBERT</strong> and <strong>RoBERTa</strong> for feature
          extraction and classic algorithms like{' '}
          <strong>Logistic Regression</strong>,{' '}
          <strong>Support Vector Machines (SVM)</strong>, and{' '}
          <strong>Perceptron</strong> for classifiying emotions.
        </>,
        <>
          Notably, replacing <strong>TF-IDF</strong> features with{' '}
          <strong>DistilBERT embeddings</strong> and using{' '}
          <strong>Binary Relevance</strong> with a <strong>Perceptron</strong>{' '}
          boosted <strong>F1-score</strong> by over 20%. Check out the project's
          github below for more in-depth details!
        </>,
      ],
      imgList: [reddit_comments],
      githubLink:
        'https://github.com/mkschulz9/multi-label-text-classification',
    },
    {
      title: 'This Website!',
      content: [
        <>
          mkschulz.com isn’t just a website—it's a modern single-page
          application (SPA) built with <strong>React</strong>,{' '}
          <strong>TypeScript</strong>, and <strong>Material UI</strong>{' '}
          components.
        </>,
        <>
          Hosted on <strong>GitHub Pages</strong> with a custom domain and{' '}
          <strong>SSL configuration</strong> for secure browsing, the project is
          built using <strong>Vite</strong> and <strong>pnpm</strong>, with{' '}
          <strong>CI/CD pipelines</strong> powered by{' '}
          <strong>GitHub Actions</strong> for smooth development and deployment.
          To maintain high code quality, it uses <strong>ESLint</strong> and{' '}
          <strong>Prettier</strong>, along with <strong>commitlint</strong> and{' '}
          <strong>Husky git hooks</strong> to enforce consistent commit
          standards. Want to dive deeper? Check out the project’s GitHub below!
        </>,
      ],
      imgList: [
        react_logo,
        typescript_logo,
        mui_logo,
        vite_logo,
        prettier_logo,
        eslint_logo,
      ],
      githubLink: 'https://github.com/mkschulz9/mkschulz.com',
    },
    // {
    //   title: 'api.mkschulz.com',
    //   content: [
    //     <>
    //       The backend server for this site is built using
    //       <strong> Express.js</strong> and has security features such as
    //       <strong> CORS</strong>, <strong>Helmet</strong>, and API
    //       <strong> rate limiting</strong>. API documentation is provided via
    //       <strong> Swagger</strong>.
    //     </>,
    //     <>
    //       The server is deployed using <strong>AWS Elastic Beanstalk</strong>,
    //       with <strong>Route 53</strong> managing DNS services, including custom
    //       domain configuration. The server runs on an
    //       <strong> EC2 instance</strong>, configured with
    //       <strong> SSL certificates</strong> that enable <strong>HTTPS </strong>
    //       for secure communication. Check out the link below to view the Swagger
    //       API Docs.
    //     </>,
    //   ],
    //   imgList: [
    //     aws_logo,
    //     express_js_logo,
    //     swagger_logo,
    //     beanstalk_logo,
    //     ec2_logo,
    //     route53_logo,
    //   ],
    //   githubLink: 'https://api.mkschulz.com/docs',
    //   alternateIcon: <OpenInNewIcon />,
    // },
  ];

  const maxSteps = projects.length;

  return (
    <Stack
      sx={{
        alignItems: 'center',
        background:
          'linear-gradient(135deg, rgba(12, 15, 26, 0.92), rgba(30, 41, 59, 0.7))',
        borderRadius: '18px',
        p: 3,
        border: '1px solid rgba(148, 163, 184, 0.16)',
        backdropFilter: 'blur(16px)',
      }}
    >
      <Stack maxWidth={'95%'}>
        <Paper
          elevation={0}
          sx={{
            maxWidth: 440,
            bgcolor: 'rgba(15, 23, 42, 0.8)',
            borderRadius: '16px',
            border: '1px solid rgba(148, 163, 184, 0.16)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <SwipeableViews index={activeStep} onChangeIndex={handleStepChange}>
            {projects.map((project, index) => (
              <Stack key={index} maxWidth={440}>
                {project.imgList.length === 1 ? (
                  <CardMedia
                    sx={{
                      height: 280,
                      borderTopLeftRadius: '10px',
                      borderTopRightRadius: '10px',
                    }}
                    image={project.imgList[0]}
                  />
                ) : (
                  <ImageList
                    rowHeight={140}
                    cols={project.imgList.length > 1 ? 3 : 1}
                    sx={{ mt: 0, mb: 0, overflow: 'hidden' }}
                  >
                    {project.imgList.map((img, idx) => (
                      <ImageListItem key={idx}>
                        <img
                          src={img}
                          loading="lazy"
                          style={{
                            borderRadius: '5px',
                            objectFit: 'cover',
                          }}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                )}

                <CardContent sx={{ bgcolor: 'rgba(15, 23, 42, 0.7)' }}>
                  <Typography gutterBottom variant="h5">
                    {project.title}
                  </Typography>
                  {project.content.map((paragraph, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      color="text.secondary"
                      mb={idx === project.content.length - 1 ? 0 : 2}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                  {project.githubLink && (
                    <IconButton
                      size="small"
                      href={project.githubLink}
                      target="_blank"
                      onClick={() =>
                        trackProjectClick(project.title, project.githubLink)
                      }
                      sx={{
                        mb: -3,
                        color: 'primary.main',
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      {project.alternateIcon ? (
                        project.alternateIcon
                      ) : (
                        <GitHubIcon />
                      )}
                    </IconButton>
                  )}
                </CardContent>
              </Stack>
            ))}
          </SwipeableViews>
          <MobileStepper
            sx={{
              borderBottomLeftRadius: '16px',
              borderBottomRightRadius: '16px',
              bgcolor: 'rgba(15, 23, 42, 0.8)',
              maxWidth: 440,
            }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Paper>
      </Stack>
    </Stack>
  );
};
