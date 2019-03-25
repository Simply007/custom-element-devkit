import React from 'react';
import ReactDom from 'react-dom';

import '../../shared/custom-module.css';

import ToastUiEditor from './components/toastUiEditor';


import { tryParseJSON } from '../../../common/utils/utils';

CustomElement.init((element, _context) => {
  // const value = tryParseJSON(element.value || '', {});
  CustomElement.setHeight(((element.config || {}) as any).height || 400);

  // CustomElement.setValue(JSON.stringify(value));

  const editor = (
    <ToastUiEditor/>
  );

  ReactDom.render(editor, document.querySelector('#reactapp'));
});

