import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionContext'
import { dataFormatter, priceFormatter } from '../../utils/formater'
import { SearchForm } from './components/SearchForm'
import { PriceHighLight, TransationContainer, TransationTable } from './styles'
import { useContextSelector } from 'use-context-selector'

export function Transations() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransationContainer>
        <SearchForm />

        <TransationTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dataFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransationTable>
      </TransationContainer>
    </div>
  )
}
