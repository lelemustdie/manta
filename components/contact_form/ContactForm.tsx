"use client"
import { useState } from "react"
import Button from "../ui/button/Button"
import Field from "../ui/field/Field"
import TextArea from "../ui/text_area/TextArea"
import WhatsApp from "@/assets/icons/wpp"
import Link from "next/link"
import toast, { Toaster } from "react-hot-toast"

export default function ContactForm() {
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget)
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            })
            if (!response.ok) {
                throw new Error("Error en el envío del formulario")
            }
            toast.success("Formulario enviado correctamente")
        } catch (error) {
            toast.error("Error en el envío del formulario")
            console.error(error)
        } finally {
            setLoading(false)
            // @ts-ignore
            e.target.reset()
        }
    }
    return (
        <>
            <Toaster position="top-center" />
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
                    type="text"
                    placeholder="ejemplo@mail.com"
                    required
                />
                <Field
                    label="Telefono"
                    name="phone"
                    id="phone"
                    type="number"
                    placeholder="1122334455"
                    required
                />
                <TextArea
                    label="Mensaje"
                    name="message"
                    id="message"
                    placeholder="DISPONIBILIDAD SÓLO EN ARGENTINA Y URUGUAY. ¡Esperamos tu mensaje/consulta! "
                    required
                />
                <div className="flex items-center justify-between gap-8 sm:place-content-center">
                    <Link
                        href={"https://wa.me/1132856130"}
                        target="_blank"
                        className="flex items-center justify-center gap-2 rounded-md bg-green-500 p-3 text-lg tracking-wider opacity-70 hover:opacity-100 sm:w-36"
                    >
                        <WhatsApp className="size-7" />
                    </Link>
                    <Button
                        className="justify-center bg-manta-red opacity-70 hover:opacity-100 sm:w-36"
                        type={loading ? "loading" : "default"}
                    >
                        Enviar
                    </Button>
                </div>
            </form>
        </>
    )
}
