import { useState, useEffect } from 'react';
import { SearchFilled, HeartFilled, Star, Cog, User, Home, Mail, Phone, Calendar, Download } from 'stera-icons';

// Mock data for demonstration - in real usage, this would come from icons.meta.json
const mockIcons = [
  { name: 'search', variant: 'outline', component: SearchFilled, tags: ['search', 'find', 'magnify'] },
  { name: 'heart', variant: 'outline', component: HeartFilled, tags: ['heart', 'love', 'favorite'] },
  { name: 'star', variant: 'outline', component: Star, tags: ['star', 'rating', 'favorite'] },
  { name: 'cog', variant: 'outline', component: Cog, tags: ['settings', 'gear', 'preferences'] },
  { name: 'user', variant: 'outline', component: User, tags: ['user', 'person', 'profile'] },
  { name: 'home', variant: 'outline', component: Home, tags: ['home', 'house', 'main'] },
  { name: 'mail', variant: 'outline', component: Mail, tags: ['mail', 'email', 'message'] },
  { name: 'phone', variant: 'outline', component: Phone, tags: ['phone', 'call', 'contact'] },
  { name: 'calendar', variant: 'outline', component: Calendar, tags: ['calendar', 'date', 'schedule'] },
  { name: 'download', variant: 'outline', component: Download, tags: ['download', 'save', 'get'] },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [size, setSize] = useState(24);
  const [color, setColor] = useState('#646cff');
  const [filteredIcons, setFilteredIcons] = useState(mockIcons);

  useEffect(() => {
    const filtered = mockIcons.filter(icon => 
      icon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      icon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredIcons(filtered);
  }, [searchTerm]);

  return (
    <div className="App">
      <div>
        <h1>Stera Icons Demo</h1>
        <p>
          A lightweight, tree-shakeable React icon library built from Figma
        </p>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search icons by name or tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="controls">
        <div className="control-group">
          <label htmlFor="size">Size:</label>
          <input
            id="size"
            type="number"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            min="12"
            max="128"
          />
        </div>
        
        <div className="control-group">
          <label htmlFor="color">Color:</label>
          <input
            id="color"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>

      <div className="icon-grid">
        {filteredIcons.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <div key={index} className="icon-item">
              <div className="icon-preview">
                <IconComponent 
                  size={size} 
                  color={color}
                  aria-label={`${icon.name} icon`}
                />
              </div>
              <div className="icon-name">{icon.name}</div>
            </div>
          );
        })}
      </div>

      {filteredIcons.length === 0 && (
        <div style={{ textAlign: 'center', color: '#888', margin: '2rem 0' }}>
          No icons found matching "{searchTerm}"
        </div>
      )}

      <div style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '800px', margin: '3rem auto' }}>
        <h2>Usage Examples</h2>
        <div style={{ background: '#1a1a1a', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace' }}>
          <pre>{`// Import individual icons
import { Search, Heart, Star } from 'stera-icons';

// Use with props
<Search size={24} color="#646cff" aria-label="Search" />

// Tree-shakeable imports
import SearchIcon from 'stera-icons/search';
import HeartFilled from 'stera-icons/heart-filled';

// Accessibility
<SearchIcon aria-hidden="true" /> // Decorative
<SearchIcon aria-label="Search products" /> // Meaningful`}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
