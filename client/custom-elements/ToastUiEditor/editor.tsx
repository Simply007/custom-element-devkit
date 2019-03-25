import React from 'react';
import ReactDom from 'react-dom';

import '../../shared/custom-module.css';

import ToastUiEditor from './components/toastUiEditor';


import { tryParseJSON } from '../../../common/utils/utils';

CustomElement.init((element, _context) => {
  const height = ((element.config || {}) as any).height || 400;
  CustomElement.setHeight(height);

  const editor = (
    <ToastUiEditor
      initialValue={element.value}
      disabled={element.disabled}
      CustomElementApi={CustomElement}
      height={`${height}px`}
    />
  );

  ReactDom.render(editor, document.querySelector('#reactapp'));
});

