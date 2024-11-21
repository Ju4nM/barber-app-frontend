import { ReactNode, useEffect, useState } from "react";

export default function DatePicker({ daysAvailable = Array.from({length: 7}, (_,i)=>i) }: { daysAvailable?: number[] }) {
  const [days, setDays] = useState<ReactNode>([]);
  const [monthSelected, selectMonth] = useState(11);
  const defaultClasses = "m-2 p-3 size-10 flex justify-center items-center select-none";
  const dayClasses = defaultClasses + " rounded-full";
  const headerClases = defaultClasses + ""
  const daysAvailableMap: {[key: number]: number} = daysAvailable.reduce((acc: {[key: number]: number}, current: number) => {
    acc[current] = current;
    return acc;
  }, {});

  const currentDate: Date = new Date(Date.now());
  
  const genDays = (year: number, month: number) => {
		const date: Date = new Date(year, month - 1, 1);

		const daysElements = [];
    for (let i = 0; i < date.getDay(); i++) {
			daysElements.push(<span key = { i } className = { `${dayClasses} invisible` }>{ i }</span>);
    }

		while (date.getMonth() === month - 1) {
      const monthDay = date.getDate();
      const dayNumber = date.getDay();
      let classList = dayClasses;
      let dayElement = <div key = { `${monthDay}${dayNumber}` } className = { classList }><span>{ monthDay }</span></div>;

      if (daysAvailableMap[dayNumber] !== undefined && monthDay >= currentDate.getDate() && date.getMonth() >= currentDate.getMonth()) {
        classList += " bg-[rgba(217,233,255,0.4)] text-blue-700 font-bold cursor-pointer hover:bg-[rgba(217,233,255,1)]";
        dayElement = <div key = { `${monthDay}${dayNumber}` } className = { classList }><span>{ monthDay }</span></div>;
      }

			daysElements.push(dayElement);
			date.setDate(date.getDate() + 1);
		}

		return daysElements;
	}

  const nameOfDays: string[] = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  selectMonth(11);
  useEffect(() => {
    const daysElements = genDays(currentDate.getFullYear(), monthSelected)
    setDays(daysElements);
  }, [monthSelected]);

  return (
    <div className="grid grid-cols-7 place-items-center p-2 sm:p-8 border-[rgba(26,26,26,0.1)] shadow-lg rounded-md border-[1px]">
      { nameOfDays.map((day, key) => <div className = { headerClases } key = { key }><span>{ day }</span></div>) }
      {days}
    </div>
  )
}
