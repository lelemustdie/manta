export default function ListaPrecios() {
    return (
        <section className="!min-h-[calc(100vh-300px)] bg-manta-signal-white">
            <h2 className="text-black">Lista de precios</h2>
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
                            <td>-</td>
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
                            <td>-</td>
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
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}
