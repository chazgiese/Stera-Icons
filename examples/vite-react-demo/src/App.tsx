// Subpath imports for optimal tree-shaking (recommended for production)
// Note: Subpath imports use the file name (base component name), but you can destructure any alias
import { Home, HomeIcon, SiHome } from 'stera-icons/icons/Home';
import { SiSearch } from 'stera-icons/icons/Search';
import { SearchBold } from 'stera-icons/icons/SearchBold';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Stera Icons Demo</h1>
        <p>
          Modern React icon library with triple-aliased exports (lucide-react style)
        </p>
      </div>

      <div className="icon-demo">
        <h2>Import Methods</h2>
        <div style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
          <p><strong>This demo uses subpath imports for optimal bundle size:</strong></p>
          <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>
            import {'{ SiHome }'} from 'stera-icons/icons/Home'
          </code>
          <p style={{ marginTop: '10px' }}>
            Note: The file path uses the base name (Home), but you can destructure any alias (Home, HomeIcon, or SiHome).
          </p>
          <p style={{ marginTop: '10px' }}>
            For quick prototyping, you can use barrel imports:<br />
            <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '3px' }}>
              import {'{ SiHome }'} from 'stera-icons'
            </code>
          </p>
        </div>
      </div>

      <div className="icon-demo">
        <h2>Triple Aliasing Examples</h2>
        <div className="variant-grid">
          <div className="variant-item">
            <Home size={48} />
            <span>Home (base)</span>
          </div>
          <div className="variant-item">
            <HomeIcon size={48} />
            <span>HomeIcon (suffix)</span>
          </div>
          <div className="variant-item">
            <SiHome size={48} />
            <span>SiHome (prefix)</span>
          </div>
        </div>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
          All three aliases point to the same component—zero bundle size overhead!
        </p>
      </div>

      <div className="icon-demo">
        <h2>Prefix Style (Recommended)</h2>
        <div className="variant-grid">
          <div className="variant-item">
            <SiHome size={48} />
            <span>SiHome</span>
          </div>
          <div className="variant-item">
            <SiSearch size={48} />
            <span>SiSearch</span>
          </div>
        </div>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
          Use Si prefix for consistency across your app
        </p>
      </div>

      <div className="icon-demo">
        <h2>Direct Variant Imports</h2>
        <div className="variant-grid">
          <div className="variant-item">
            <SearchBold size={48} />
            <span>SearchBold (~300 bytes)</span>
          </div>
        </div>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
          Tree-shakeable: Only import the exact variant you need
        </p>
      </div>

      <div className="icon-demo">
        <h2>Dynamic Wrapper (Convenience)</h2>
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
        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
          Dynamic props when you need runtime switching (~10KB with all 6 variants)
        </p>
      </div>
    </div>
  );
}

export default App;
