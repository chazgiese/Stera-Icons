import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { StoreRegular } from './StoreRegular';
import { StoreRegularDuotone } from './StoreRegularDuotone';
import { StoreBold } from './StoreBold';
import { StoreBoldDuotone } from './StoreBoldDuotone';
import { StoreFill } from './StoreFill';
import { StoreFillDuotone } from './StoreFillDuotone';

export interface StoreProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Store with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { StoreRegular } from 'stera-icons/StoreRegular';
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

export { Store };
