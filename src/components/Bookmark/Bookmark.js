import { useRef, useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../App.module.scss'
export default function Bookmark({
  bookmark,
  updateBookmark,
  deleteBookmark
}) {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef(null)
  const columnsPerRow = 4;
  return (
    <>
    
      <Container style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>

        <Col className={styles.column}>

        <Card className="e-card e-card-horizontal" style={{ width: `100px` }} >
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
          <Card.Img variant="top" src={bookmark.image} style={{ height: `180px` }} />
          <Card.Body>

            <Card.Text>
              {bookmark.body} and {bookmark.category}
              <a href={bookmark.link} target='_blank' rel='noreferrer'> {bookmark.link}</a>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => deleteBookmark(bookmark._id)}
            >
              Delete Me
            </Button>
          </Card.Body>
        </Card>
        </Col>

      </Container>
    </>
  )
}