import cn from "classnames"
import { format } from "date-fns";
const Purchase = ({ purchase }) => {
  return (
    <div className="  mb-10 py-2 px-3 shadow-nd border-b-2 border-indigo-600">
      <div className="flex  flex-col text-center md:flex-row justify-between">
        <div className="flex flex-col">
          <p className={cn("text-white text-lg md:text-sm font-semibold rounded-full px-3 py-1", {
            "bg-cyan-400": purchase.category === 'clothes',
            "bg-amber-700": purchase.category === 'travel',
            "bg-lime-500": purchase.category === 'food',
            "bg-fuchsia-500": purchase.category === 'cinema',
            "bg-red-500": purchase.category === 'car'
          })}>{purchase.category}</p>
          
          
          



          
          <p className="mt-1">{format(purchase.date, "dd/MM/yyyy")}</p>
        </div>

        <p className="text-lg min-[800px]:text-sm ">
          -{purchase.number} рублей
        </p>

      </div>
    </div>

    /*с датаой какие-то ТРАБЛЫ*/
  );
};
export default Purchase;
