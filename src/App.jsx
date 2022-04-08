import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import CloudinaryUploadImagePlugin from './upload'
import './App.css';

function App() {
  
  
  return (
    <div className="App">
     <CKEditor
                    editor={ Editor }
                    onReady={ editor => CloudinaryUploadImagePlugin( editor )}
                    config={ {
                      toolbar:{
                        shouldNotGroupWhenFull:true
                      }
                    }
                  }
                    
                    data="<p>Hello from CKEditor 5!</p>"
                    onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log(  data );
                } }
                    
                />
    </div>
  )
}

export default App
