import { HeaderContainer, HeaderContent, NewTransationButton } from './styles'
import logo from '../../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransationModal } from '../NewTransationModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="Logo" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransationButton>Nova Transação</NewTransationButton>
          </Dialog.Trigger>

          <NewTransationModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
