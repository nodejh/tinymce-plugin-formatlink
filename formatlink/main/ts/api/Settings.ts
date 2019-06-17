const getFormatLinkTarget = function (editor) {
  return editor.getParam('formatlink_attr_target', '_blank');
};

const getFormatLinkRel = function (editor) {
  return editor.getParam('formatlink_attr_rel', 'noopener noreferrer');
};

export default {
  getFormatLinkTarget,
  getFormatLinkRel
};