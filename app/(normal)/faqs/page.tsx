import React from "react";
import Accordion from "@/components/ui/accordion/accordion";

const FAQS = [
  {
    question: "¿Las bicicletas pueden resistir las corrientes y las olas?",
    answer: `Sí, todavía no podemos enfrentarnos a los tiburones, pero el surf en olas, las ondulaciones oceánicas, las ondulaciones del viento y el trabajo con las olas están bajo control.`,
  },
  {
    question: "¿Qué pasa cuando dejo de moverme?",
    answer:
      "La bicicleta se mantiene erguida sobre el agua cuando está quieta. Cuando dejas de pedalear, la bicicleta descenderá hasta que el chasis comience a flotar sobre el agua. Los conductores pueden permanecer sentados semi sumergidos mientras están quietos.",
  },
  {
    question:
      "¿Cuál es la profundidad mínima de agua necesaria para que el foil y el hydrofoil despeguen?",
    answer:
      "Se requiere una profundidad mínima de 1 m (3 ft) para montar la bicicleta. Sin embargo, se necesita al menos 2 m (7 ft) de profundidad para despegar mientras se está sumergido.",
  },
  {
    question: "¿Necesito una licencia o permiso para conducir?",
    answer:
      "Las regulaciones varían según el estado y el país. Tu distribuidor local puede compartir información de varias agencias, pero es responsabilidad del conductor conocer y cumplir con las leyes locales. Si tienes dudas, por favor visita la oficina portuaria local o un distribuidor autorizado.",
  },
  {
    question: "¿Qué sucede si la batería se agota?",
    answer:
      "Cuando la batería alcanza un nivel crítico, el indicador de nivel de batería en la pantalla comenzará a parpadear. Tras una advertencia importante, si el conductor continúa conduciendo hasta que la batería se agote por completo, el motor dejará de funcionar y el conductor tendrá que rescatarse a sí mismo pedaleando manualmente (sumergido) o nadando para llevar la bicicleta a la orilla.",
  },
  {
    question: "¿Cuál es el peso mínimo y máximo del conductor?",
    answer:
      "El peso máximo que puede soportar el diseño es de 100 kg (220 libras). Los conductores más pesados aún pueden usar el foil, pero el límite recomendado por la fábrica para la garantía y otros fines es de 100 kg.",
  },
  {
    question: "¿Se puede conducir el Hydrofoiler en olas?",
    answer:
      "El riesgo de montar en olas recae sobre el conductor. Las mejores experiencias de conducción se logran sobre una ola rodante después de que rompe. Los hidrofoilers son más pesados que una tabla de surf o SUP y nunca deben usarse cerca de otras personas (nadadores, surfistas) en una zona de surf.",
  },
  {
    question: "¿Qué tipo de mantenimiento se requiere?",
    answer:
      "Se requiere un mantenimiento mínimo. Después de usar en agua salada, enjuágalo con agua dulce.",
  },
  {
    question: "¿Cómo funciona la batería en condiciones de calor o frío?",
    answer: `La duración total de la conducción (vida de la batería) puede variar durante el uso en condiciones de temperatura extrema.
            Por ejemplo, si las baterías de litio completas se utilizan a una temperatura de 20° o un poco más baja, se alcanza la vida útil ideal. Por ejemplo, si una batería se usa a una temperatura de 30°C en lugar de a una temperatura ambiente promedio más baja, la vida útil del ciclo se reduce aproximadamente en un 20%.`,
  },
  {
    question: "¿Puedo usarlo en agua salada?",
    answer:
      "Los hidrofoils están diseñados para su uso en agua salada, pero como la mayoría de los productos utilizados en agua salada, deben enjuagarse con agua dulce después de su uso.",
  },
  {
    question: "¿Es fácil de aprender?",
    answer:
      "El SL3 generalmente se considera el producto de foil más fácil en el mercado. Un ala más larga ofrece una conducción más estable sobre el agua y los puntos adicionales de contacto entre la bicicleta y el ciclista brindan apoyo durante el despegue. Si puedes andar en bicicleta y sabes nadar, puedes usar un Hydrofoiler.",
  },
  {
    question: "¿Cuáles son las funciones en el controlador de conducción?",
    answer: `Actualizaciones de firmware a través de Bluetooth.
            Pantalla LCD integrada: Nivel de batería en tiempo real, Nivel de asistencia, Posición del acelerador, Advertencias del sistema, Pantalla de potencia del ciclista, Pantalla de cadencia del ciclista.
            Aumenta/disminuye la asistencia del pedal eléctrico (10 niveles de potencia de asistencia).
            Potencia del motor controlada por torque y cadencia.
            Control adicional del acelerador.
            Diferentes modos de conducción: Control adicional del acelerador opcional (predeterminado) y refuerzo (acelerador completo, velocidad máxima) con asistencia de pedaleo.`,
  },
  {
    question: "¿Cuál es el peso total?",
    answer: `SL3 pesa un total de 38 kg (85 libras).
            SL3+ pesa un total de 40 kg (88 libras).
            SL3 Pro pesa un total de 37 kg (81 libras).
            La mayor modularidad introducida en el SL3 reduce el peso del módulo más pesado a 13,9 kg (30 libras), reduciendo así el peso total de transporte.`,
  },
  {
    question:
      "¿Cuáles son las dimensiones cuando está completamente ensamblado?",
    answer: `1,4 m de altura x 2 m de ancho x 2,2 m de longitud (4,5 pies de altura, 6,5 pies de ancho, 7,2 pies de longitud).`,
  },
  {
    question: "¿Cómo puedes transportar el Hydrofoiler?",
    answer: `El Hydrofoiler SL3 incluye conectores de acoplamiento rápido que permiten dividir la bicicleta en 5 secciones de montaje inferior. Puedes transportarlo dentro de un vehículo y llevar cada módulo al agua a mano.`,
  },
  {
    question: "Firebase or Supabase?",
    answer: "I am using Supabase!",
  },
  {
    question: "Firebase or Supabase?",
    answer: "I am using Supabase!",
  },
];

const FAQ = () => {
  return (
    <section className="m-28">
      <div className="text-manta-signal-white text-5xl mt-40 mb-4">
        <h1>FAQS</h1>
      </div>

      <div className="p-8 bg-gray-200 rounded-lg text-manta-black-grey">
        {FAQS.map(({ question, answer }, index) => (
          <Accordion key={index} title={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
