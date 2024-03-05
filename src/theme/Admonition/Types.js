import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

import BrowserWindow from './Type/BrowserWindow';
import CommandWithDetails from './Type/CommandWithDetails';
import DetailSection from './Type/DetailSection';
import DetailSectionDanger from './Type/DetailSectionDanger';
import DetailSectionNote from './Type/DetailSectionNote';
import DetailSectionTip from './Type/DetailSectionTip';
import DetailSectionWarning from './Type/DetailSectionWarning';
import ImageWithDetails from './Type/ImageWithDetails';
import StepByStep from './Type/StepByStep';




const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  'browser-window': BrowserWindow,
  'command-with-details': CommandWithDetails,
  'detail': DetailSection,
  'detail-danger': DetailSectionDanger,
  'detail-info': DetailSection,
  'detail-note': DetailSectionNote,
  'detail-tip': DetailSectionTip,
  'detail-warning': DetailSectionWarning,
  'image-with-details': ImageWithDetails,
  'step-by-step': StepByStep,
};

export default AdmonitionTypes;