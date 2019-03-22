
import React from 'react';

import { Editor } from '@toast-ui/react-editor';

import 'tui-editor/dist/tui-editor-extChart';
import 'tui-editor/dist/tui-editor-extUML';
import 'tui-editor/dist/tui-editor-extTable';
import 'tui-editor/dist/tui-editor-extColorSyntax';
import 'tui-editor/dist/tui-editor-extScrollSync';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-color-picker/dist/tui-color-picker.min.css';

import './ToastUiEditor.css';


class ToastUiEditor extends React.Component {

  editorRef = React.createRef();

  storeValue = () => {
    console.log((this.editorRef.current as any).getInstance().getValue());
  };

  render() {
    return (
      <>
        <Editor
          usageStatistics={false}
          ref={this.editorRef}
          initialValue="Ahoy"
          onChange={this.storeValue}
          exts={[
            'chart',
            'scrollSync',
            'colorSyntax',
            'uml',
            'mark',
            'table'
          ]}
        />
      </>
    );
  }
}

export default ToastUiEditor;
