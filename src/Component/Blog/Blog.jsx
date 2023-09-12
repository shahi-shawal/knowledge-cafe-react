import { BsFillBookmarkCheckFill } from 'react-icons/Bs';
import PropTypes from 'prop-types';
const Blog = ({blog,handelBook,handelTime}) => {
    const {id,cover,title,author,author_img,posted_date,reading_time,hashtags}=blog
    return (
        <div>
            <div className='mb-20 space-y-6'>
                <img className='w-full' src={cover} alt={`cover picture for ${title}`} />
                <div className='flex justify-between mb-8'>
                   <div className='flex gap-4 mt-10'>
                      <img className='w-14' src={author_img} alt="" />
                      <div className=''>
                      <h1 className='text-xl font-bold'>{author}</h1>
                      <p>{posted_date}</p>
                      </div>
                   </div>
                   <div className='mt-10'>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 hover:text-red-600' onClick={()=>handelBook(blog)} >
                        <BsFillBookmarkCheckFill />
                    </button>
                   </div>
                </div>
                <h1 className='text-4xl font-bold mb-8'>{title}</h1>
                <p>{`#${hashtags[0]}, #${hashtags[1]}`}</p>
                <button className='text-blue-900 underline font-bold' onClick={()=>handelTime(id,reading_time)}>Mark as read</button>
            </div>
        </div>
    );
};

Blog.proptypes = {
    blog:PropTypes.object.isRequired,
    handelBook: PropTypes.func.isRequired,
    handelTime: PropTypes.func
}
export default Blog;