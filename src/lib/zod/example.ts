import { z } from 'zod';

// O zod é uma biblioteca de validação para formulário avançados
// https://zod.dev/
export const exampleFormSchema = z.object({
  name: z.string().min(1, { message: 'Esse campo não pode ser vázio' }),
  email: z
    .string()
    .min(1, { message: 'Esse campo não pode ser vázio' })
    .email({ message: 'Digite um e-mail válido' }),
  password: z.string().min(1, { message: 'Esse campo não pode ser vázio' }),
});

export type ExampleFormData = z.infer<typeof exampleFormSchema>;
