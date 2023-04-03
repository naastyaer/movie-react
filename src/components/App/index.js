import { useState } from "react";
import "components/App/App.css";
import Purchase from "components/Purchase";
import Form from "components/Form";
import Menu from "components/Menu";

import MenuDate from "components/MenuDate";
/*import Categories from 'components/Categories';*/
function App() {
  let [purchases, setPurchase] = useState([
    {
      date: new Date(2023, 0, 2), //я не поняла почему он показывает на 1 месяц больше
      id: 1,
      category: "travel",
      number: "1000"
    },
    {
      date: new Date(2022, 11, 12),
      id: 2,
      category: "food",
      number: "9000"
    },
    {
      date: new Date(2023, 1, 15),
      id: 3,
      category: "cinema",
      number: "8000"
    },
    {
      date: new Date(2022, 12, 30),
      id: 4,
      category: "clothes",
      number: "10000"
    },
    {
      date: new Date(2023, 2, 15),
      id: 6,
      category: "car",
      number: "750"
    
    },
  ]);

  let [currentPurchases, setCurrentPurchases] = useState([...purchases]); //масиив для категорий

  const addPurchase = (purchase) => {
    purchases = [...purchases, purchase];
    setPurchase(purchases);
    setCurrentPurchases(purchases);
  };

  const choiceCategory = (category) => {
    let arr = purchases.filter((el) => {
      if (category === "all") {
        return true;
      }
      return el.category === category;
    });

    setCurrentPurchases(arr);
  };

  const filtredDate = (key) => {
    let filtred = purchases.filter(dateFilter);
    function dateFilter(purchase) {
      return purchase.date.getFullYear() === key;
    }
    console.log(filtred);
    setCurrentPurchases(filtred);
  };
  //console.log(purchases)

  return (
    <div className="bg-black pt-10">
      <div className="w-1/2 mx-auto rounded-lg text-white px-5 ">
        <MenuDate
          currentPurchases={currentPurchases}
          filtredDate={filtredDate}
        />
        <div className="flex flex-col md:flex-row mb-5 ">
          <Menu
            choiceCategory={choiceCategory}
            purchases={purchases}
            currentPurchases={currentPurchases}
          />
          <Form addPurchase={addPurchase} />
        </div>

        <div className="max-w-screen-1g mx-auto min-h-screen ">
          {currentPurchases.length > 0 &&
            currentPurchases.map((purchase) => {
              return <Purchase key={purchase.id} purchase={purchase} />;
            })}
        </div>
      </div>
    </div>
  );
}
export default App;
