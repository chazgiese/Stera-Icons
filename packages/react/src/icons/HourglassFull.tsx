import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HourglassFullRegular } from './HourglassFullRegular';
import { HourglassFullRegularDuotone } from './HourglassFullRegularDuotone';
import { HourglassFullBold } from './HourglassFullBold';
import { HourglassFullBoldDuotone } from './HourglassFullBoldDuotone';
import { HourglassFullFill } from './HourglassFullFill';
import { HourglassFullFillDuotone } from './HourglassFullFillDuotone';

export interface HourglassFullProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * HourglassFull with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { HourglassFullRegular } from 'stera-icons/HourglassFullRegular';
 */
const HourglassFull = memo(forwardRef<SVGSVGElement, HourglassFullProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HourglassFullBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HourglassFullBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HourglassFullFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HourglassFullFill ref={ref} {...rest} />;
  if (duotone) return <HourglassFullRegularDuotone ref={ref} {...rest} />;
  return <HourglassFullRegular ref={ref} {...rest} />;
}));

HourglassFull.displayName = 'HourglassFull';

export { HourglassFull };
