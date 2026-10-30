
const Bookmark = ({bookmark}) => {
  const {title} = bookmark;
  return (
    <div>
      <h2 className="text-xl bg-slate-100 p-3 m-3 rounded-md">{title}</h2>
    </div>
  );
};

export default Bookmark;