import { SearchFormContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../../../contexts/TransactionContext'
import { useContextSelector } from 'use-context-selector'

/**
 * Porque um componente renderiza:
 * - Hooks change(state, context, reducer)
 * - Porps change(mudou popriedades)
 * - Parents renderig
 
 * Qual o fluxo de renderização
  1- React cria HTLM da interface do componente
  2- Compara a versão do HTML recriada com a da anterior
  3- Se mudou alguma coisa ele reescreve o HTML na tela

  * Memo: 
  0- mudou alguma coisa no hook ou nos props do meu componente?
  0.1- Comparar com a versão anterior dos hooks e dos props 
  0.2- Se mudou algo ele vai permitir a nova renderização
  e em seguida vai para o fluxo de renderização
 */

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: searchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transação"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
