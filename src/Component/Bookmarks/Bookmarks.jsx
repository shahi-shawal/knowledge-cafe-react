import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
const Bookmarks = ({bookmark,readingtime}) => {
  return (

          <div className="w-1/3 bg-gray-400 ml-4 pt-4 mt-6 rounded-md">
            <h1 className='text-xl text-center font-bold bg-slate-200 p-4 m-4 rounded-xl'>Total Read:{readingtime} min</h1>
            <h1 className="text-xl text-center font-bold">BookMarks:{bookmark.length}</h1>
            {
                bookmark.map((bookmark,idx)=> <Bookmark key={idx}bookmark={bookmark}></Bookmark>)
            }
        </div>


  )
}

Bookmarks.propTypes = {
     bookmark: PropTypes.object,
     readingtime: PropTypes.number

}

export default Bookmarks