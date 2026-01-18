import { Home } from 'stera-icons';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Stera Icons Demo</h1>
        <p>
          Testing icon import and rendering with all variants
        </p>
      </div>

      <div className="icon-demo">
        <h2>Home Variants</h2>
        <div className="variant-grid">
          <div className="variant-item">
            <Home size={48} />
            <span>regular</span>
          </div>
          <div className="variant-item">
            <Home duotone size={48} />
            <span>regular duotone</span>
          </div>
          <div className="variant-item">
            <Home weight="bold" size={48} />
            <span>bold</span>
          </div>
          <div className="variant-item">
            <Home weight="bold" duotone size={48} />
            <span>bold duotone</span>
          </div>
          <div className="variant-item">
            <Home weight="fill" size={48} />
            <span>fill</span>
          </div>
          <div className="variant-item">
            <Home weight="fill" duotone size={48} />
            <span>fill duotone</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
