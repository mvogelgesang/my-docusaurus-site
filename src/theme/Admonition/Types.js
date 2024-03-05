import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import { AdmonitionTypes  as sfdxAdmonitions } from 'sfdx-isv/src';

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  ...sfdxAdmonitions
  
};

export default AdmonitionTypes;