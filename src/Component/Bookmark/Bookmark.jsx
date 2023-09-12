import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h1 className='text-2xl font-bold'>{title}</h1>
        </div>
    );
};

Bookmark.PropTypes={
    bookmark: PropTypes.object
}

export default Bookmark;