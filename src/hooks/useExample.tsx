import { ExampleFormData, exampleFormSchema } from '@/lib/zod/example';

import { useForm } from 'react-hook-form';
import { Dispatch, useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';

interface ExampleProps {
  name: string;
  email: string;
  password: string;
}

interface UseExampleProps {
  example: ExampleProps;
  setExample: Dispatch<ExampleProps>;
}

// O hook é muito utilizado para separar as funções da página, isso deixando o código
// mais limpo e organizado.
export function useExample(): UseExampleProps {
  const [example, setExample] = useState({} as ExampleProps);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ExampleFormData>({
    resolver: zodResolver(exampleFormSchema),
  });

  // Utilizado para executar funções assim que a página é carregada.
  useEffect(() => {
    console.log('Olá exemplo');
  }, []);

  // Utilizado para executar funções assim que o estado de `example` mudar.
  useEffect(() => {
    console.log('Olá exemplo com estado alterado');
  }, [example]);

  return {
    example,
    setExample,
  };
}
