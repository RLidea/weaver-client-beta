import React from 'react';
import { withTranslation } from '../i18n';

const Error = ({ t }) => <div>{t('error')}</div>;

export default withTranslation('common')(Error);
