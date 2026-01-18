import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartPieAltRegular } from './ChartPieAltRegular';
import { ChartPieAltRegularDuotone } from './ChartPieAltRegularDuotone';
import { ChartPieAltBold } from './ChartPieAltBold';
import { ChartPieAltBoldDuotone } from './ChartPieAltBoldDuotone';
import { ChartPieAltFill } from './ChartPieAltFill';
import { ChartPieAltFillDuotone } from './ChartPieAltFillDuotone';

export interface ChartPieAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartPieAlt with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChartPieAltRegular } from 'stera-icons/ChartPieAltRegular';
 */
const ChartPieAlt = memo(forwardRef<SVGSVGElement, ChartPieAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartPieAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartPieAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartPieAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartPieAltFill ref={ref} {...rest} />;
  if (duotone) return <ChartPieAltRegularDuotone ref={ref} {...rest} />;
  return <ChartPieAltRegular ref={ref} {...rest} />;
}));

ChartPieAlt.displayName = 'ChartPieAlt';

export { ChartPieAlt };
