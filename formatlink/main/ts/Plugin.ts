import PluginManager from 'tinymce/core/api/PluginManager';
import Keys from './core/Keys';

export default function () {
  PluginManager.add('formatlink', function (editor) {
    Keys.setup(editor);
  });
}
