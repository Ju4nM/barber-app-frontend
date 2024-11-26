import { useState } from "react";
import DatePicker from "../shared/components/date-picker.component";
import { useNavigate } from "react-router-dom";


export default function PrincipalPage() {
    const [dateSelected, selectDate] = useState<{ date: Date, timestamp: number } | undefined>(undefined);

    const onChangePicker = (date: Date, timestamp: number) => {
        selectDate({ date, timestamp });
    }

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/Estilos');
    };

    return (
        <div>
            <div className="flex gap-3 items-center">
                <div className="">
                    <img src="./src/assets/images/Baston.png" alt="Imagen de baston" />
                </div>
                <div className="h-screen w-screen grid place-content-center">
                    <div className="p-5 m-5 text-3xl font-bold text-center font-mono">
                        <span>Barber App: Leslie</span>
                    </div>
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
                    <div className="flex gap-4 flex-col md:flex-row md:justify-center">
                        <DatePicker daysAvailable={[1, 2, 3, 4, 5]} onChange={onChangePicker} />
                        <div className = { `px-2 overflow-auto border-[rgba(26,26,26,0.1)] shadow-lg rounded-md border-[1px] h-[450px] ${ dateSelected == undefined ? "hidden" : "" }` }>
                            <div className = "flex flex-col gap-4 px-3">
                                <h3 className="text-center sticky top-0 pt-5 pb-3 bg-white">Horas disponibles</h3>
                                {[...Array(15)].map((_, key) => <div key = { key } className="bg-[#eee] p-2 rounded-md text-center hover:bg-[#ddd] transition-[background] cursor-pointer">8:00 AM</div>)}
                            </div>
                        </div>
                    </div>
                    <div className="columns-2 place-content-center">
                        <div className="pt-5">
                            <button type="submit" className="border-4 p-3 rounded-xl bg-blue-500 font-bold text-xl w-full">Agendar</button>
                        </div>
                        <div className="pt-5">
                            <button onClick={handleButtonClick} type="submit" className="border-4 p-3 rounded-xl bg-green-500 font-bold text-xl w-full">Estilos</button>
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