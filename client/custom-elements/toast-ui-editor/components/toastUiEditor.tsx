
import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import { Editor } from '@toast-ui/react-editor';

class ToastUiEditor extends React.Component {

  render() {
    return (
      <Editor
        usageStatistics={false}
      />
    );
  }
}

export default ToastUiEditor;
