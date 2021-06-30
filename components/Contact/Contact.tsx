/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react';
import Image from 'next/image';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    wrapper: {
      float: 'none',
      width: '100%',
      flexDirection: 'column-reverse',
      justifyContent: 'flex-end',
      height: 'auto',
      [theme.breakpoints.up('sm')]: {
        height: '550px',
      },
      [theme.breakpoints.up('md')]: {
        float: 'right',
        width: '81%',
        height: '700px',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      [theme.breakpoints.up('lg')]: {
        width: '85%',
      },
    },
    image: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        marginLeft: '-175px',
        marginTop: '0',
        width: '349px',
        display: 'flex',
      },
    },
    contactWrapper: {
      padding: '32px',
      [theme.breakpoints.up('xs')]: {
        padding: '50px',
      },
      [theme.breakpoints.up('md')]: {
        padding: '0 50px',
      },
    },
    header: {
      fontWeight: 500,
      marginBottom: '8px',
    },
    textArea: {
      fontSize: '1rem',
      fontFamily: 'Nunito Sans',
      width: 'calc(100% - 28px)',
      padding: '14px',
      color: '#fff',
      background: '#C4C4C4AB',
      border: 'none',
      resize: 'none',
      '&::placeholder': {
        color: '#fff',
      },
      '&::-webkit-input-placeholder': {
        color: '#fff',
      },
      '&::-moz-placeholder': {
        color: '#fff',
      },
      '&:-moz-placeholder': {
        color: '#fff',
      },
      '&:-ms-input-placeholder': {
        color: '#fff',
      },
      '&:focus': {
        outlineColor: 'transparent',
        outlineStyle: 'none',
      },
    },
    textField: {
      fontSize: '1rem',
      fontFamily: 'Nunito Sans',
      background: '#C4C4C4AB',
      border: 'none',
      color: '#fff',
      width: 'calc(100% - 28px)',
      padding: '14px',
      '&::placeholder': {
        color: '#fff',
      },
      '&::-webkit-input-placeholder': {
        color: '#fff',
      },
      '&::-moz-placeholder': {
        color: '#fff',
      },
      '&:-moz-placeholder': {
        color: '#fff',
      },
      '&:-ms-input-placeholder': {
        color: '#fff',
      },
      '&:focus': {
        outlineColor: 'transparent',
        outlineStyle: 'none',
      },
    },
    submit: {
      background: 'linear-gradient(100deg, #654212 35.23%, #A47F43 100.08%)',
      width: '150px',
      height: '40px',
      border: 'none',
      fontFamily: 'Nunito Sans',
      textTransform: 'uppercase',
      color: '#fff',
      fontSize: '1rem',
      cursor: 'pointer',
      [theme.breakpoints.up('sm')]: {
        width: '225px',
        height: '60px',
        fontSize: '1.125rem',
      },
      '&:hover': {
        background:
          'linear-gradient(100deg, #65421297 35.23%, #A47F43 100.08%)',
      },
      '&:focus': {
        background:
          'linear-gradient(100deg, #65421297 35.23%, #A47F43 100.08%)',
      },
      '&:active': {
        background:
          'linear-gradient(100deg, #65421297 35.23%, #A47F43 100.08%)',
      },
    },
  })
);

const Contact = () => {
  const classes = useStyles();

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: null },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#fff"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="50px"
      className={classes.wrapper}
    >
      <Box className={classes.image}>
        <Image
          src="/contact-profile.svg"
          alt="Gmail"
          width={349}
          height={512}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        className={classes.contactWrapper}
      >
        <Typography variant="h2" color="primary" className={classes.header}>
          CONTACT
        </Typography>
        <Typography variant="body2" color="primary">
          Get in touch to find out about any of the services I offer or would to
          like to find out anything else!
        </Typography>
        <br />
        <main>
          <form onSubmit={handleOnSubmit}>
            <input
              id="name"
              placeholder="Name"
              type="name"
              onChange={handleOnChange}
              required
              value={inputs.name}
              className={classes.textField}
            />
            <br />
            <br />
            <input
              id="email"
              placeholder="Email"
              type="email"
              onChange={handleOnChange}
              required
              value={inputs.email}
              className={classes.textField}
            />
            <br />
            <br />
            <textarea
              id="message"
              placeholder="Message"
              onChange={handleOnChange}
              required
              value={inputs.message}
              className={classes.textArea}
            />
            <br />
            <br />
            <Box display="flex" flexDirection="row" justifyContent="center">
              <button
                type="submit"
                disabled={status.submitting}
                className={classes.submit}
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Submit'
                    : 'Submitted'
                  : 'Submitting...'}
              </button>
            </Box>
          </form>
          {status.info.error && (
            <Typography variant="body2" color="primary">
              Error: {status.info.msg}
            </Typography>
          )}
          {!status.info.error && status.info.msg && (
            <Typography variant="body2" color="primary">
              {status.info.msg}
            </Typography>
          )}
        </main>
      </Box>
    </Box>
  );
};

export default Contact;
