import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LayersSimpleRegular } from './LayersSimpleRegular';
import { LayersSimpleRegularDuotone } from './LayersSimpleRegularDuotone';
import { LayersSimpleBold } from './LayersSimpleBold';
import { LayersSimpleBoldDuotone } from './LayersSimpleBoldDuotone';
import { LayersSimpleFill } from './LayersSimpleFill';
import { LayersSimpleFillDuotone } from './LayersSimpleFillDuotone';

export interface LayersSimpleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * LayersSimple with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { LayersSimpleRegular } from 'stera-icons/LayersSimpleRegular';
 */
const LayersSimple = memo(forwardRef<SVGSVGElement, LayersSimpleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LayersSimpleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LayersSimpleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LayersSimpleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LayersSimpleFill ref={ref} {...rest} />;
  if (duotone) return <LayersSimpleRegularDuotone ref={ref} {...rest} />;
  return <LayersSimpleRegular ref={ref} {...rest} />;
}));

LayersSimple.displayName = 'LayersSimple';

export { LayersSimple };
