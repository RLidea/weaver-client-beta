import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';
import ProTip from '@components/ProTip';
import Link from '@components/Link';
import Copyright from '@components/Copyright';
import { withTranslation } from '../i18n';

const StyledButton = styled(Button)`
  background: black;
  color: white;
  &: hover {
    background: gray;
  }
  margin: 1px;
`;

const Index = ({ t, i18n }) => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('greeting')}
        ,
        {process.env.APP_NAME}
      </Typography>
      <StyledButton type="button" onClick={() => i18n.changeLanguage('en')}>
        {t('locale:en')}
      </StyledButton>
      <StyledButton type="button" onClick={() => i18n.changeLanguage('ko')}>
        {t('locale:ko')}
      </StyledButton>
      <br />
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
      <ProTip />
      <Copyright />
    </Box>
  </Container>
);

export default withTranslation('common')(Index);
