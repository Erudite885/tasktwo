import { Filters, Layout, SearchResult } from './components';
import './styles/global.css';

const App = () => {
  return (
    <Layout>
      <main className="sticky top-0 left-0 w-full py-[24px] px-[32px] grid grid-flow-col grid-cols-[30%_auto] gap-[32px]">
        <div>
          <Filters />
        </div>
        <SearchResult />
      </main>
    </Layout>
  );

}

export default App
