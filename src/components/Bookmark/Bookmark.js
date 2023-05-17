import { useRef, useState } from 'react'
import { Card, Button, Container, Placeholder, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Like from '../Like/Like';
import styles from '../../App.module.scss'
export default function Bookmark({
  bookmark,
  updateBookmark,
  deleteBookmark
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)

  return (
    <div className={styles.div}>
    
      <Container className={styles.container} >

       

        <Card className={styles.card} >
          <h2 onClick={() => setShowInput(!showInput)}>{bookmark.title}</h2>

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
          <Card.Img  src={bookmark.image}  />
          <Card.Body>

            <Card.Text>
              {bookmark.body} and {bookmark.category}
              <a href={bookmark.link} target='_blank' rel='noreferrer'> {bookmark.link}</a>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => deleteBookmark(bookmark._id)}
            >
              Cancel
            </Button>
          </Card.Body>
       
        </Card>

      </Container>
    </div>
  )
}