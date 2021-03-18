/* eslint-disable react/prop-types */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const fullDate: string = dateString;
  const date = parseISO(fullDate);
  return (
    <Typography variant="body2" color="primary">
      <time dateTime={fullDate}>{format(date, 'yyyy')}</time>
    </Typography>
  );
}
