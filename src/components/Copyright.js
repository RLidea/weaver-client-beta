import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const url = process.env.URL;
export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href={url}>
        Your Website
      </MuiLink>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
