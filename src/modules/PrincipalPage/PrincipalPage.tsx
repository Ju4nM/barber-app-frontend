import { ReactNode, useState } from "react";
import DatePicker from "../shared/components/date-picker.component";


export default function PrincipalPage() {
    const [dateSelected, selectDate] = useState<{ date: Date, timestamp: number } | undefined>(undefined);

    const onChangePicker = (date: Date, timestamp: number) => {
        selectDate({ date, timestamp });
    }
    return (
        <div>
            <div className="p-5 m-5 text-3xl font-bold text-center font-mono">
                <span>Barber App: Leslie</span>
            </div>
            <div className="flex gap-3 items-center">
                <div className="">
                    <img src="./src/assets/images/Baston.png" alt="Imagen de baston" />
                </div>
                <div className="h-screen w-screen grid place-content-center">
                    <div className="flex p-6">
                        <div>
                            <label htmlFor="" className="pr-3">Nombre: </label>
                            <input type="text" placeholder="Nombre" className="border-2 p-2 rounded-lg" />
                        </div>
                        <div className="pl-3">
                            <label htmlFor="" className="pr-3">Correo Electr&oacute;nico: </label>
                            <input type="text" placeholder="Correo electr&oacute;nico" className="border-2 p-2 rounded-lg" />
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col md:flex-row md:h-[481.72px]">
                        <DatePicker daysAvailable={[1, 2, 3, 4, 5]} onChange={onChangePicker} />
                        <div className={`grid-cols-2 h-[300px] md:h-auto px-5 overflow-y-auto p-2 sm:p-8 border-[rgba(26,26,26,0.1)] shadow-lg rounded-md border-[1px] md:flex-col gap-4 ${dateSelected == undefined ? "hidden" : "md:flex grid "}`}>
                            <h3 className='col-span-2 text-center'>Horas disponibles</h3>
                            <div className="bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:00 AM</div>
                            <div className="bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:01 AM</div>
                            <div className="bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:02 AM</div>
                            <div className="bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:03 AM</div>
                            <div className="bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:04 AM</div>
                            <div className="bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:05 AM</div>
                            <div className="bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:06 AM</div>
                            <div className="bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:07 AM</div>
                            <div className="bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:08 AM</div>
                            <div className="bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:09 AM</div>
                            <div className="bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:00 AM</div>
                            <div className="bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:00 AM</div>
                            <div className="bg-[#eee] p-2 rounded-md hover:bg-[#ddd] transition-[background] cursor-pointer">8:00 AM</div>
                        </div>
                    </div>
                    <div className="columns-2 place-content-center">
                        <div className="pt-5">
                            <button type="submit" className="border-4 p-3 rounded-xl bg-blue-500 font-bold text-xl w-full">Agendar</button>
                        </div>
                        <div className="pt-5">
                            <button type="submit" className="border-4 p-3 rounded-xl bg-green-500 font-bold text-xl w-full">Estilos</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="./src/assets/images/Baston.png" alt="Imagen de baston" />
                </div>
            </div>
        </div>
    )
}