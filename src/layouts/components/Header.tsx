import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Clock, Coins } from 'phosphor-react';

export function Header() {
  const currentDate = format(new Date(), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  return (
    <header className="bg-zinc-100 w-full h-[70px] px-6 transition-all bg-brand-500 border-b border-brand-400 flex items-center justify-between">
      <div className="hidden lg:flex items-center gap-3">
        <span className="text-sm text-zinc-700 font-normal flex items-center gap-2">
          <Clock size={16} weight="bold" /> {currentDate}
        </span>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center ">
          <div className="flex items-center">
            <div className="w-12 bg-zinc-700 flex items-center justify-center text-white h-12 object-cover rounded-full border-2 border-gray-300 shrink-0">
              IB
            </div>

            <div className="ml-4 text-zinc-700">
              <h1 className="text-xs">Aline Alves</h1>
              <p className="text-xs font-light truncate w-52">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
