import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CircleDivideRegular } from './CircleDivideRegular';
import { CircleDivideRegularDuotone } from './CircleDivideRegularDuotone';
import { CircleDivideBold } from './CircleDivideBold';
import { CircleDivideBoldDuotone } from './CircleDivideBoldDuotone';
import { CircleDivideFill } from './CircleDivideFill';
import { CircleDivideFillDuotone } from './CircleDivideFillDuotone';

export interface CircleDivideProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CircleDivide with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CircleDivideRegular } from 'stera-icons/CircleDivideRegular';
 */
const CircleDivide = memo(forwardRef<SVGSVGElement, CircleDivideProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CircleDivideBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CircleDivideBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CircleDivideFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CircleDivideFill ref={ref} {...rest} />;
  if (duotone) return <CircleDivideRegularDuotone ref={ref} {...rest} />;
  return <CircleDivideRegular ref={ref} {...rest} />;
}));

CircleDivide.displayName = 'CircleDivide';

export { CircleDivide };
