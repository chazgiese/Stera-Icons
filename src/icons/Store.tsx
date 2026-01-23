import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { StoreRegular } from './StoreRegular.js';
import { StoreRegularDuotone } from './StoreRegularDuotone.js';
import { StoreBold } from './StoreBold.js';
import { StoreBoldDuotone } from './StoreBoldDuotone.js';
import { StoreFill } from './StoreFill.js';
import { StoreFillDuotone } from './StoreFillDuotone.js';

export interface StoreProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Store - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { StoreRegular } from 'stera-icons/icons/StoreRegular';
 */
const Store = memo(forwardRef<SVGSVGElement, StoreProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <StoreBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <StoreBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <StoreFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <StoreFill ref={ref} {...rest} />;
  if (duotone) return <StoreRegularDuotone ref={ref} {...rest} />;
  return <StoreRegular ref={ref} {...rest} />;
}));

Store.displayName = 'Store';

// Triple export pattern (lucide-react style)
export { Store, Store as StoreIcon, Store as SiStore };
export default Store;
