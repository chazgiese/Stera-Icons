import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { SearchBold, SearchBoldIcon, SiSearchBold } from '../icons/SearchBold';
import { Search, SearchIcon, SiSearch } from '../icons/Search';

describe('Icon Components', () => {
  describe('SearchBold variant', () => {
    it('renders SearchBold with correct SVG structure', () => {
      const { container } = render(<SearchBold />);
      
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    });

    it('renders with correct path element', () => {
      const { container } = render(<SearchBold />);
      
      const path = container.querySelector('path');
      expect(path).toBeInTheDocument();
      expect(path).toHaveAttribute('d');
      expect(path).toHaveAttribute('fill', 'currentColor');
    });

    it('applies icon-specific CSS class', () => {
      const { container } = render(<SearchBold />);
      
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('stera');
      expect(svg).toHaveClass('stera-search-bold');
    });

    it('accepts size prop', () => {
      const { container } = render(<SearchBold size={32} />);
      
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '32');
      expect(svg).toHaveAttribute('height', '32');
    });

    it('accepts color prop', () => {
      const { container } = render(<SearchBold color="blue" />);
      
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('fill', 'blue');
    });

    it('forwards ref correctly', () => {
      const ref = createRef<SVGSVGElement>();
      render(<SearchBold ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(SVGSVGElement);
    });

    it('forwards standard SVG props', () => {
      render(<SearchBold data-testid="search-icon" className="custom" />);
      
      const svg = screen.getByTestId('search-icon');
      expect(svg).toHaveClass('custom');
    });
  });

  describe('Triple export aliases', () => {
    it('SearchBold, SearchBoldIcon, and SiSearchBold are the same component', () => {
      expect(SearchBold).toBe(SearchBoldIcon);
      expect(SearchBold).toBe(SiSearchBold);
    });

    it('all aliases render the same output', () => {
      const { container: container1 } = render(<SearchBold />);
      const { container: container2 } = render(<SearchBoldIcon />);
      const { container: container3 } = render(<SiSearchBold />);
      
      expect(container1.innerHTML).toBe(container2.innerHTML);
      expect(container1.innerHTML).toBe(container3.innerHTML);
    });
  });

  describe('Search wrapper component', () => {
    it('Search, SearchIcon, and SiSearch are the same component', () => {
      expect(Search).toBe(SearchIcon);
      expect(Search).toBe(SiSearch);
    });

    it('renders regular variant by default', () => {
      const { container } = render(<Search />);
      
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
      // Regular variant uses iconName="search"
      expect(svg).toHaveClass('stera-search');
    });

    it('renders bold variant when weight="bold"', () => {
      const { container } = render(<Search weight="bold" />);
      
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('stera-search-bold');
    });

    it('renders fill variant when weight="fill"', () => {
      const { container } = render(<Search weight="fill" />);
      
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('stera-search-fill');
    });

    it('renders regular duotone variant when duotone=true', () => {
      const { container } = render(<Search duotone />);
      
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('stera-search-duotone');
    });

    it('renders bold duotone variant when weight="bold" and duotone=true', () => {
      const { container } = render(<Search weight="bold" duotone />);
      
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('stera-search-bold-duotone');
    });

    it('renders fill duotone variant when weight="fill" and duotone=true', () => {
      const { container } = render(<Search weight="fill" duotone />);
      
      const svg = container.querySelector('svg');
      expect(svg).toHaveClass('stera-search-fill-duotone');
    });

    it('forwards props to variant components', () => {
      const { container } = render(<Search size={48} color="red" className="custom" />);
      
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '48');
      expect(svg).toHaveAttribute('height', '48');
      expect(svg).toHaveAttribute('fill', 'red');
      expect(svg).toHaveClass('custom');
    });

    it('forwards ref correctly', () => {
      const ref = createRef<SVGSVGElement>();
      render(<Search ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(SVGSVGElement);
    });

    it('handles accessibility props', () => {
      render(<Search aria-label="Search" />);
      
      const svg = screen.getByLabelText('Search');
      expect(svg).toBeInTheDocument();
    });
  });
});
