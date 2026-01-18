import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HandLeftRegular } from './HandLeftRegular';
import { HandLeftRegularDuotone } from './HandLeftRegularDuotone';
import { HandLeftBold } from './HandLeftBold';
import { HandLeftBoldDuotone } from './HandLeftBoldDuotone';
import { HandLeftFill } from './HandLeftFill';
import { HandLeftFillDuotone } from './HandLeftFillDuotone';

export interface HandLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HandLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { HandLeftRegular } from 'stera-icons/HandLeftRegular';
 */
const HandLeft = memo(forwardRef<SVGSVGElement, HandLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HandLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HandLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HandLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HandLeftFill ref={ref} {...rest} />;
  if (duotone) return <HandLeftRegularDuotone ref={ref} {...rest} />;
  return <HandLeftRegular ref={ref} {...rest} />;
}));

HandLeft.displayName = 'HandLeft';

export { HandLeft };
