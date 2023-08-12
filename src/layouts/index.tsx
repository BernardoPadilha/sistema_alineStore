import { ReactNode } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

interface SchemaProps {
  children: ReactNode;
  sidebarActive?: boolean;
  activeLogoutButton?: boolean;
}

export function Schema({
  children,
  sidebarActive = true,
  activeLogoutButton = true,
}: SchemaProps) {
  return (
    <section className="w-full h-screen flex">
      <Sidebar active={sidebarActive} />
      <div className="flex-1 flex flex-col transition-all">
        <Header />
        <main className="flex-1 overflow-y-auto transition-all p-4 flex flex-col ">
          <div className="flex-1 rounded-xl p-6 shadow-lg bg-gray-100 border-2 border-gray-300">
            {children}
          </div>
        </main>
      </div>
    </section>
  );
}
