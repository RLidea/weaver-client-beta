import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
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
        {t('greeting')}, {process.env.APP_NAME}
      </Typography>
      <StyledButton type="button" onClick={() => i18n.changeLanguage('en')}>
        {t('change-locale-en')}
      </StyledButton>
      <StyledButton type="button" onClick={() => i18n.changeLanguage('ko')}>
        {t('change-locale-ko')}
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

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Index);
