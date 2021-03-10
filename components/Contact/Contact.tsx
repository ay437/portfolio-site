/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react';
import Image from 'next/image';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

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
      height: '550px',
      [theme.breakpoints.up('md')]: {
        float: 'right',
        width: '80%',
        height: '700px',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    image: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        marginLeft: '300px',
        width: '250px',
        marginTop: '-50px',
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: '-175px',
        marginTop: '0',
        width: '349px',
      },
    },
    contactWrapper: {
      padding: '25px',
      [theme.breakpoints.up('xs')]: {
        padding: '50px',
      },
      [theme.breakpoints.up('md')]: {
        padding: '0 50px',
      },
    },
    textArea: {
      fontSize: '16px',
      fontFamily: 'Nunito Sans',
      //   color: '#293745',
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
      fontSize: '16px',
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
      background: '#A47F43',
      width: '225px',
      height: '60px',
      border: 'none',
      fontFamily: 'Nunito Sans',
      textTransform: 'uppercase',
      color: '#fff',
      fontSize: '18px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#A47F4380',
      },
      '&:focus': {
        backgroundColor: '#A47F4380',
      },
      '&:active': {
        backgroundColor: '#A47F4380',
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
        <Typography variant="h1" color="primary">
          CONTACT
        </Typography>
        <Typography variant="body1" color="primary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <Typography variant="body1" color="primary">
              Error: {status.info.msg}
            </Typography>
          )}
          {!status.info.error && status.info.msg && (
            <Typography variant="body1" color="primary">
              {status.info.msg}
            </Typography>
          )}
        </main>
      </Box>
    </Box>
  );
};

export default Contact;
