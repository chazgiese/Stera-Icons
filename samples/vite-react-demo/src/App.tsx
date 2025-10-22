import { HomeIcon } from 'stera-icons';

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
        <h2>HomeIcon Variants</h2>
        <div className="variant-grid">
          <div className="variant-item">
            <HomeIcon variant="regular" size={48} />
            <span>regular</span>
          </div>
          <div className="variant-item">
            <HomeIcon variant="bold" size={48} />
            <span>bold</span>
          </div>
          <div className="variant-item">
            <HomeIcon variant="filled" size={48} />
            <span>filled</span>
          </div>
          <div className="variant-item">
            <HomeIcon variant="filltone" size={48} />
            <span>filltone</span>
          </div>
          <div className="variant-item">
            <HomeIcon variant="linetone" size={48} />
            <span>linetone</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
