'use client';

import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useFormStatus } from 'react-dom'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'flex',
    height: '40px',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.primary.main}`,
    textTransform: 'none',
    fontSize: '14px',
    transition: 'all 0.3s',
    '&:focus': {
      outline: 'none',
    },
  },
  spinner: {
    marginLeft: theme.spacing(1),
  },
}));

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  const classes = useStyles();

  return (
    <Button
      type={pending ? 'button' : 'submit'}
      disabled={pending}
      className={classes.button}
      variant="contained"
      color="primary"
    >
      {children}
      {pending && (
        <CircularProgress size={16} className={classes.spinner} />
      )}
      <span aria-live="polite" className="sr-only" role="status">
        {pending ? 'Loading' : 'Submit form'}
      </span>
    </Button>
  );
}
