interface SidebarProps {
  active?: boolean;
}

export function Sidebar({ active = true }: SidebarProps) {
  return (
    <>
      {active && (
        <aside className="bg-zinc-900 hidden shrink-0 transition-all duration-500 border-r border-brand-400 md:flex flex-col w-20">
          <div className="h-[70px] flex justify-between items-center p-4 border-b border-zinc-700">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center object-cover p-1 border-2 border-zinc-400">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 py-5 flex flex-col items-center gap-2">
                  
          </div>
        </aside>
      )}
    </>
  );
}