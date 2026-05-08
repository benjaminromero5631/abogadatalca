"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { AREAS } from "@/lib/constants";

type FormData = {
  name: string;
  phone: string;
  email: string;
  area: string;
  message: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-white border border-border px-4 py-3 text-ink text-sm focus:outline-none focus:border-terracotta transition-colors placeholder:text-ink-faint/60";
  const labelClass = "block text-xs text-ink-faint uppercase tracking-widest mb-2";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="name">Nombre</label>
          <input
            id="name"
            className={inputClass}
            placeholder="Tu nombre"
            aria-invalid={!!errors.name}
            {...register("name", { required: "Requerido" })}
          />
          {errors.name && <p className="text-terracotta text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            type="tel"
            className={inputClass}
            placeholder="+56 9 XXXX XXXX"
            {...register("phone", { required: "Requerido" })}
          />
          {errors.phone && <p className="text-terracotta text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className={inputClass}
          placeholder="tu@email.cl"
          {...register("email", { required: "Requerido" })}
        />
        {errors.email && <p className="text-terracotta text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className={labelClass} htmlFor="area">Área de consulta</label>
        <select
          id="area"
          className={inputClass}
          {...register("area", { required: "Requerido" })}
        >
          <option value="">Seleccionar...</option>
          {AREAS.map((a) => (
            <option key={a.slug} value={a.title}>{a.title}</option>
          ))}
          <option value="Otro">Otro</option>
        </select>
        {errors.area && <p className="text-terracotta text-xs mt-1">{errors.area.message}</p>}
      </div>

      <div>
        <label className={labelClass} htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          rows={4}
          className={inputClass}
          placeholder="Describe brevemente tu situación..."
          {...register("message", { required: "Requerido" })}
        />
        {errors.message && <p className="text-terracotta text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-ink hover:bg-ink-muted text-white py-3.5 text-sm font-medium transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Enviando..." : "Enviar consulta"}
      </button>

      {status === "ok" && (
        <p className="text-terracotta text-sm" role="alert">
          Mensaje enviado. Te contactamos pronto.
        </p>
      )}
      {status === "error" && (
        <p className="text-terracotta text-sm" role="alert">
          Error al enviar. Escríbenos por WhatsApp.
        </p>
      )}
    </form>
  );
}
