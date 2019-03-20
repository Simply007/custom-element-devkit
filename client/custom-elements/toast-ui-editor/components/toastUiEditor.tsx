
import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import Editor from '@toast-ui/react-editor';

interface ToastUiEditorProps {
}

interface ToastUiEditorState {
}

export default class ToastUiEditor extends React.Component<ToastUiEditorProps, ToastUiEditorState> {

  render() {
    return (
      <Editor
        previewStyle="vertical"
        height="400px"
        initialEditType="markdown"
        initialValue="hello"
      />
    );
  }
}
