import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarRowDescIcon as RegularChartBarRowDescIcon } from './chart-bar-row-desc';
import { ChartBarRowDescIconDuotone as ChartBarRowDescIconDuotone } from './chart-bar-row-desc-duotone';
import { ChartBarRowDescIconBold as ChartBarRowDescIconBold } from './chart-bar-row-desc-bold';
import { ChartBarRowDescIconBoldDuotone as ChartBarRowDescIconBoldDuotone } from './chart-bar-row-desc-bold-duotone';
import { ChartBarRowDescIconFill as ChartBarRowDescIconFill } from './chart-bar-row-desc-fill';
import { ChartBarRowDescIconFillDuotone as ChartBarRowDescIconFillDuotone } from './chart-bar-row-desc-fill-duotone';

export interface ChartBarRowDescIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartBarRowDescIcon = memo(forwardRef<SVGSVGElement, ChartBarRowDescIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarRowDescIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartBarRowDescIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartBarRowDescIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartBarRowDescIconFill ref={ref} {...props} />;
  if (duotone) return <ChartBarRowDescIconDuotone ref={ref} {...props} />;
  return <RegularChartBarRowDescIcon ref={ref} {...props} />;
}));

ChartBarRowDescIcon.displayName = 'ChartBarRowDescIcon';

export { ChartBarRowDescIcon };
