import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import UploadWidget from './UploadWidget';
import Card from 'react-bootstrap/Card'
export default function CreateUploadImage({setBookmark}) {
     const [url, updateUrl] = useState("https://lolo.com");
     const [error, updateError] = useState();
     function handleOnUpload(error, result, widget) {
          if (error) {
              updateError(error);
              widget.close({
                  quiet: true
              });
              return;
          }
          console.dir(result);
          updateUrl(result?.info?.secure_url);
          setBookmark({
             title: '',
             category: '',
             image: result?.info?.secure_url,
             body: ''
         })
     
     
          console.dir(url);
      }
      return(
          <div className="container">
          <h2>Unsigned with Upload Preset</h2>
          <UploadWidget onUpload={handleOnUpload}>
              {({ open }) => {
                  function handleOnClick(e) {
                      e.preventDefault();
                      open();
                  }
                  return (
                      <button onClick={handleOnClick}>
                          Upload an Image
                      </button>
                  )
              }}
          </UploadWidget>

          {error && <p>{error}</p>}

          {url && (
              <Card key={url._id} className="card" style={{ width: '18rem' }}
              >
                  <Card.Img variant="top" src={url}id="uploadedimage" ></Card.Img>
                  <Card.Body className="url">{url}</Card.Body>
              </Card>
          )}
      </div>


      )
}

