import { useState } from 'react';
import './App.css'
import DatePicker from './modules/shared/components/date-picker.component'

function App() {
  const [dateSelected, selectDate] = useState<{date: Date, timestamp: number} | undefined>(undefined);

  const onChangePicker = (date: Date, timestamp: number) => {
    selectDate({ date, timestamp });
  }
  return (
    <div className="h-screen w-screen grid place-content-center">
      
      <div className = "flex gap-4 flex-col md:flex-row md:h-[481.72px]">
        <DatePicker daysAvailable={ [1,2,3,4,5] } onChange ={ onChangePicker } />
        <div className = { `grid-cols-2 h-[300px] md:h-auto px-5 overflow-y-auto p-2 sm:p-8 border-[rgba(26,26,26,0.1)] shadow-lg rounded-md border-[1px] md:flex-col gap-4 ${ dateSelected == undefined ? "hidden" : "md:flex grid " }` }>
          <h3 className='col-span-2 text-center'>Horas disponibles</h3>
          <div className = "bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:00 AM</div>
          <div className = "bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:01 AM</div>
          <div className = "bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:02 AM</div>
          <div className = "bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:03 AM</div>
          <div className = "bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:04 AM</div>
          <div className = "bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:05 AM</div>
          <div className = "bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:06 AM</div>
          <div className = "bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:07 AM</div>
          <div className = "bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:08 AM</div>
          <div className = "bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:09 AM</div>
          <div className = "bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:00 AM</div>
          <div className = "bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:00 AM</div>
          <div className = "bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:00 AM</div>
        </div>
      </div>
    </div>
  )
}

export default App
