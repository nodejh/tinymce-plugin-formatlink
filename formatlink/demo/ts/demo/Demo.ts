declare let tinymce: any;

tinymce.init({
  selector: 'textarea.tinymce',
  plugins: 'autolink link formatlink code paste',
  toolbar: 'autolink link formatlink code paste',
  height: 600,
});

export {};