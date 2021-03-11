import React from 'react';
import Typography from '@material-ui/core/Typography';
import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <Typography variant="body1" color="primary">
      <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    </Typography>
  );
}
