import Image from "next/image"
import Video from "@/components/ui/video/video"

export default function Sustentabilidad() {
    return (
        <>
            <div className="relative h-96 flex items-center justify-center">
                <h1 className="bg-transparent text-center text-6xl sm:text-4xl text-white">
                    Sustentabilidad
                </h1>
                <Video src="/sustentabilidad.mp4" />
            </div>

            <section className="bg-manta-light-grey sm:!p-12 text-manta-black-grey">
                <div className="space-y-8">
                    <h4>
                        Nueva Zelanda tiene una conexión muy profunda con el
                        medio ambiente; el concepto de kaitiakitanga, que
                        podemos expresar como patrocinio y protección, está
                        profundamente arraigado en su cultura. No estamos por
                        encima de la naturaleza; desarrollamos e innovamos
                        constantemente en nuevas tecnologías que tienen el
                        potencial de crear la alegría de un océano tranquilo y
                        limpio y el futuro del transporte acuático.
                    </h4>
                    <h4>
                        Kaitiakitanga no solo es un impulsor clave en Manta5 y
                        un hito en el desarrollo de productos para la
                        innovación, sino que los valores que aporta también nos
                        guían sobre cómo llevar a cabo nuestro negocio de manera
                        ética.
                    </h4>
                    <h4>
                        Estamos increíblemente orgullosos de ser parte de tantas
                        empresas que fomentan el cambio en nuestras costas. Hoy
                        en día se consumen más productos respetuosos con el
                        medio ambiente. Vemos una presión cada vez mayor sobre
                        los motores de combustión interna en aguas sensibles. El
                        hidrofoil eléctrico representa el futuro de los deportes
                        acuáticos y, con la SL3 a la vanguardia, el futuro de la
                        navegación recreativa.
                    </h4>
                </div>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-1 gap-10">
                    <div>
                        <h2 className="mb-4 font-medium">
                            Desarrollo de productos destacado
                        </h2>
                        <h4>
                            No daña el hábitat submarino. No produce emisiones,
                            humo de petróleo ni se observa flujo de petróleo en
                            la superficie del agua. No hace ruido; el sonido de
                            las revoluciones de los motores de las motos
                            acuáticas se sustituye por un susurro
                        </h4>
                    </div>
                    <div>
                        <h2 className="mb-4 font-medium">
                            Construido para durar
                        </h2>
                        <h4>
                            El Hydrofoil SL3 cuenta con un tren motriz diseñado
                            para durar toda la vida, con una vida útil total del
                            modelo XE-1 de primera generación que es 5 veces más
                            larga. Está diseñado para durar, y el trabajo
                            continúa para mejorar todos los aspectos.
                        </h4>
                    </div>
                    <div>
                        <h2 className="mb-4 font-medium">
                            Conseguí solo lo que necesitas
                        </h2>
                        <h4>
                            El apoyo de energía eléctrica combinado con la
                            energía humana ofrece un modo de transporte acuático
                            extremadamente eficiente y respetuoso con el medio
                            ambiente.
                        </h4>
                    </div>
                    <div>
                        <h2 className="mb-4 font-medium">
                            Eliminación responsable de la batería
                        </h2>
                        <h4>
                            Manta5 se compromete con la recogida y eliminación
                            responsable de las pilas usadas. La legislación
                            varía según el país; por lo tanto, comuníquese con
                            Manta5 o con un distribuidor autorizado para obtener
                            instrucciones sobre cómo encontrar el centro de
                            eliminación de baterías más cercano.
                        </h4>
                    </div>
                </div>
            </section>
        </>
    )
}
