import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarDescIcon as RegularChartBarDescIcon } from './chart-bar-desc';
import { ChartBarDescIconDuotone as ChartBarDescIconDuotone } from './chart-bar-desc-duotone';
import { ChartBarDescIconBold as ChartBarDescIconBold } from './chart-bar-desc-bold';
import { ChartBarDescIconBoldDuotone as ChartBarDescIconBoldDuotone } from './chart-bar-desc-bold-duotone';
import { ChartBarDescIconFill as ChartBarDescIconFill } from './chart-bar-desc-fill';
import { ChartBarDescIconFillDuotone as ChartBarDescIconFillDuotone } from './chart-bar-desc-fill-duotone';

export interface ChartBarDescIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartBarDescIcon = memo(forwardRef<SVGSVGElement, ChartBarDescIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarDescIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartBarDescIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartBarDescIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartBarDescIconFill ref={ref} {...props} />;
  if (duotone) return <ChartBarDescIconDuotone ref={ref} {...props} />;
  return <RegularChartBarDescIcon ref={ref} {...props} />;
}));

ChartBarDescIcon.displayName = 'ChartBarDescIcon';

export { ChartBarDescIcon };
