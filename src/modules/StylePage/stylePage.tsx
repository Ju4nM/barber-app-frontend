import PhotoCarousel from "../shared/components/photoCarrusel.component";
import { useNavigate } from "react-router-dom";

export default function StylePage() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    }

    return (
        <div>
            <div className="m-5 p-5 text-3xl font-bold font-mono text-center">
                <span>Barber App: Leslie</span>
            </div>
            <div>
                <div>
                    <h1 className="text-center text-2xl font-bold font-mono my-4">Estilos de cortes</h1>
                </div>
                <div className="pt-5">
                    <PhotoCarousel />
                </div>
            </div>
            <div className="pt-5 grid justify-items-center">
                <button onClick={handleButtonClick} type="submit" className="border-4 p-3 rounded-xl bg-blue-500 font-bold text-xl w-[400px]">Regresar</button>
            </div>
        </div>
    )
}