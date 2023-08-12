import { Schema } from '@/layouts'
import * as Dialog from '@radix-ui/react-dialog'

export default function Home() {
  return (
    <Schema>
      <main className='w-full h-screen'>
      <div className=''>
        <Dialog.Root>
          <Dialog.Trigger>Novo cliente</Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content>
              <Dialog.Title>Novo Cliente</Dialog.Title>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </main>
    </Schema>
  )
}