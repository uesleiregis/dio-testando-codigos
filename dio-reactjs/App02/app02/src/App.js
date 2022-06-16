import logo from './logo.svg';
import './App.css';

const listCustomer = [
  {
    id: 1,
    name: 'Bruno Carneiro'
  },
  {
    id: 2,
    name: 'Alice Carneiro'
  },
  {
    id: 3,
    name: 'Tiririca Filho'
  },
  {
    id: 4,
    name: 'Titia Cecéu'
  }
]


function App() {

  const renderCustomers= (customer, index) =>{
    return(
      <li key={`customer-${customer.id}`}>{customer.name}</li>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
   
  );
}

export default App;

