'use client';

// Update imports to use specific paths
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { z } from 'zod';

import { MUIProvider } from '../providers/mui-provider';
import { saltAndHashPassword, signUpSchema } from '../../lib/zod';

type RegisterFormData = z.infer<typeof signUpSchema>;

const RegisterForm = () => {
  const [error, setError] = useState('');

  async function onSubmitHandler(formData: FormData) {
    try {
      const validatedFields = signUpSchema.parse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
      });

      const { data } = await axios.post('/api/users/exists', {
        email: validatedFields.email,
      });

      if (data.exists) {
        setError('User already exists');
        return;
      }

      const hashedPassword = await saltAndHashPassword(
        validatedFields.password
      );
      await axios.post('/api/users', {
        name: validatedFields.name,
        email: validatedFields.email,
        password: hashedPassword,
      });

      redirect('/signin');
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0].message);
        return;
      }
      setError('Something went wrong. Please try again.');
    }
  }

  return (
    <MUIProvider>
      <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafb', py: 8 }}>
        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: 'center',
              gap: 6,
              justifyContent: 'center',
            }}
          >
            {/* Left side - Image */}
            <Box
              sx={{
                width: '100%',
                maxWidth: '500px',
                display: { xs: 'none', lg: 'block' },
              }}
            >
              <Image
                src='/undraw_remotely_2j6y.svg'
                alt='Registration illustration'
                width={500}
                height={500}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>

            {/* Right side - Form */}
            <Box sx={{ width: '100%', maxWidth: '450px' }}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant='h4'
                  component='h3'
                  sx={{ mb: 1, fontWeight: 'bold' }}
                >
                  Registration
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  Create your account to get started
                </Typography>
              </Box>

              <Box
                component='form'
                action={onSubmitHandler}
                sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
              >
                {!!error && (
                  <Typography color='error' variant='body2'>
                    ERROR: {error}
                  </Typography>
                )}

                <TextField
                  fullWidth
                  name='name'
                  id='name'
                  label='Enter your name'
                  variant='outlined'
                  required
                  sx={{
                    bgcolor: '#edf2f5',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#6c63ff',
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  name='email'
                  id='email'
                  label='Enter your email'
                  type='email'
                  variant='outlined'
                  required
                  sx={{
                    bgcolor: '#edf2f5',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#6c63ff',
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  name='password'
                  id='password'
                  label='Create password'
                  type='password'
                  variant='outlined'
                  required
                  sx={{
                    bgcolor: '#edf2f5',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#6c63ff',
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  id='confirmPassword'
                  label='Confirm password'
                  type='password'
                  variant='outlined'
                  sx={{
                    bgcolor: '#edf2f5',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'transparent',
                      },
                      '&:hover fieldset': {
                        borderColor: 'transparent',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#6c63ff',
                      },
                    },
                  }}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        '&.Mui-checked': {
                          color: '#6c63ff',
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant='body2' color='text.secondary'>
                      I accept all terms & conditions
                    </Typography>
                  }
                />

                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{
                    bgcolor: '#6c63ff',
                    height: '56px',
                    '&:hover': {
                      bgcolor: '#847dff',
                    },
                  }}
                >
                  Register Now
                </Button>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='body2' color='text.secondary'>
                    Already have an account?{' '}
                    <Link href='/login' style={{ textDecoration: 'none' }}>
                      <Typography
                        component='span'
                        variant='body2'
                        sx={{
                          color: '#6c63ff',
                          textDecoration: 'underline',
                          '&:hover': { color: '#847dff' },
                        }}
                      >
                        Login now
                      </Typography>
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </MUIProvider>
  );
};

export default RegisterForm;
