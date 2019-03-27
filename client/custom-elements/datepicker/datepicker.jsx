import React from "react";
import ReactDom from 'react-dom';

import DatePickerCustomElement from "./components/DatePickerCustomElement";


CustomElement.init((element, _context) => {
  const datePicker = (
    <DatePickerCustomElement element={element} customElementApi={CustomElement} />
  );

  ReactDom.render(datePicker, document.querySelector('#reactapp'));
});

CustomElement.setHeight(350);