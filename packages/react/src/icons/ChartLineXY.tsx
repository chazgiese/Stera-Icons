import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartLineXYRegular } from './ChartLineXYRegular';
import { ChartLineXYRegularDuotone } from './ChartLineXYRegularDuotone';
import { ChartLineXYBold } from './ChartLineXYBold';
import { ChartLineXYBoldDuotone } from './ChartLineXYBoldDuotone';
import { ChartLineXYFill } from './ChartLineXYFill';
import { ChartLineXYFillDuotone } from './ChartLineXYFillDuotone';

export interface ChartLineXYProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartLineXY with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChartLineXYRegular } from 'stera-icons/ChartLineXYRegular';
 */
const ChartLineXY = memo(forwardRef<SVGSVGElement, ChartLineXYProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartLineXYBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartLineXYBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartLineXYFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartLineXYFill ref={ref} {...rest} />;
  if (duotone) return <ChartLineXYRegularDuotone ref={ref} {...rest} />;
  return <ChartLineXYRegular ref={ref} {...rest} />;
}));

ChartLineXY.displayName = 'ChartLineXY';

export { ChartLineXY };
