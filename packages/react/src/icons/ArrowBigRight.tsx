import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowBigRightRegular } from './ArrowBigRightRegular';
import { ArrowBigRightRegularDuotone } from './ArrowBigRightRegularDuotone';
import { ArrowBigRightBold } from './ArrowBigRightBold';
import { ArrowBigRightBoldDuotone } from './ArrowBigRightBoldDuotone';
import { ArrowBigRightFill } from './ArrowBigRightFill';
import { ArrowBigRightFillDuotone } from './ArrowBigRightFillDuotone';

export interface ArrowBigRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowBigRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowBigRightRegular } from 'stera-icons/ArrowBigRightRegular';
 */
const ArrowBigRight = memo(forwardRef<SVGSVGElement, ArrowBigRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowBigRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowBigRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowBigRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowBigRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowBigRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowBigRightRegular ref={ref} {...rest} />;
}));

ArrowBigRight.displayName = 'ArrowBigRight';

export { ArrowBigRight };
