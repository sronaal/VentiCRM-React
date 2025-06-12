import { z } from 'zod'

export const schemaLoginForm = z.object({
    email: z.string().email('Ingrese un correo valido').nonempty('El correo es obligatorio'),
    password: z.string().nonempty('La contraseña es obligatoria')
}) 