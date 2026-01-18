import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarAscRegular } from './ChartBarAscRegular';
import { ChartBarAscRegularDuotone } from './ChartBarAscRegularDuotone';
import { ChartBarAscBold } from './ChartBarAscBold';
import { ChartBarAscBoldDuotone } from './ChartBarAscBoldDuotone';
import { ChartBarAscFill } from './ChartBarAscFill';
import { ChartBarAscFillDuotone } from './ChartBarAscFillDuotone';

export interface ChartBarAscProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ChartBarAsc with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ChartBarAscRegular } from 'stera-icons/ChartBarAscRegular';
 */
const ChartBarAsc = memo(forwardRef<SVGSVGElement, ChartBarAscProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarAscBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ChartBarAscBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ChartBarAscFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ChartBarAscFill ref={ref} {...rest} />;
  if (duotone) return <ChartBarAscRegularDuotone ref={ref} {...rest} />;
  return <ChartBarAscRegular ref={ref} {...rest} />;
}));

ChartBarAsc.displayName = 'ChartBarAsc';

export { ChartBarAsc };
