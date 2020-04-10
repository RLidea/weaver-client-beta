import React from 'react';
import { withTranslation } from '../i18n';

const Error = ({ t }) => <div>{t('error')}</div>;

Error.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Error);
