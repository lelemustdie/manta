import Throttle from "@/assets/icons/throttle"
import Assist from "@/assets/icons/assist"
import Ridetime from "@/assets/icons/ridetime"
import Elt from "@/assets/icons/elt"
import Transport from "@/assets/icons/transport"
import Battery from "@/assets/icons/battery"
import Carbonfoils from "@/assets/icons/carbonfoils"
import Ip from "@/assets/icons/ipx8"
import SvgDisplay from "@/components/svg_title/SvgtITitlte"
import Image from "next/image"
import Button from "@/components/ui/button/Button"
import Link from "next/link"

const svgs = [
    {
        src: <Throttle className="size-20" />,
        title: "Anulación del acelerador",
    },
    {
        src: <Assist className="size-20" />,
        title: "Asistencia eléctrica variable",
    },
    {
        src: <Ridetime className="size-20" />,
        title: "Hasta 4.5 horas de duración del viaje",
    },
    {
        src: <Elt className="size-20" />,
        title: "Tecnología de despegue fácil",
    },
    {
        src: <Transport className="size-20" />,
        title: "Diseño modular para transporte en auto",
    },
    {
        src: <Battery className="size-20" />,
        title: "Batería desmontable sin herramientas",
    },
    {
        src: <Carbonfoils className="size-20" />,
        title: "Foils de fibra de carbono",
    },
    {
        src: <Ip className="size-20" />,
        title: "Motor y carcasa IP67",
    },
]

export default function ListaPrecios() {
    return (
        <>
            <section className="!h-fit bg-manta-light-grey text-manta-ms-black  ">
                <h1 className=" mb-2 flex  justify-center text-4xl font-medium sm:text-3xl">
                    Características
                </h1>

                <SvgDisplay list={svgs} />
                <div className="grid grid-cols-2 flex-col gap-24 p-24 pb-0 sm:flex sm:gap-8 sm:p-4">
                    <div className="grid grid-rows-2 flex-col gap-24 sm:flex sm:gap-8">
                        <div>
                            <h2 className="mb-4 text-[25px] font-medium">
                                Mantenimiento
                            </h2>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    Mantenimiento ultra bajo, sin componentes de
                                    alto desgaste como en la mayoría de las
                                    bicicletas.
                                </li>

                                <li>
                                    Limpieza simple con manguera después de usar
                                    en agua salada.
                                </li>

                                <li>
                                    El acceso para servicio/reemplazo de módulos
                                    requiere menos herramientas.
                                </li>

                                <li>
                                    Cuando ocurre una falla, se reemplaza el
                                    módulo afectado, no el ensamble completo.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-[25px] font-medium">
                                Dimensiones Ensambladas
                            </h2>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    1.4 m Alto x 2 m Ancho x 2.2 m Largo | 4.5
                                    ft Alto, 6.5 ft Ancho, 7.2 ft Largo
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 gap-24 sm:flex sm:flex-col sm:gap-8">
                        <div>
                            <h2 className="mb-4 text-[25px] font-medium">
                                Velocidad
                            </h2>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    Varía según las condiciones del viaje, peso
                                    del conductor y habilidad.
                                </li>

                                <li>
                                    Próximamente: Hélice y foil de velocidad
                                    para aumentar la velocidad máxima.
                                </li>

                                <li>Velocidad máxima: 20 km/h | 12 mph</li>

                                <li>Velocidad de crucero: 11 km/h | 7 mph</li>

                                <li>Velocidad mínima: 6 km/h | 4 mph</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-[25px] font-medium">
                                Tiempo de Carga de la Batería
                            </h2>
                            <ul className="flex flex-col gap-2">
                                <li>Hydropack 1000: 3 horas</li>
                                <li>Hydropack 600: 2 horas</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="mb-6 text-[25px] font-medium">
                        Duración del viaje
                    </h2>
                    <Image
                        src={"/Ride_Duration.webp"}
                        alt={"ride duration"}
                        width={1100}
                        height={140}
                    />
                </div>
            </section>
            <section className="!h-fit bg-manta-signal-white">
                <h2 className="mb-9 text-4xl font-medium text-black sm:text-3xl">
                    Lista de precios
                </h2>
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
                                <th>
                                    Tamaño ensamblado (alto x ancho x largo)
                                </th>
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
                <h5 className="mt-9 text-manta-ms-black">
                    Precios válidos para <b>Argentina</b> y <b>Uruguay</b>
                </h5>
            </section>
            <div className="flex flex-wrap justify-center gap-8 bg-white sm:flex sm:flex-col">
                <div className="flex w-fit flex-col items-center justify-center gap-8 rounded-md border border-gray-600/10 px-10 py-10">
                    <Image
                        src={"/SL3.webp"}
                        alt={"sl3"}
                        width={498}
                        height={340}
                    />
                    <h3 className="text-2xl text-manta-ms-black sm:text-center sm:text-2xl">
                        SL3
                    </h3>
                    <Link
                        href={"/contacto"}
                        className="flex items-center justify-center gap-2 rounded-md bg-manta-red p-3 text-lg tracking-wider opacity-70 hover:opacity-100"
                    >
                        Reservá tu SL3
                    </Link>
                </div>
                <div className="flex w-fit flex-col items-center justify-center gap-8 rounded-md border border-gray-600/10 px-10 py-10">
                    <Image
                        src={"/SL3_PRO.webp"}
                        alt={"sl3pro"}
                        width={498}
                        height={340}
                    />
                    <h3 className="text-2xl text-manta-ms-black sm:text-center sm:text-2xl">
                        SL3 PRO
                    </h3>

                    <Link
                        href={"/contacto"}
                        className="flex items-center justify-center gap-2 rounded-md bg-manta-ms-black p-3 text-lg tracking-wider opacity-70 hover:opacity-100"
                    >
                        Reservá tu SL3 PRO
                    </Link>
                </div>
            </div>
        </>
    )
}
