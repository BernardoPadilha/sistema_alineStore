import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Home() {
  return (
    <main className='w-full h-screen bg-slate-500 flex items-center justify-center'>
      <div className=''>
      <DataTable>
        <Column field='name' header='Nome' />
        <Column field='cpf' header='Cpf' />
        <Column field='credit' header='Crédito' />
      </DataTable>
      </div>
    </main>
  )
}