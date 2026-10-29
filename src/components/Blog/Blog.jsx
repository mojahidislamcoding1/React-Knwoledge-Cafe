import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog}) => {
  const {title , cover_img , author , author_img ,hashtage,reading_time, posted_date,} = blog;
  return (
    
    <div className="mb-15 mt-7">  
        <img src={cover_img} className="rounded-md" alt={`Cover Picture of the Title ${title}`}/>  

    <div className="flex justify-between items-center mt-4 ">
       <div className="flex gap-3 items-center">
        <img className="w-14 rounded-full" src={author_img} alt="" />
        <div>
          <h3 className="text-xl">{author}</h3>
          <span className="text-gray-600">{posted_date} </span>
        </div>  
      </div>
    <div className='flex gap-2 items-center'>
        <span className="text-gray-500">0{reading_time} min read</span>
      <button className=' text-2xl text-gray-600 '><FaBookmark></FaBookmark></button>
    </div>
     </div>

     {/* title and hashtag or mark section */}
   <div className="space-y-1  mt-3">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p>
        {
          hashtage.map(hash => <span><a href="">#{hash}</a></span>)
        }
      </p>
        <button className="text-blue-500 underline cursor-pointer">Mark as read</button>
   </div>
    </div>
  );
};

export default Blog;