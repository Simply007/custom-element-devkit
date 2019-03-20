
import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import { Editor } from '@toast-ui/react-editor';
import 'tui-editor/dist/tui-editor-extChart';



class ToastUiEditor extends React.Component {

  editorRef = React.createRef();

  storeValue = () => {
    console.log((this.editorRef.current as any).getInstance());
  };

  render() {
    return (
      <>
        <Editor
          usageStatistics={false}
          ref={this.editorRef}
          previewStyle="vertical"
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
