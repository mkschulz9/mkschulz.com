import React, { useState, useEffect } from 'react';
import {
  Stack,
  TextField,
  Button,
  Snackbar,
  SnackbarContent,
  LinearProgress,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  CircularProgress,
  Alert,
  AlertTitle,
} from '@mui/material';
import Turnstile from 'react-turnstile';
import background from '../../assets/background_feedback.png';

export const Feedback: React.FC = () => {
  const theme = useTheme();
  const [feedback, setFeedback] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [progress, setProgress] = useState(0);
  const [captchaValue, setCaptchaValue] = useState('');
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorProgress, setErrorProgress] = useState(0);
  const [inputError, setInputError] = useState('');
  const autoHideDuration = 3000;

  const handleFeedbackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(event.target.value);
    if (event.target.value.trim().length < 10) {
      setInputError('Feedback must be at least 10 characters long.');
    } else {
      setInputError('');
    }
  };

  const onCaptchaChange = (token: string) => {
    setCaptchaValue(token);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    let snackbarTimer: NodeJS.Timeout | undefined;
    let errorTimer: NodeJS.Timeout | undefined;

    if (openSnackbar) {
      setProgress(0);
      snackbarTimer = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress < 100) {
            return prevProgress + 100 / (autoHideDuration / 116.5);
          }
          clearInterval(snackbarTimer);
          return 100;
        });
      }, 100);
    }

    if (errorMessage) {
      setErrorProgress(0);
      errorTimer = setInterval(() => {
        setErrorProgress(prevProgress => {
          if (prevProgress < 100) {
            return prevProgress + 100 / (20000 / 116.5); // 15 seconds
          }
          clearInterval(errorTimer);
          setErrorMessage('');
          return 100;
        });
      }, 100);
    }

    return () => {
      if (snackbarTimer) {
        clearInterval(snackbarTimer);
        setProgress(0);
      }
      if (errorTimer) {
        clearInterval(errorTimer);
        setErrorProgress(0);
      }
    };
  }, [openSnackbar, errorMessage, autoHideDuration]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (feedback.trim().length < 10) {
      setErrorMessage('Feedback must be at least 10 characters long.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    const apiUrl =
      import.meta.env.VITE_API_URL ||
      'https://mkschulz.us-east-1.elasticbeanstalk.com';

    console.log('API URL: ', import.meta.env.VITE_API_URL);

    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      const response = await fetch(`${apiUrl}/feedback`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ feedback, token: captchaValue }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      setFeedback('');
      setOpenSnackbar(true);
    } catch (error: any) {
      console.error('Feedback Submission Error:', error);
      setErrorMessage(`Failed to submit feedback: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 2,
          mt: -2,
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          color: 'white',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Feedback is Valuable
        </Typography>
        <Typography variant="body1">
          Feel free to leave any comments regarding bugs, potential new
          features, or anything else you think could be improved. Your input is
          greatly appreciated!
        </Typography>
      </Paper>
      <Stack alignItems="center">
        <Paper
          elevation={3}
          sx={{
            bgcolor: 'secondary.main',
            p: 2.5,
            borderRadius: '10px',
            width: '80%',
            position: 'relative',
          }}
        >
          {loading && (
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: 1,
              }}
            >
              <CircularProgress />
            </Stack>
          )}
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <TextField
                label="Feedback"
                variant="outlined"
                value={feedback}
                onChange={handleFeedbackChange}
                multiline
                rows={4}
                required
                error={!!inputError}
                helperText={inputError}
                sx={{ width: '90%' }}
              />
              {errorMessage && (
                <Alert
                  severity="error"
                  sx={{ width: '90%', position: 'relative' }}
                >
                  <AlertTitle>Error</AlertTitle>
                  {errorMessage}
                  <LinearProgress
                    variant="determinate"
                    value={errorProgress}
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                    }}
                  />
                </Alert>
              )}
              <Turnstile
                sitekey="0x4AAAAAAAgKJLosto7S8Tg2"
                onVerify={onCaptchaChange}
                theme="light"
                size={isXs ? 'compact' : 'normal'}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: '50%' }}
                //disabled={!!(!captchaValue || loading || inputError)}
              >
                Submit
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
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                  }}
                />
              }
            />
          </Snackbar>
        </Paper>
      </Stack>
    </Stack>
  );
};
