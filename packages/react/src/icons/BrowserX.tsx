import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrowserXRegular } from './BrowserXRegular';
import { BrowserXRegularDuotone } from './BrowserXRegularDuotone';
import { BrowserXBold } from './BrowserXBold';
import { BrowserXBoldDuotone } from './BrowserXBoldDuotone';
import { BrowserXFill } from './BrowserXFill';
import { BrowserXFillDuotone } from './BrowserXFillDuotone';

export interface BrowserXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BrowserX - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BrowserXRegular } from 'stera-icons/BrowserXRegular';
 */
const BrowserX = memo(forwardRef<SVGSVGElement, BrowserXProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrowserXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BrowserXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BrowserXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BrowserXFill ref={ref} {...rest} />;
  if (duotone) return <BrowserXRegularDuotone ref={ref} {...rest} />;
  return <BrowserXRegular ref={ref} {...rest} />;
}));

BrowserX.displayName = 'BrowserX';

// Triple export pattern (lucide-react style)
export { BrowserX, BrowserX as BrowserXIcon, BrowserX as SiBrowserX };
