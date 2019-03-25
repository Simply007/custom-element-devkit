
import React from 'react';

import { Editor, Viewer } from '@toast-ui/react-editor';

import 'tui-editor/dist/tui-editor-extChart';
import 'tui-editor/dist/tui-editor-extUML';
import 'tui-editor/dist/tui-editor-extTable';
import 'tui-editor/dist/tui-editor-extColorSyntax';
import 'tui-editor/dist/tui-editor-extScrollSync';
import 'tui-editor/dist/tui-editor-Viewer-all';

import 'tui-editor/dist/tui-editor-contents.min.css';
import 'codemirror/lib/codemirror.css';
import 'tui-chart/dist/tui-chart.min.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-color-picker/dist/tui-color-picker.min.css';

import './ToastUiEditor.css';

interface ToastUiEditorProps {
  initialValue: String;
  disabled: Boolean;
  height: String;
  CustomElementApi: any;
}

interface ToastUiEditorState {
  disabled: Boolean;
  value: String;
}

class ToastUiEditor extends React.Component<ToastUiEditorProps, ToastUiEditorState> {

  editorRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      disabled: props.disabled,
      value: props.initialValue
    };

    props.CustomElementApi.onDisabledChanged((disabled) => {
      this.setState(() => ({
        disabled
      }));
    });
  }

  storeValue = () => {
    const newValue = (this.editorRef.current as any).getInstance().getValue();
    this.setState(() => ({
      value: newValue
    }));
    this.props.CustomElementApi.setValue(newValue);
  }

  render() {
    if (this.state.disabled) {
      console.log(this);
      return (
        <Viewer
          usageStatistics={false}
          initialValue={this.state.value}
          height={this.props.height}
          exts={['table', 'uml']}
        />
      );
    }

    return (
      <Editor
        usageStatistics={false}
        ref={this.editorRef}
        initialValue={this.state.value}
        onChange={this.storeValue}
        height={this.props.height}
        viewer
        // previewStyle="vertical"
        exts={[
          'chart',
          'scrollSync',
          'colorSyntax',
          'uml',
          'mark',
          'table'
        ]}
      />
    );
  }
}

export default ToastUiEditor;
