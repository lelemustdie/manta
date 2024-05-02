import Throttle from "@/assets/icons/throttle";
import Assist from "@/assets/icons/assist";
import Ridetime from "@/assets/icons/ridetime";
import Elt from "@/assets/icons/elt";
import Transport from "@/assets/icons/transport";
import Battery from "@/assets/icons/battery";
import Carbonfoils from "@/assets/icons/carbonfoils";
import Ip from "@/assets/icons/ipx8";
import SvgDisplay from "@/components/svg_title/SvgtITitlte";

const svgs = [
    {
        src:<Throttle className='size-20'/>,
        title:'Throttle override'
    },
    {
        src:<Assist className='size-20'/>,
        title:'Variable electric assist'
    },
    {
        src:<Ridetime className='size-20'/>,
        title:'Up to 4.5hs ride time'
    },
    {
        src:<Elt className='size-20'/>,
        title:'Easy launch technology'
    },
    {
        src:<Transport className='size-20'/>,
        title:'In-car transport'
    },
    {
        src:<Battery className='size-20' />,
        title:'Toolless detachable battery'
    },
    {
        src:<Carbonfoils className='size-20'/>,
        title:'Carbon fibre foils'
    },
    {
        src:<Ip className='size-20'/>,
        title:'IP67 Motor and housing'
    }

]

export default function ListaPrecios() {
    return (
        <>
            <section className="bg-manta-light-grey sm:!h-fit ">
                <h1 className="text-manta-ms-black text-4xl mb-2 sm:text-2xl">Características</h1>

                <SvgDisplay list={svgs}/>


            </section>
            <section className="!h-fit bg-manta-signal-white">
                <h2 className="text-black text-4xl mb-9 sm:text-2xl">Lista de precios</h2>
                <div className="flex flex-auto overflow-x-auto">
                    <table className="table-fixed text-manta-black-grey">
                        <thead>
                        <tr className="bg-manta-red text-manta-light-grey *:p-4">
                            <th>Modelo</th>
                            <th>Tipo de motor/potencia (vatios)</th>
                            <th>Capacidad de la batería (w)</th>
                            <th>Tipo de Batería</th>
                            <th>Máx. Tiempo de autonomía (horas)</th>
                            <th>Tiempo de carga de la batería (horas)</th>
                            <th>Tipo de material</th>
                            <th>Peso (kg)</th>
                            <th>Tamaño ensamblado (alto x ancho x largo)</th>
                            <th>PRECIO DE LISTA (USD)</th>
                        </tr>
                        </thead>
                        <tbody className="[&_td]:p-5">
                        <tr className="bg-manta-light-grey">
                            <td className="font-bold">SL3</td>
                            <td>Eléctrico / 2500</td>
                            <td>600W</td>
                            <td>iones de litio</td>
                            <td>2.7</td>
                            <td>3</td>
                            <td>Fibra</td>
                            <td>38.8</td>
                            <td>140 x 200 x 220 cm.</td>
                            <td className="font-bold"> $ 10.499 + IVA</td>
                        </tr>
                        <tr>
                            <td className="font-bold">SL3+</td>
                            <td>Eléctrico / 2500</td>
                            <td>1000W</td>
                            <td>iones de litio</td>
                            <td>4.2</td>
                            <td>5</td>
                            <td>Fibra</td>
                            <td>40.3</td>
                            <td>140 x 200 x 220 cm.</td>
                            <td className="font-bold">$ 11.999 + IVA</td>
                        </tr>
                        <tr className="bg-manta-light-grey">
                            <td className="font-bold">SL3 PRO</td>
                            <td>Eléctrico / 2500</td>
                            <td>1000W</td>
                            <td>iones de litio</td>
                            <td>4.5</td>
                            <td>5</td>
                            <td>Carbon</td>
                            <td>37.4</td>
                            <td>140 x 200 x 220 cm.</td>
                            <td className="font-bold">$ 13.999 + IVA</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <h5 className="text-manta-ms-black mt-9">Precios válidos para <b>Argentina</b> y <b>Uruguay</b></h5>
            </section>

        </>

    )
}
