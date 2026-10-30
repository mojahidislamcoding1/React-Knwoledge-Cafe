import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/Bookmarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks , setBookmarks] = useState([]);
  const [readingTime , setReadingTime] = useState(0);

  const handleBookmars = blog => {
    const newBookmarks = [...bookmarks , blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time , id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    //remove marks as read from bookMark
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMarks);
  }

  return (
    <>
         <Header></Header>
         <main className='md:flex max-w-5xl mx-auto '>
          <Blogs handleBookmars = {handleBookmars} handleMarkAsRead = {handleMarkAsRead}></Blogs>
          <BookMarks bookmarks ={bookmarks} readingTime = {readingTime}></BookMarks>
         </main>
    </>
  )
}

export default App
