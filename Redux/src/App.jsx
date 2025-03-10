import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './cartReducer';
import ShoppingCart from './ShoppingCart';
const store = createStore(cartReducer);

function App() {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  );
}
export default App;
