import Editor from 'tinymce/core/api/Editor';
import Settings from '../api/Settings';

const handleSpace = function (editor) {
  parseCurrentLine(editor);
};

const handleEnter = function (editor) {
  parseCurrentLine(editor);
};

const handleArrowRight = function (editor) {
  parseCurrentLine(editor);
};

const formatNode = function (editor, elm) {
  const formatLinkTarget = Settings.getFormatLinkTarget(editor);
  const formatLinkRel = Settings.getFormatLinkRel(editor);
  const attrTarget = elm.getAttribute('target');
  const attrRel = elm.getAttribute('rel');
  let changed = false;
  if (formatLinkTarget !== attrTarget) {
    editor.dom.setAttrib(elm, 'target', formatLinkTarget);
    changed = true;
  }
  if (formatLinkRel !== attrRel) {
    editor.dom.setAttrib(elm, 'rel', formatLinkRel);
    changed = true;
  }

  if (changed) {
    editor.nodeChanged();
  }
};

const parseCurrentLine = function (editor) {
  const currentNode = editor.selection.getNode();
  if (!currentNode) {
    return;
  }

  if (currentNode.tagName === 'A') {
    formatNode(editor, currentNode);
  } else {
    const nodeList = currentNode.querySelectorAll('a');
    for (let i = 0; i < nodeList.length; i++) {
      const element = nodeList[i];
      formatNode(editor, element);
    }
  }
};

const setup = function (editor: Editor) {

  editor.on('keydown', function (e) {
    if (e.keyCode === 13) {
      return handleEnter(editor);
    }
  });

  editor.on('keydown', function (e) {
    if (e.keyCode === 39) {
      return handleArrowRight(editor);
    }
  });

  editor.on('keyup', function (e) {
    if (e.keyCode === 32) {
      return handleSpace(editor);
    }
  });

  // TODO: check  mceInsertContent a tag
  // editor.on('ExecCommand', function (e) {
  //   if (e.command === 'mceInsertContent' && e.value === 'a tag') {
  //   }
  // });
};

export default {
  setup
};