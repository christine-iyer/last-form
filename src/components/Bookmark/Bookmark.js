import { useRef, useState } from 'react'
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Bookmark ({
  bookmark,
  updateBookmark,
  deleteBookmark
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Title onClick={() => setShowInput(!showInput)}>{bookmark.title}</Card.Title>

        <input
          ref={inputRef}
          style={{ display: showInput ? 'block' : 'none' }}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const title = inputRef.current.value
              updateBookmark(bookmark._id, { title })
              setShowInput(false)
            }
          }}
          defaultValue={bookmark.title}
        />
        <Card.Img variant="top" src={bookmark.image} />
        <Card.Body>
        
        <Card.Text>
          {bookmark.body} and {bookmark.category}
        </Card.Text>

      </Card.Body>



        <a href={bookmark.link} target='_blank' rel='noreferrer'> {bookmark.link}</a>
        <Button
        variant="primary"
          onClick={() => deleteBookmark(bookmark._id)}
        >
          Delete Me
        </Button>
</Card>
    </>
  )
}