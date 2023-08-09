import { ReactNode, createContext, useState } from 'react';

interface ExampleProps {
  name: string;
  email: string;
  password: string;
}

interface ExampleContextData {
  example: ExampleProps;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const ExampleContext = createContext({} as ExampleContextData);

// Contexto tem como finalidade compartilhar dados com toda a aplicação
export function ExampleProvider({ children }: AuthProviderProps) {
  const [example, setExample] = useState({} as ExampleProps);

  return (
    <ExampleContext.Provider
      value={{
        example,
      }}
    >
      {children}
    </ExampleContext.Provider>
  );
}
