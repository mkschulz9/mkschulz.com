import React, { useState, useEffect } from 'react';
import {
  Stack,
  TextField,
  Button,
  Snackbar,
  SnackbarContent,
  LinearProgress,
  Box,
  Paper,
  Typography,
} from '@mui/material';
import background from '../../assets/background.jpg';
import ReCAPTCHA from 'react-google-recaptcha';

export const Feedback: React.FC = () => {
  const [firstName, setFirstName] = useState('None');
  const [email, setEmail] = useState('None');
  const [comments, setComments] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [progress, setProgress] = useState(0);
  const [captchaValue, setCaptchaValue] = useState('');

  const autoHideDuration = 3000;

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCommentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComments(event.target.value);
  };

  const onCaptchaChange = (value: string) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    const apiUrl: string | undefined = (import.meta as any).env
      .VITE_REACT_APP_API_URL;
    console.log('API URL:', apiUrl);

    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      const response = await fetch(`${apiUrl}/feedback`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ feedback: comments }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setFirstName('');
      setEmail('');
      setComments('');
      setOpenSnackbar(true);
      setProgress(0);
    } catch (error) {
      console.error('Feedback Submission Error:', error);
      alert('Failed to submit feedback. Please try again.');
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (openSnackbar) {
      setProgress(0);
      timer = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress < 100) {
            return prevProgress + 100 / (autoHideDuration / 116.5);
          }
          clearInterval(timer);
          return 100;
        });
      }, 100);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [openSnackbar, autoHideDuration]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 1,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 2,
          mt: -2,
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Feedback is Valuable
        </Typography>
        <Typography variant="body1">
          Feel free to leave any comments regarding bugs, potential new
          features, or anything else you think could be improved. Your input is
          greatly appreciated!
        </Typography>
      </Paper>
      <Stack
        spacing={2}
        sx={{
          bgcolor: 'secondary.main',
          p: 2.5,
          borderRadius: '5px',
          width: '90%',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack
            spacing={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <TextField
              label="Name"
              variant="outlined"
              value={firstName}
              onChange={handleFirstNameChange}
              sx={{ width: '90%' }}
            />
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              type="email"
              sx={{ width: '90%' }}
            />
            <TextField
              label="Comments"
              variant="outlined"
              value={comments}
              onChange={handleCommentsChange}
              multiline
              rows={4}
              required
              sx={{ width: '90%' }}
            />
            <ReCAPTCHA
              sitekey="6Le_VxMqAAAAAJgM3z8k5X3TovRt0qnS2guYZrs6"
              onChange={onCaptchaChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: '50%' }}
              disabled={!captchaValue}
            >
              Submit Feedback
            </Button>
          </Stack>
        </form>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={autoHideDuration}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <SnackbarContent
            message="Feedback submitted, thank you!"
            sx={{ backgroundColor: 'primary.main', position: 'relative' }}
            action={
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}
              />
            }
          />
        </Snackbar>
      </Stack>
    </Box>
  );
};
