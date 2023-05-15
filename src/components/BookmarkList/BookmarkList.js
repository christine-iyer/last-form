import Bookmark from '../Bookmark/Bookmark'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../../App.module.scss'
import Container from 'react-bootstrap/Container'
export default function BookmarkList ({
  bookmarks,
  updateBookmark,
  deleteBookmark
}) {
  return (
    
    <div >
    <Card >
      {
            bookmarks.length
              ? bookmarks.map(bookmark => (
                <Bookmark
                  key={bookmark._id}
                  bookmark={bookmark}
                  updateBookmark={updateBookmark}
                  deleteBookmark={deleteBookmark}
                />
              ))
              : <>
                <h2>No Bookmarks Yet... Add one in the Form Above</h2>
                </>
        }
    </Card>
    </div>
  )
}