import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartLineXYIcon as RegularChartLineXYIcon } from './chart-line-x-y';
import { ChartLineXYIconDuotone as ChartLineXYIconDuotone } from './chart-line-x-y-duotone';
import { ChartLineXYIconBold as ChartLineXYIconBold } from './chart-line-x-y-bold';
import { ChartLineXYIconBoldDuotone as ChartLineXYIconBoldDuotone } from './chart-line-x-y-bold-duotone';
import { ChartLineXYIconFill as ChartLineXYIconFill } from './chart-line-x-y-fill';
import { ChartLineXYIconFillDuotone as ChartLineXYIconFillDuotone } from './chart-line-x-y-fill-duotone';

export interface ChartLineXYIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartLineXYIcon = memo(forwardRef<SVGSVGElement, ChartLineXYIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartLineXYIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartLineXYIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartLineXYIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartLineXYIconFill ref={ref} {...props} />;
  if (duotone) return <ChartLineXYIconDuotone ref={ref} {...props} />;
  return <RegularChartLineXYIcon ref={ref} {...props} />;
}));

ChartLineXYIcon.displayName = 'ChartLineXYIcon';

export { ChartLineXYIcon };
