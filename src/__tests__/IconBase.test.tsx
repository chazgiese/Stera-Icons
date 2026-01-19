import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { IconBase } from '../IconBase';

describe('IconBase', () => {
  it('renders with default props', () => {
    const { container } = render(
      <IconBase>
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
    expect(svg).toHaveAttribute('fill', 'currentColor');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('accepts custom size as number', () => {
    const { container } = render(
      <IconBase size={32}>
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('accepts custom size as string', () => {
    const { container } = render(
      <IconBase size="2rem">
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '2rem');
    expect(svg).toHaveAttribute('height', '2rem');
  });

  it('accepts custom color', () => {
    const { container } = render(
      <IconBase color="red">
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('fill', 'red');
  });

  it('merges className properly', () => {
    const { container } = render(
      <IconBase className="custom-class">
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('stera');
    expect(svg).toHaveClass('custom-class');
  });

  it('auto sets aria-hidden when no a11y props present', () => {
    const { container } = render(
      <IconBase>
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden');
  });

  it('respects explicit aria-hidden="false"', () => {
    render(
      <IconBase aria-hidden={false}>
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = document.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'false');
  });

  it('renders aria-label when provided and does not auto-hide', () => {
    render(
      <IconBase aria-label="Search icon">
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = screen.getByLabelText('Search icon');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('aria-label', 'Search icon');
  });

  it('forwards ref correctly', () => {
    const ref = createRef<SVGSVGElement>();
    render(
      <IconBase ref={ref}>
        <path d="M10 10" />
      </IconBase>
    );
    
    expect(ref.current).toBeInstanceOf(SVGSVGElement);
  });

  it('renders children (SVG paths)', () => {
    render(
      <IconBase>
        <path d="M10 10" data-testid="test-path" />
        <circle cx="12" cy="12" r="5" data-testid="test-circle" />
      </IconBase>
    );
    
    expect(screen.getByTestId('test-path')).toBeInTheDocument();
    expect(screen.getByTestId('test-circle')).toBeInTheDocument();
  });

  it('generates icon-specific CSS classes from iconName prop', () => {
    const { container } = render(
      <IconBase iconName="search-bold">
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('stera');
    expect(svg).toHaveClass('stera-search-bold');
  });

  it('merges icon-specific classes with custom className', () => {
    const { container } = render(
      <IconBase iconName="home" className="my-icon">
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('stera');
    expect(svg).toHaveClass('stera-home');
    expect(svg).toHaveClass('my-icon');
  });

  it('forwards standard SVG props', () => {
    render(
      <IconBase data-testid="custom-svg" strokeWidth={2}>
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = screen.getByTestId('custom-svg');
    expect(svg).toHaveAttribute('stroke-width', '2');
  });

  it('respects role attribute when provided', () => {
    render(
      <IconBase role="img">
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = screen.getByRole('img');
    expect(svg).toBeInTheDocument();
  });

  it('handles title attribute', () => {
    const { container } = render(
      <IconBase title="Icon title">
        <path d="M10 10" />
      </IconBase>
    );
    
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('title', 'Icon title');
  });
});
