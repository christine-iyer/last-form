import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Auth from './components/Auth/Auth'

import CreateBookmark from './components/CreateBookmark/CreateBookmark'
import BookmarkList from './components/BookmarkList/BookmarkList'
import { Card,Button, Form, Row, Col } from 'react-bootstrap'
import { Cloudinary } from "@cloudinary/url-gen";
import UploadWidget from './components/UploadWidget/UploadWidget'


export default function App() {
 
  const handleChangeAuth = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  const handleChange = (event) => {
    setBookmark({ ...bookmark, [event.target.name]: event.target.value })
  }
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    name: ''
  })
  const [url, updateUrl] = useState("https://lolo.com");
  const [error, updateError] = useState();

  const [bookmark, setBookmark] = useState({
    title: '',
    category: '',
    image: '',
    body: ''
  })
  const [bookmarks, setBookmarks] = useState([])
  const [showSignUp, setShowSignUp] = useState(true)
  const [user, setUser] = useState(null)

  const [token, setToken] = useState('')
  const login = async () => {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      })
      const tokenResponse = await response.json()
      setToken(tokenResponse)
      localStorage.setItem('token', JSON.stringify(tokenResponse))
    } catch (error) {
      console.error(error)
    }
  }
  const signUp = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...credentials })
      })
      const tokenResponse = await response.json()
      setToken(tokenResponse)
      localStorage.setItem('token', JSON.stringify(tokenResponse))
    } catch (error) {
      console.error(error)
    }
  }
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
  const createBookmark = async () => {
    try {
      const response = await fetch('/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ ...bookmark })
      })
      const data = await response.json()
      setBookmarks([data, ...bookmarks])
    } catch (error) {
      console.error(error)
    } finally {
      setBookmark({
        title: '',
        category: '',
        image: '',
        body: ''
      })
    }
  }
  const listBookmarksByUser = async () => {
    try {
      const response = await fetch('/api/users/bookmarks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      const data = await response.json()
      setBookmarks(data)
    } catch (error) {
      console.error(error)
    }
  }
  const deleteBookmark = async (id) => {
    try {
      const response = await fetch(`/api/bookmarks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      const data = await response.json()
      const bookmarksCopy = [...bookmarks]
      const index = bookmarksCopy.findIndex(bookmark => id === bookmarks._id)
      bookmarksCopy.splice(index, 1)
      setBookmarks(bookmarksCopy)
    } catch (error) {
      console.error(error)
    }
  }
  const updateBookmark = async (id, updatedData) => {
    try {
      const response = await fetch(`/api/bookmarks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
      })
      const data = await response.json()
      const bookmarksCopy = [...bookmarks]
      const index = bookmarksCopy.findIndex(bookmark => id === bookmarks._id)
      bookmarksCopy[index] = { ...bookmarksCopy[index], ...updatedData }
      setBookmarks(bookmarksCopy)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const tokenData = localStorage.getItem('token')
    if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
      listBookmarksByUser()
    }
  }, [])

  useEffect(() => {
    const tokenData = localStorage.getItem('token')
    if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
      setToken(JSON.parse(tokenData))
    }
  }, [])
  return (
    <>
      <Auth
        login={login}
        credentials={credentials}
        handleChangeAuth={handleChangeAuth}
        signUp={signUp}
      />


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
      
      <CreateBookmark
        createBookmark={createBookmark}
        bookmark={bookmark}
        handleChange={handleChange}
      />
      <BookmarkList
        bookmarks={bookmarks}
        deleteBookmark={deleteBookmark}
        updateBookmark={updateBookmark}
      />
    </>
  )
}