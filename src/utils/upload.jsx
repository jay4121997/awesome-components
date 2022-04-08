import { CloudinaryUnsigned } from 'puff-puff/CKEditor'
const C_NAME = import.meta.env.VITE_YOUR_CLOUDINARY_NAME
const P_NAME = import.meta.env.VITE_YOUR_UNSIGNED_UPLOAD_PRESET_NAME


const CloudinaryUploadImagePlugin = editor => {
  
  editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
    return new CloudinaryUnsigned( loader, 
      C_NAME, 
      P_NAME, 
      [ 160, 500, 1000, 1052 ]);
  };
}
export default CloudinaryUploadImagePlugin
