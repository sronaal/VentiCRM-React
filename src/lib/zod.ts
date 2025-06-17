import { z } from 'zod'

export const schemaLoginForm = z.object({
    email: z.string().email('Ingrese un correo valido').nonempty('El correo es obligatorio'),
    password: z.string().nonempty('La contraseña es obligatoria')
}) 

export const schemaCrearUsuario = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo no válido"),
  password: z.string().min(6),
  confirmPassword: z.string(),
  rol: z.string().min(1, "Seleccione un rol"),
  estado: z.string().min(1, "Seleccione un estado"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export const schemaEditarUsuario = z.object({
  name: z.string(),
  email: z.string().email('Correo no valido'),
  rol: z.string(),
  estado: z.string()
})