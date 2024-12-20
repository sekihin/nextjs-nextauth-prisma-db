'use client';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useFormStatus } from 'react-dom';

const baseButtonStyles = styled(Button)(({ theme }) => ({
  height: '56px',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'none',
  fontSize: '14px',
  '&:focus': {
    outline: 'none',
  },
}));

const SignInButton = styled(Button)(({ theme }) => ({
  ...baseButtonStyles,
  backgroundColor: '#6c63ff',
  '&:hover': {
    backgroundColor: '#847dff',
  },
}));

const SignUpButton = styled(Button)(({ theme }) => ({
  ...baseButtonStyles,
  backgroundColor: '#ffffff',
  color: '#6c63ff',
  border: '2px solid #6c63ff',
  '&:hover': {
    backgroundColor: '#f5f4ff',
    borderColor: '#847dff',
    color: '#847dff',
  },
}));

export function SubmitButton({
  children,
  type = 'submit',
}: {
  children: React.ReactNode;
  type?: 'submit' | 'button';
}) {
  const { pending } = useFormStatus();

  return type == 'submit' ? (
    <SignInButton
      fullWidth
      type={pending ? 'button' : type}
      disabled={pending}
      variant='contained'
    >
      {children}
      {pending && <CircularProgress size={16} sx={{ ml: 1 }} />}
      <span aria-live='polite' className='sr-only' role='status'>
        {pending ? 'Loading' : 'Submit form'}
      </span>
    </SignInButton>
  ) : (
    <SignUpButton
      fullWidth
      type={pending ? 'button' : type}
      disabled={pending}
      variant='outlined'
    >
      {children}
      {pending && <CircularProgress size={16} sx={{ ml: 1 }} />}
      <span aria-live='polite' className='sr-only' role='status'>
        {pending ? 'Loading' : 'Submit form'}
      </span>
    </SignUpButton>
  );
}
