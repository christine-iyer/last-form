import { useEffect } from 'react';

let cloudinary;
let widget;

const UploadWidget = ({ children, onUpload }) => {

  useEffect(() => {


    if ( !cloudinary ) {
      cloudinary = window.cloudinary;
    }


    function onIdle() {
      if ( !widget ) {
        widget = createWidget();
      }
    }

    'requestIdleCallback' in window ? requestIdleCallback(onIdle) : setTimeout(onIdle, 1);

    // eslint-disable-next-line
  }, []);

  /**
   * createWidget
   * @description Creates a new instance of the Cloudinary widget and stores in a ref
   */

  function createWidget() {

    const options = {
      cloudName: 'dqjhgnivi', // Ex: mycloudname
      uploadPreset: 'crystal' ,// Ex: myuploadpreset
      cropping: true,
      maxImageWidth: 200, 
      
    }

    return cloudinary?.createUploadWidget(options,
      function (error, result) {

        if ( error || result.event === 'success' ) {
          onUpload(error, result, widget);
        }
      }
    );
  }

  /**
   * open
   * @description When triggered, uses the current widget instance to open the upload modal
   */

  function open() {
    if ( !widget ) {
      widget = createWidget();
    }
    widget && widget.open();
  }

  return (
    <>
      {children({ cloudinary, widget, open })}
    </>
  )
}

export default UploadWidget;