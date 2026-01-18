import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HandRightRegular } from './HandRightRegular';
import { HandRightRegularDuotone } from './HandRightRegularDuotone';
import { HandRightBold } from './HandRightBold';
import { HandRightBoldDuotone } from './HandRightBoldDuotone';
import { HandRightFill } from './HandRightFill';
import { HandRightFillDuotone } from './HandRightFillDuotone';

export interface HandRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HandRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { HandRightRegular } from 'stera-icons/HandRightRegular';
 */
const HandRight = memo(forwardRef<SVGSVGElement, HandRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HandRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HandRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HandRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HandRightFill ref={ref} {...rest} />;
  if (duotone) return <HandRightRegularDuotone ref={ref} {...rest} />;
  return <HandRightRegular ref={ref} {...rest} />;
}));

HandRight.displayName = 'HandRight';

export { HandRight };
