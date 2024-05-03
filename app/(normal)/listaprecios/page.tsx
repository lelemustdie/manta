import Throttle from "@/assets/icons/throttle";
import Assist from "@/assets/icons/assist";
import Ridetime from "@/assets/icons/ridetime";
import Elt from "@/assets/icons/elt";
import Transport from "@/assets/icons/transport";
import Battery from "@/assets/icons/battery";
import Carbonfoils from "@/assets/icons/carbonfoils";
import Ip from "@/assets/icons/ipx8";
import SvgDisplay from "@/components/svg_title/SvgtITitlte";
import Image from "next/image";

const svgs = [
    {
        src: <Throttle className='size-20'/>,
        title: 'Throttle override'
    },
    {
        src: <Assist className='size-20'/>,
        title: 'Variable electric assist'
    },
    {
        src: <Ridetime className='size-20'/>,
        title: 'Up to 4.5hs ride time'
    },
    {
        src: <Elt className='size-20'/>,
        title: 'Easy launch technology'
    },
    {
        src: <Transport className='size-20'/>,
        title: 'In-car transport'
    },
    {
        src: <Battery className='size-20'/>,
        title: 'Toolless detachable battery'
    },
    {
        src: <Carbonfoils className='size-20'/>,
        title: 'Carbon fibre foils'
    },
    {
        src: <Ip className='size-20'/>,
        title: 'IP67 Motor and housing'
    }

]

export default function ListaPrecios() {
    return (
        <>
            <section className="bg-manta-light-grey text-manta-ms-black !h-fit  ">
                <h1 className=" text-4xl mb-2  font-medium sm:text-3xl justify-center flex">Características</h1>

                <SvgDisplay list={svgs}/>
                <div className="grid grid-cols-2 p-24 pb-0 gap-24 sm:flex flex-col sm:gap-8 sm:p-4">

                    <div className="grid-rows-2 grid gap-24 sm:gap-8 sm:flex flex-col">
                        <div>
                            <h2 className="text-[25px] mb-4 font-medium">Mantenimiento</h2>
                            <ul className="gap-2 flex flex-col">
                                <li>Mantenimiento ultra bajo, sin componentes de alto desgaste como en la mayoría de las
                                    bicicletas.</li>

                                <li>Limpieza simple con manguera después de usar en agua salada.</li>

                                <li>El acceso para servicio/reemplazo de módulos requiere menos herramientas.</li>

                                <li>Cuando ocurre una falla, se reemplaza el
                                    módulo afectado, no el ensamble completo.</li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[25px] mb-4 font-medium">Dimensiones Ensambladas</h2>
                            <ul className="gap-2 flex flex-col">
                                <li>1.4 m Alto x 2 m Ancho x 2.2 m Largo | 4.5 ft Alto, 6.5 ft Ancho, 7.2 ft Largo</li>
                            </ul>
                        </div>


                    </div>
                    <div className="grid-rows-2 grid gap-24 sm:gap-8 sm:flex sm:flex-col">
                        <div>
                            <h2 className="text-[25px] mb-4 font-medium">Velocidad</h2>
                            <ul className="gap-2 flex flex-col">
                                <li>Varía según las condiciones del viaje, peso del conductor y habilidad.</li>

                                <li>Próximamente: Hélice y foil de velocidad para aumentar la velocidad máxima.</li>

                                <li>Velocidad máxima: 20 km/h | 12 mph</li>

                                <li>Velocidad de crucero: 11 km/h | 7 mph</li>

                                <li>Velocidad mínima: 6 km/h | 4 mph</li>

                            </ul>
                        </div>

                        <div>
                            <h2 className="text-[25px] mb-4 font-medium">Tiempo de Carga de la Batería</h2>
                            <ul className="gap-2 flex flex-col">
                                <li>
                                    Hydropack 1000: 3 horas
                                </li>
                                <li>Hydropack 600: 2 horas</li>
                            </ul>
                        </div>



                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-[25px] mb-6 font-medium">Duración del viaje</h2>
                    <Image src={"/Ride_Duration.webp"} alt={"ride duration"} width={1100} height={140}/>
                </div>




            </section>
            <section className="!h-fit bg-manta-signal-white">
                <h2 className="text-black font-medium text-4xl mb-9 sm:text-3xl">Lista de precios</h2>
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
            <div className='grid grid-cols-2 justify-center bg-white sm:flex-col sm:flex'>
                <div>
                    <h1 className='text-manta-ms-black text-7xl sm:text-2xl sm:text-center'>SL3</h1>
                    <Image src={"/SL3.webp"} alt={"sl3"} width={4562} height={3206} sizes={'100%'}/>
                </div>
               <div>
                   <h1 className='text-manta-ms-black text-7xl sm:text-2xl sm:text-center'>SL3 PRO</h1>
                   <Image src={"/SL3_PRO.webp"} alt={"sl3pro"} width={4961} height={3194}/>
               </div>

            </div>


        </>

    )
}
