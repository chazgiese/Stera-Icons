import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FlowerRegular } from './FlowerRegular';
import { FlowerRegularDuotone } from './FlowerRegularDuotone';
import { FlowerBold } from './FlowerBold';
import { FlowerBoldDuotone } from './FlowerBoldDuotone';
import { FlowerFill } from './FlowerFill';
import { FlowerFillDuotone } from './FlowerFillDuotone';

export interface FlowerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Flower - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FlowerRegular } from 'stera-icons/icons/FlowerRegular';
 */
const Flower = memo(forwardRef<SVGSVGElement, FlowerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FlowerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FlowerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FlowerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FlowerFill ref={ref} {...rest} />;
  if (duotone) return <FlowerRegularDuotone ref={ref} {...rest} />;
  return <FlowerRegular ref={ref} {...rest} />;
}));

Flower.displayName = 'Flower';

// Triple export pattern (lucide-react style)
export { Flower, Flower as FlowerIcon, Flower as SiFlower };
