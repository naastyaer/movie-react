const menuCategory = [
  {
    key: "all",
    name: "Все траты",
    icon: "Img/money.png",
    color:
      "bg-violet-500 rounded-full w-10 hover:transition hover:duration-700 hover:ease-in-out hover:scale-125 mt-1",
  },
  {
    key: "food",
    name: "Еда",
    icon: "Img/food.png",
    color:
      "bg-lime-500 rounded-full w-10 hover:transition hover:duration-700 hover:ease-in-out hover:scale-125 mt-1",
  },
  {
    key: "clothes",
    name: "Одежда",
    icon: "Img/clothes.png",
    color:
      "bg-cyan-400 rounded-full w-10 hover:transition hover:duration-700 hover:ease-in-out hover:scale-125 mt-1",
  },
  {
    key: "travel",
    name: "Путешествия",
    icon: "Img/travel.png",
    color:
      "bg-amber-700 rounded-full w-10 hover:transition hover:duration-700 hover:ease-in-out hover:scale-125 mt-1",
  },
  {
    key: "car",
    name: "Транспорт",
    icon: "Img/car.png",
    color:
      "bg-red-500 rounded-full w-10 hover:transition hover:duration-700 hover:ease-in-out hover:scale-125 mt-1",
  },
  {
    key: "cinema",
    name: "Развлечения",
    icon: "Img/cinema.png",
    color:
      "bg-fuchsia-500 rounded-full w-10 hover:transition hover:duration-700 hover:ease-in-out hover:scale-125 mt-1",
  },
];

const Menu = ({ choiceCategory, purchases }) => {
  const sumCategory = (category) => {
    const sum = purchases.filter((el) => {
      if (category === "all") {
        return true;
      }
    return el.category === category;
    });
    let s = 0;
    sum.map((purchase) => {
      s = s + parseInt(purchase.number);
      return null
    });
    return s;
  };

  return (
    <div className="grid grid-cols-1 gap-4 min-[445px]:grid-cols-2 md:w-1/2 md:mr-5 ">
      {menuCategory.map((category) => {
        return (
          <div
            key={category.key}
            onClick={() => {
              choiceCategory(category.key);
            }}
            className=" text-center flex flex-col items-center"
          >
            {" "}
            {category.name}
            {category.sum}
            <p> {sumCategory(category.key)} </p>
            <div className={category.color}>
              <img
                src={category.icon}
                alt=""
                className="w-10 p-2 hover:cursor-pointer "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
