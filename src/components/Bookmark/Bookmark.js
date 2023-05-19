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
    
      <Container className="text-center">

       

        <Card       
         style={{
          float: "top",
              width: "90%",
              backgroundColor: "antiqueWhite",
              verticalAlign: "left",
              flexDirection: 'row',
        height: 90,
        padding: 0
            }} >
          <h2 onClick={() => setShowInput(!showInput)}>{bookmark.title}</h2>

          <input
            ref={inputRef}
            style={{ display: showInput ? 'block' : 'none' ,float: "right"}}
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
          <Card.Body  >
          <Card.Img  className={styles.image}src={bookmark.image} style={{objectFit: "contain"}}  />
          

            <Card.Text 
            className={styles.float}
            style={{position: "absolute", right: 1,flexDirection: "row",flex: 0.1}}
            >
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