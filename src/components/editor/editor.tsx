import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, convertToRaw, convertFromRaw } from 'draft-js';
import { isAdmin } from '../../utils/utils';

export default function TextEditor({ data }) {
  const [editorState, setEditorState] = useState(
    data ? EditorState.createWithContent(convertFromRaw(JSON.parse(data))) : EditorState.createEmpty()
  );
  const [adminMode, setAdminMode] = useState(false);
  const [session, loading] = useSession();
  const [editing, setEditing] = useState(false);

  const editor = useRef(null);

  const focus = () => {
    if (editor.current) editor.current.focus();
  };

  const handleKeyCommand = useCallback(
    (command, editorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        setEditorState(newState);
        return 'handled';
      }
      return 'not-handled';
    },
    [editorState, setEditorState]
  );

  const mapKeyToEditorCommand = useCallback(
    (e) => {
      switch (e.keyCode) {
        case 9: // TAB
          const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
          if (newEditorState !== editorState) {
            setEditorState(newEditorState);
          }
          return null;
      }
      return getDefaultKeyBinding(e);
    },
    [editorState, setEditorState]
  );

  const saveData = () => {
    console.log('data', JSON.stringify(convertToRaw(editorState.getCurrentContent())));
    fetch('/api/data', {
      method: 'POST',
      body: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
    }).then(() => {
      setEditing(false);
    });
  };

  // If the user changes block type before entering any text, we can
  // either style the placeholder or hide it. Let's just hide it now.
  let className = 'RichEditor-editor';
  var contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      className += ' RichEditor-hidePlaceholder';
    }
  }

  useEffect(() => {
    if (session) {
      isAdmin(session) ? setAdminMode(true) : setAdminMode(false);
    }
  });

  return (
    <div>
      <div className='RichEditor-root'>
        {editing && (
          <React.Fragment>
            <BlockStyleControls
              editorState={editorState}
              onToggle={(blockType) => {
                const newState = RichUtils.toggleBlockType(editorState, blockType);
                setEditorState(newState);
              }}
            />
            <InlineStyleControls
              editorState={editorState}
              onToggle={(inlineStyle) => {
                const newState = RichUtils.toggleInlineStyle(editorState, inlineStyle);
                setEditorState(newState);
              }}
            />
          </React.Fragment>
        )}

        {!editing && adminMode && (
          <span className='uk-inline' data-uk-icon='file-edit' onClick={() => setEditing(true)}></span>
        )}

        {editing && (
          <div className='uk-width-1-3 uk-flex uk-flex-around'>
            <span
              className='uk-inline uk-margin-right-medium'
              data-uk-icon='close'
              onClick={() => setEditing(false)}
            ></span>
            <span
              className='uk-inline'
              data-uk-icon='trash'
              onClick={() => setEditorState(EditorState.createEmpty())}
            ></span>
            <span className='uk-inline' data-uk-icon='push' onClick={() => saveData()}></span>
          </div>
        )}

        <div className={className} onClick={focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={mapKeyToEditorCommand}
            onChange={setEditorState}
            readOnly={adminMode && editing ? false : true}
            ref={editor}
            spellCheck={true}
            textAlignment={'right'}
          />
        </div>
      </div>
    </div>
  );
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}

function StyleButton({ onToggle, active, label, style }) {
  let className = 'RichEditor-styleButton';
  if (active) {
    className += ' RichEditor-activeButton';
  }

  return (
    <span
      className={className}
      onMouseDown={(e) => {
        e.preventDefault();
        onToggle(style);
      }}
    >
      {label}
    </span>
  );
}

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
];

function BlockStyleControls({ editorState, onToggle }) {
  const selection = editorState.getSelection();
  const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();

  return (
    <div className='RichEditor-controls'>
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
}

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

function InlineStyleControls({ editorState, onToggle }) {
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <div className='RichEditor-controls'>
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
}
