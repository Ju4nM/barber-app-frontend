import { ReactNode, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function DatePicker({ daysAvailable = Array.from({length: 7}, (_,i)=>i), onChange = () => {} }: { daysAvailable?: number[], onChange?: (date: Date, timestamp: number) => void }) {
  const currentDate: Date = new Date(Date.now());
  const [days, setDays] = useState<Date[]>([]); // establece los dias del picker
  const [monthSelected, selectMonth] = useState(currentDate.getMonth()); // mes actual
  const [year, setYear] = useState(currentDate.getFullYear()); // mes actual
  const [space, setSpace] = useState<ReactNode[]>([]);

  const [dateSelected, setDate] = useState<number>(0); // fecha seleccionada

  const defaultClasses = "m-2 p-3 size-10 flex justify-center items-center select-none";
  const monthButtonClassList = "rounded-full hover:bg-[rgba(217,233,255,0.4)] size-8 flex text-center justify-center items-center cursor-pointer transition-[background] select-none";
  const dayClasses = defaultClasses + " rounded-full";
  const headerClases = defaultClasses + ""
  const daysAvailableMap: {[key: number]: number} = daysAvailable.reduce((acc: {[key: number]: number}, current: number) => {
    acc[current] = current;
    return acc;
  }, {});
  
  const nextMonth = () => {
    if (monthSelected + 1 == 12) {
      setYear(prev => prev + 1);
      selectMonth(0);
      return;
    }
    selectMonth(prev => {
      return prev + 1;
    });
  }

  const prevMonth = () => {
    if (monthSelected - 1 == -1) {
      setYear(prev => prev - 1);
      selectMonth(11);
      return;
    }
    selectMonth(prev => prev - 1);
  }
  
  const selectDate = (timestamp: number) => {
    setDate(timestamp);
    onChange(new Date(timestamp), timestamp);
  }
  
  const genDays = (month: number) => {
		const date: Date = new Date(year, month - 1, 1);

		const days: Date[] = [];
    const space: ReactNode[] = [];
    for (let i = 0; i < date.getDay(); i++) {
			space.push(<span key = { i } className = { `${dayClasses} invisible` }>{ i }</span>);
    }
    setSpace(space);

		while (date.getMonth() === month - 1) {
      const timestamp = date.getTime();
			days.push(new Date(timestamp));
			date.setDate(date.getDate() + 1);
		}

    setDays(days);
	}

  const nameOfDays: string[] = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  const months: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
  useEffect(() => {
    genDays(monthSelected + 1)
  }, [monthSelected]);

  return (
    <div className = "p-2 sm:p-8 border-[rgba(26,26,26,0.1)] shadow-lg rounded-md border-[1px] h-fit">
      <h4 className = "text-center font-bold select-none">{ year }</h4>
      <div className = "flex justify-evenly my-3">
        <div onClick={ prevMonth } className = {`${monthSelected === currentDate.getMonth() && year == currentDate.getFullYear() ? "invisible" : ""} ${monthButtonClassList}`}><FaChevronLeft className="size-4" /></div>
        <div className = "flex items-center select-none"><span>{ months[monthSelected] }</span></div>
        <div onClick={ nextMonth } className = {`${monthSelected < months.length ? "" : "invisible"} ${monthButtonClassList}`}><FaChevronRight className="size-4" /></div>
      </div>
      <div className = "grid grid-cols-7 place-items-center">
        { nameOfDays.map((day, key) => <div className = { headerClases } key = { key }><span>{ day }</span></div>) }
        { space }
        { days.map((date) => {
          const monthDay = date.getDate();
          const timestamp = date.getTime();
          const timestampFromToday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()).getTime()
          const dayNumber = date.getDay();
          let classList = dayClasses;
          
          if (daysAvailableMap[dayNumber] !== undefined && timestamp >= timestampFromToday) {
            classList += " bg-[rgba(217,233,255,0.4)] font-bold cursor-pointer";
            return <div onClick={() => selectDate(timestamp)} key = { `${monthDay}${dayNumber}` } className = { `${classList} ${dateSelected == timestamp ? "bg-blue-800 text-blue-50" : "hover:bg-[rgba(217,233,255,1)] text-blue-700 "}` }><span>{ monthDay }</span></div>;
          }

          return <div key = { `${monthDay}${dayNumber}` } className = { classList }><span>{ monthDay }</span></div>;;
        })}
      </div>
    </div>
  )
}
