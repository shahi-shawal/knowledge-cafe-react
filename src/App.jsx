import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Hader from './Component/Hader/Hader'


function App() {
  const [bookmark,setBookmark]= useState([]);
  const [readingtime,setTime]=useState(0)

  const handelBook = blog =>{
    const newBookMarks =[...bookmark,blog];
    setBookmark(newBookMarks)
  }
 const handelTime = (id,time) =>{
  const newReadingtime = readingtime+time;
  setTime(newReadingtime);
  // Remobe bookmark 
  const removeBookmark = bookmark.filter(bookmark => (bookmark.id !== id))
  setBookmark(removeBookmark)
 }
  return (
    <>
    <Hader></Hader>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handelBook={handelBook} handelTime={handelTime}></Blogs>
    <Bookmarks bookmark={bookmark} readingtime={readingtime}></Bookmarks>
    </div>
    </>
  )
}

export default App
