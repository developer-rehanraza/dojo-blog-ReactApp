import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = (props) => {
    const blogs = props.blogs; 
    const title = props.title;
    // const handleDelete = props.handleDelete;

   
    return ( 


        <div className="blog-list">
            <h2>{ title}</h2>
            {blogs.map((blog) => (

                <div className="blog-preview" key={blog.id}>
                    <Link to ={`/blogs/${blog.id}`}> 

                    <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                        
     
                    </Link>
                    {/* <button onClick={()=>handleDelete(blog.id)}>delete blog</button> */}

</div>

)) }

        </div>
     );
}
 
export default BlogList; 