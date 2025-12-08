import { MainLayout } from './layouts/MainLayout';
import { CounterPage } from './features/counter/CounterPage';

function App() {
  return (
    <MainLayout>
      <CounterPage />
    </MainLayout>
  );
}

export default App;
