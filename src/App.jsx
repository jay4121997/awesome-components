import React from "react"
import CKFullEditor from 'rc-ckfulleditor'
import './App.css'

function App() {
   const C_NAME = import.meta.env.VITE_YOUR_CLOUDINARY_NAME
   const P_NAME = import.meta.env.VITE_YOUR_UNSIGNED_UPLOAD_PRESET_NAME
   console.log(P_NAME);

  return (
    <div className="App" style={{width:'800px',margin:'0 auto'}}>
      <CKFullEditor
      config={{
        cloudinary: {
          cloudName: C_NAME ,
          uploadPreset: P_NAME
        },
        codeBlock: {
          languages: [
              { language: 'javascript', label: 'JavaScript' },
              { language: 'css', label: 'CSS' },
              { language: 'html', label: 'HTML' }
          ]
      },
        toolbar:{
          
          items: [
            'removeFormat',
            '|',
            'heading',
            '|',
            'fontSize',
            'fontFamily',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'code',
            'subscript',
            'superscript',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'alignment',
            'indent',
            'outdent',
            '|',
            'link',
            'insertTable',
            'specialCharacters',
            'imageUpload',
            'mediaEmbed',
            '|',
            'highlight',
            'blockQuote',
            'horizontalLine',
            'pageBreak',
            '|',
            'restrictedEditingException',
            '|',
            'undo',
            'redo',
            'codeBlock',
            'source'
          ],
          
          shouldNotGroupWhenFull: true,
          removeItems:['fontFamily',
          'fontColor',
          'fontBackgroundColor',
          'pageBreak',
          'highlight',
          'restrictedEditingException',
        ]
        }
      }}
      onChange={(event, editor) => { 
        const data = editor.getData()
        console.log({ event, editor, data })
      }}
    />
    </div> 
  )
}

export default App
