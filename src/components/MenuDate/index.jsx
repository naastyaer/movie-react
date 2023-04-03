const menuDate = [
  {
    key: 2022,
    name: "2022 год",
  },
  {
    key: 2023,
    name: "2023 год",
  },
];

const MenuDate = ({ filtredDate }) => {
  return (
    <div className="flex flex-row gap-5 justify-center">
      {menuDate.map((date) => {
        return (
          <div
            key={date.key}
            onClick={() => {
              filtredDate(date.key);
            }}
            className="mb-10 hover:cursor-pointer hover:underline decoration-slate-100 decoration-solid"
          >
            {" "}
            {date.name}
          </div>
        );
      })}
    </div>
  );
};
export default MenuDate;
