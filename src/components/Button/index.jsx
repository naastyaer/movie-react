function Button({ title, handelClick, type }) {
  return (
    <button
      type={type}
      onClick={(event) => handelClick(event)}
      className="inline-block rounded bg-slate-200 px-6 pt-2.5 pb-2 text-mg font-medium  text-black hover:bg-slate-500 hover:text-white  w-full  ease-in duration-500"
    >
      {title}
    </button>
  );
}
export default Button;
