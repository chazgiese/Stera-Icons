import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartLineDescIcon as RegularChartLineDescIcon } from './chart-line-desc';
import { ChartLineDescIconDuotone as ChartLineDescIconDuotone } from './chart-line-desc-duotone';
import { ChartLineDescIconBold as ChartLineDescIconBold } from './chart-line-desc-bold';
import { ChartLineDescIconBoldDuotone as ChartLineDescIconBoldDuotone } from './chart-line-desc-bold-duotone';
import { ChartLineDescIconFill as ChartLineDescIconFill } from './chart-line-desc-fill';
import { ChartLineDescIconFillDuotone as ChartLineDescIconFillDuotone } from './chart-line-desc-fill-duotone';

export interface ChartLineDescIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartLineDescIcon = memo(forwardRef<SVGSVGElement, ChartLineDescIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartLineDescIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartLineDescIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartLineDescIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartLineDescIconFill ref={ref} {...props} />;
  if (duotone) return <ChartLineDescIconDuotone ref={ref} {...props} />;
  return <RegularChartLineDescIcon ref={ref} {...props} />;
}));

ChartLineDescIcon.displayName = 'ChartLineDescIcon';

export { ChartLineDescIcon };
