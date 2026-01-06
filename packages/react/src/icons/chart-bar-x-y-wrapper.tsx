import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarXYIcon as RegularChartBarXYIcon } from './chart-bar-x-y';
import { ChartBarXYIconDuotone as ChartBarXYIconDuotone } from './chart-bar-x-y-duotone';
import { ChartBarXYIconBold as ChartBarXYIconBold } from './chart-bar-x-y-bold';
import { ChartBarXYIconBoldDuotone as ChartBarXYIconBoldDuotone } from './chart-bar-x-y-bold-duotone';
import { ChartBarXYIconFill as ChartBarXYIconFill } from './chart-bar-x-y-fill';
import { ChartBarXYIconFillDuotone as ChartBarXYIconFillDuotone } from './chart-bar-x-y-fill-duotone';

export interface ChartBarXYIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartBarXYIcon = memo(forwardRef<SVGSVGElement, ChartBarXYIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarXYIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartBarXYIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartBarXYIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartBarXYIconFill ref={ref} {...props} />;
  if (duotone) return <ChartBarXYIconDuotone ref={ref} {...props} />;
  return <RegularChartBarXYIcon ref={ref} {...props} />;
}));

ChartBarXYIcon.displayName = 'ChartBarXYIcon';

export { ChartBarXYIcon };
