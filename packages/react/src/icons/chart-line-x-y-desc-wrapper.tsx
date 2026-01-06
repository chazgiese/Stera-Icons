import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartLineXYDescIcon as RegularChartLineXYDescIcon } from './chart-line-x-y-desc';
import { ChartLineXYDescIconDuotone as ChartLineXYDescIconDuotone } from './chart-line-x-y-desc-duotone';
import { ChartLineXYDescIconBold as ChartLineXYDescIconBold } from './chart-line-x-y-desc-bold';
import { ChartLineXYDescIconBoldDuotone as ChartLineXYDescIconBoldDuotone } from './chart-line-x-y-desc-bold-duotone';
import { ChartLineXYDescIconFill as ChartLineXYDescIconFill } from './chart-line-x-y-desc-fill';
import { ChartLineXYDescIconFillDuotone as ChartLineXYDescIconFillDuotone } from './chart-line-x-y-desc-fill-duotone';

export interface ChartLineXYDescIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartLineXYDescIcon = memo(forwardRef<SVGSVGElement, ChartLineXYDescIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartLineXYDescIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartLineXYDescIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartLineXYDescIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartLineXYDescIconFill ref={ref} {...props} />;
  if (duotone) return <ChartLineXYDescIconDuotone ref={ref} {...props} />;
  return <RegularChartLineXYDescIcon ref={ref} {...props} />;
}));

ChartLineXYDescIcon.displayName = 'ChartLineXYDescIcon';

export { ChartLineXYDescIcon };
