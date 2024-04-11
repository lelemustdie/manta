export default function ListaPrecios() {

    return(
        <section className="bg-manta-signal-white min-h-96">
            <div className="flex flex-auto">
                <table className="table-fixed text-manta-black-grey mt-40 mb-40">
                    <thead>
                    <tr className="bg-manta-red text-manta-light-grey">
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
                    <tbody className="">
                    <tr className="bg-manta-light-grey">
                        <td>SL3</td>
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
                        <td>SL3+</td>
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
                        <td>SL3 PRO</td>
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