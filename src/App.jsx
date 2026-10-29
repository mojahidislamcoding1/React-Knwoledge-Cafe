import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/Bookmarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  
  return (
    <>
         <Header></Header>
         <main className='md:flex max-w-4/4 '>
          <Blogs></Blogs>
          <BookMarks></BookMarks>
         </main>
    </>
  )
}

export default App
