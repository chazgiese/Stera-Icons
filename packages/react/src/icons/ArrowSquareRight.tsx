import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareRightRegular } from './ArrowSquareRightRegular';
import { ArrowSquareRightRegularDuotone } from './ArrowSquareRightRegularDuotone';
import { ArrowSquareRightBold } from './ArrowSquareRightBold';
import { ArrowSquareRightBoldDuotone } from './ArrowSquareRightBoldDuotone';
import { ArrowSquareRightFill } from './ArrowSquareRightFill';
import { ArrowSquareRightFillDuotone } from './ArrowSquareRightFillDuotone';

export interface ArrowSquareRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowSquareRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowSquareRightRegular } from 'stera-icons/ArrowSquareRightRegular';
 */
const ArrowSquareRight = memo(forwardRef<SVGSVGElement, ArrowSquareRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowSquareRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowSquareRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowSquareRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowSquareRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowSquareRightRegular ref={ref} {...rest} />;
}));

ArrowSquareRight.displayName = 'ArrowSquareRight';

export { ArrowSquareRight };
