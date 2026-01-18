import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BoxesRegular } from './BoxesRegular';
import { BoxesRegularDuotone } from './BoxesRegularDuotone';
import { BoxesBold } from './BoxesBold';
import { BoxesBoldDuotone } from './BoxesBoldDuotone';
import { BoxesFill } from './BoxesFill';
import { BoxesFillDuotone } from './BoxesFillDuotone';

export interface BoxesProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Boxes with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BoxesRegular } from 'stera-icons/BoxesRegular';
 */
const Boxes = memo(forwardRef<SVGSVGElement, BoxesProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BoxesBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BoxesBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BoxesFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BoxesFill ref={ref} {...rest} />;
  if (duotone) return <BoxesRegularDuotone ref={ref} {...rest} />;
  return <BoxesRegular ref={ref} {...rest} />;
}));

Boxes.displayName = 'Boxes';

export { Boxes };
