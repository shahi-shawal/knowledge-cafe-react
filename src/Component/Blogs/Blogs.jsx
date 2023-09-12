import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handelBook, handelTime}) => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch("konwledge.json")
        .then (res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-2/3 mt-6">
           
            {
                blogs.map((blog)=> 
                <Blog 
                    key={blog.id} 
                    blog={blog}
                    handelBook={handelBook}
                    handelTime={handelTime}
                    >
                </Blog>)
            }
        </div>
    );
};
Blogs.proptypes ={
    handelBook: PropTypes.func,
    handelTime: PropTypes.func
}

export default Blogs;