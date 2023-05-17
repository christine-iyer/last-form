import Bookmark from '../Bookmark/Bookmark'
import Like from '../Like/Like';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../../App.module.scss'
import Container from 'react-bootstrap/Container'
export default function BookmarkList ({
  bookmarks,
  updateBookmark,
  deleteBookmark, 
  likeBookmark
}) {
  return (
   

    <div className={styles.container}  >
      {
            bookmarks.length
              ? bookmarks.map(bookmark => (
                <Bookmark
                  key={bookmark._id}
                  bookmark={bookmark}
                  updateBookmark={updateBookmark}
                  deleteBookmark={deleteBookmark}
                  likeBookmark={likeBookmark}

                />
                
              ))
              : <>
                <h2>No Bookmarks Yet... Add one in the Form Above</h2>
                </>
        }
    </div>


  )
}