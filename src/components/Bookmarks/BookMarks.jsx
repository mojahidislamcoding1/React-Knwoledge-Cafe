import Bookmark from "../BookMark/Bookmark";

const BookMarks = ({bookmarks , handleMarkAsRead ,readingTime}) => {
  return (
   
    <div className="md:w-1/3 ">
      <div className="mt-15 md:ml-4 mb-4 mx-4 md:mx-0 ">
        <h3 className="text-xl  font-bold text-[#6047EC] bg-[#efedfd] p-5  rounded-md">Spent time on Read : {readingTime} min</h3>
      </div>

     <div className=" mx-4 md:mx-0 md:ml-4  pt-3 rounded-md mb-2 pb-5 md:mb-0  bg-gray-300">
       <h4 className="text-xl font-bold ml-4">Bookmarked Blogs: {bookmarks.length} </h4>

      {
        bookmarks.map((bookmark , idx)=> <Bookmark key={idx} bookmark={bookmark} handleMarkAsRead = {handleMarkAsRead}></Bookmark>)
      }
     </div>
    </div>
  );
};

export default BookMarks;