import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import CloudinaryUploadImagePlugin from '../../utils/upload.jsx'
import {useState} from 'react' 
import './MyEditor.css'

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
      // { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      // { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
      // { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
      {model: 'Text',view: {name: 'p',classes: 'blog-text-paragraph'},title: 'Text',},
      {model: 'Title Heading',view: {name: 'h1',classes: 'blog-title-heading'},title: 'Title Heading',},
      {model: 'Sub Heading',view: {name: 'h2',classes: 'blog-title-sub-heading'},title: 'Sub Heading', converterPriority:'high' },

    ]
  },
  htmlSupport: {
    disallow: [ {
      name: 'script'
  }, ]
},
  codeBlock: {
    languages: [
        // Do not render the CSS class for the plain text code blocks.
        { language: 'plaintext', label: 'Plain text', class: 'code-block-text' },
        { language: 'javascript', label: 'JavaScript', class: 'js javascript js-code code-block-js language-javascript' },
        { language: 'JSX', label: 'JSX', class: 'jsx jsx-code code-block-jsx language-jsx' },
        { language: 'typescript', label: 'TypeScript', class: 'typescript typescript-code code-block-typescript language-typescript' },
        { language: 'TSX', label: 'TSX', class: 'tsx tsx-code code-block-tsx language-tsx' },
        { language: 'css', label: 'CSS', class: 'css css-code code-block-css language-css' },
        { language: 'html', label: 'HTML', class: 'html html-code code-block-html language-html' },
        { language: 'python', label: 'Python', class: 'python python-code code-block-python language-python' },
]
}
}


const MyEditor = (props) => {
  const [editorState, setEditorState] = useState(props.editorState || null) 
  return (
    <div className='myEditor'>
        <CKEditor
                    editor={ Editor }
                    onReady={ editor => {
                      CloudinaryUploadImagePlugin( editor )
                      editor.execute( 'heading', { value: 'Text' } );
                      }
                    }
                  onFocus={ ( event, editor ) => {
                    editor.execute( 'heading', { value: 'Text' } );
                  } }
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