import Form from 'react-bootstrap/Form'
export default function CreateBookmark ({
     createBookmark,
     bookmark,
     handleChange
   }) {
     return (
       <>
         <h2>Create A Bookmark</h2>
         <Form onSubmit={(e) => {
           e.preventDefault()
           createBookmark()
         }}
         >
           <input type='text' value={bookmark.title} name='title' onChange={handleChange} placeholder='Title' />
           <input type='text' value={bookmark.link} name='link' onChange={handleChange} placeholder='Link' />
           <input type='submit' value='Create Bookmark' />
         </Form>
       </>
     )
   }