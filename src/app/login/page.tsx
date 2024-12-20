'use client';

// Update imports to use specific paths
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ChromeIcon as Google, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';

import { MUIProvider } from '../providers/mui-provider';
import { SubmitButton } from '../submit-button';

const SignInPage = () => {
  const [email, setEmail] = useState('youremail@example.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = decodeURI(searchParams?.get('callbackUrl') ?? '/');
  const onSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const result = await signIn('credentials', {
        email,
        password,
        callbackUrl: callbackUrl ?? '/',
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      }
      if (result?.ok) {
        router.push('/dashboard');
      }
    } catch (err) {
      setError('An error occurred during sign in');
    }
  };

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
                alt='Login illustration'
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
                  Sign In
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                  consectetur adipisicing.
                </Typography>
              </Box>

              <Box
                component='form'
                onSubmit={onSubmitHandler}
                sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
              >
                {!!error && (
                  <Typography color='error' variant='body2'>
                    ERROR: {error}
                  </Typography>
                )}

                <TextField
                  fullWidth
                  id='username'
                  label='Username'
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <TextField
                  fullWidth
                  id='password'
                  label='Password'
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
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
                        Remember me
                      </Typography>
                    }
                  />
                  <Link href='#' style={{ textDecoration: 'none' }}>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      sx={{
                        textDecoration: 'underline',
                        '&:hover': { color: 'text.primary' },
                      }}
                    >
                      Forgot Password
                    </Typography>
                  </Link>
                </Box>

                <SubmitButton type='submit'>Sign In</SubmitButton>

                <Link
                  href='/signup'
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <SubmitButton type='button'>Sign Up</SubmitButton>
                </Link>

                <Box sx={{ position: 'relative', my: 3 }}>
                  <Divider>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      sx={{ px: 2 }}
                    >
                      or login with
                    </Typography>
                  </Divider>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <IconButton
                    sx={{
                      bgcolor: '#3b5998',
                      color: 'white',
                      width: '48px',
                      height: '48px',
                      '&:hover': {
                        bgcolor: '#344e86',
                      },
                    }}
                  >
                    <Facebook />
                  </IconButton>
                  <IconButton
                    sx={{
                      bgcolor: '#1da1f2',
                      color: 'white',
                      width: '48px',
                      height: '48px',
                      '&:hover': {
                        bgcolor: '#0d95e8',
                      },
                    }}
                  >
                    <Twitter />
                  </IconButton>
                  <IconButton
                    sx={{
                      bgcolor: '#ea4335',
                      color: 'white',
                      width: '48px',
                      height: '48px',
                      '&:hover': {
                        bgcolor: '#e82e1e',
                      },
                    }}
                  >
                    <Google />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </MUIProvider>
  );
};

export default SignInPage;
