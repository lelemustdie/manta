"use client"
import { useState } from "react"
import Button from "../ui/button/Button"
import Field from "../ui/field/Field"
import TextArea from "../ui/text_area/TextArea"

export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget)
        // console.log(Object.fromEntries(formData.entries()));
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            })
            if (!response.ok) {
                throw new Error("Error en el envío del formulario")
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="*:mb-3">
            <Field
                label="Nombre"
                name="name"
                id="name"
                type="text"
                placeholder="John"
                required
            />
            <Field
                label="Apellido"
                name="lastname"
                id="lastname"
                type="text"
                placeholder="Doe"
                required
            />
            <Field
                label="Email"
                name="email"
                id="email"
                type="email"
                placeholder="ejemplo@mail.com"
                required
            />
            <Field
                label="Telefono"
                name="phone"
                id="phone"
                type="tel"
                placeholder="1122334455"
                required
            />
            <TextArea
                label="Mensaje"
                name="message"
                id="message"
                placeholder="¡Esperamos tu mensaje/consulta!"
                required
            />
            <div className="grid place-content-end sm:place-content-center">
                <Button
                    className="bg-manta-red sm:w-36 justify-center opacity-70 hover:opacity-100"
                    type={loading ? "loading" : "default"}
                >
                    Enviar
                </Button>
            </div>
        </form>
    )
}
