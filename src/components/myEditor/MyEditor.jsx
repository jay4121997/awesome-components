import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import CloudinaryUploadImagePlugin from '../../utils/upload.jsx'
import { useState } from 'react' 
import './MyEditor.css'

const I_API = import.meta.env.VITE_IFRAME

var IFRAME_SRC = '//cdn.iframe.ly/api/iframe';
const config = {
  toolbar:{
    items:[
			'heading',
			'|',
			'bold',
			'italic',
      'underline',
      'alignment',
      '|',
      'imageInsert',
			'link',
      '|',
			'bulletedList',
			'numberedList',
			'|',
      'insertTable',
      '|',
      'sourceEditing',
      // 'htmlEmbed',
      'codeBlock',
      '|',
      'specialCharacters',
      'subscript',
      'superscript',
      '|',
      'undo',
      'redo',
      'outdent',
      'indent',
      'blockQuote',
      'mediaEmbed',
			// '|',
			// 'imageUpload',
			// 'mediaEmbed',
			// 'fontSize',
			// 'removeFormat',
			// 'strikethrough',
      
		],
    shouldNotGroupWhenFull:true
  },
  
  heading: {
    options: [
      { model: 'paragraph', title: 'Text', view: {name: 'p',classes: 'blog-text-paragraph'}, classes:'blog-text-paragraph' },
      {model: 'Title Heading',view: {name: 'h1',classes: 'blog-title-heading'},title: 'Title Heading',},
      {model: 'Sub Heading',view: {name: 'h2',classes: 'blog-title-sub-heading'},title: 'Sub Heading', converterPriority:'high' },

    ]
  },
  
  codeBlock: {
    languages: [
        { language: 'plaintext', label: 'Plain text', class: 'code-block-text' },
        { language: 'javascript', label: 'JavaScript', class: 'js javascript js-code code-block-js language-javascript' },
        { language: 'JSX', label: 'JSX', class: 'jsx jsx-code code-block-jsx language-jsx' },
        { language: 'typescript', label: 'TypeScript', class: 'typescript typescript-code code-block-typescript language-typescript' },
        { language: 'TSX', label: 'TSX', class: 'tsx tsx-code code-block-tsx language-tsx' },
        { language: 'css', label: 'CSS', class: 'css css-code code-block-css language-css' },
        { language: 'html', label: 'HTML', class: 'html html-code code-block-html language-html' },
        { language: 'python', label: 'Python', class: 'python python-code code-block-python language-python' },
]
  },
  htmlSupport: {
    allow: [
        {
          name: /^(div|section|article|p|h[1-6]|span|hr|ol|ul|li|sup|sub)$/,
          styles: true,
          attributes: true,
        },
       ]
  },
  mediaEmbed: {
    previewsInData: false,
    providers: [
        {
        name: 'iframely previews',
        url: /.+/,
        html: match => {
              console.log('match')
                const url = match[ 0 ];
                var iframeUrl = IFRAME_SRC + '?app=1&api_key=' + I_API + '&url=' + encodeURIComponent(url);
                return (
                    // If you need, set maxwidth and other styles for 'iframely-embed' class - it's yours to customize
                    '<div class="iframely-embed">' +
                        '<div class="iframely-responsive">' +
                            `<iframe src="${ iframeUrl }" ` +
                                'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
                            '</iframe>' +
                        '</div>' +
                    '</div>'
                );
            }
        }
    ]
},
//   htmlEmbed: {
//     showPreviews: true,
//     sanitizeHtml: ( inputHtml ) => {
//         // Strip unsafe elements and attributes, e.g.:
//         // the `<script>` elements and `on*` attributes.
//         const outputHtml = DOMPurify.sanitize( inputHtml );

//         return {
//             html: outputHtml,
//             // true or false depending on whether the sanitizer stripped anything.
//             hasChanged: TrustedScript
//         };
//     }
// }
}


const MyEditor = (props) => {
  const [editorState, setEditorState] = useState(props.editorState || null) 
  return (
    <div className='myEditor'>
        <CKEditor
                    editor={ Editor }
                    onReady={ editor => {
                      CloudinaryUploadImagePlugin( editor )
                      }
                    }
                  
                    config={ config}
                    data={ editorState }
                    onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log(  data );
                } }
                    
                />
    </div>
  )
}

export default MyEditor