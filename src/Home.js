
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";



const Home = () => {
    
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    // const  [name, setName]= useState('rehan')

    // const [name, setName] = useState('rehan');
    // const [age, setAge] = useState(25);

    // const handleClick = (e) => {
        // console.log("Hello Developer Rehan Raza", e.target)
    
        // setName('raza');
        // setAge(30);


    // }


    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
        
    // }

    

   

    return ( 
        <div className="home">
            {/* <h2>HomePage</h2> */}
            {/* <p>{name} is {age } years old</p> */}
            {/* <button onClick={handleClick}>Click me</button> */}

            {error && <div>{error}</div>}

            {isPending && <div>Loading...</div>}
        

            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
                {/* // handleDelete={handleDelete}  */}
            
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author==='rehan')}  title="Rehan's Blogs"/> */}
            {/* <button onClick={() => setName('developer')}>Change Name</button> */}
            {/* <p>{ name}</p> */}


            
        </div>
     );
}
  
export default Home;