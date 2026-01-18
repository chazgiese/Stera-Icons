import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareUpRegular } from './ArrowSquareUpRegular';
import { ArrowSquareUpRegularDuotone } from './ArrowSquareUpRegularDuotone';
import { ArrowSquareUpBold } from './ArrowSquareUpBold';
import { ArrowSquareUpBoldDuotone } from './ArrowSquareUpBoldDuotone';
import { ArrowSquareUpFill } from './ArrowSquareUpFill';
import { ArrowSquareUpFillDuotone } from './ArrowSquareUpFillDuotone';

export interface ArrowSquareUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowSquareUp with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowSquareUpRegular } from 'stera-icons/ArrowSquareUpRegular';
 */
const ArrowSquareUp = memo(forwardRef<SVGSVGElement, ArrowSquareUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowSquareUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowSquareUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowSquareUpFill ref={ref} {...rest} />;
  if (duotone) return <ArrowSquareUpRegularDuotone ref={ref} {...rest} />;
  return <ArrowSquareUpRegular ref={ref} {...rest} />;
}));

ArrowSquareUp.displayName = 'ArrowSquareUp';

export { ArrowSquareUp };
