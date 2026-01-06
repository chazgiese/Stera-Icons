import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartBarSquareIcon as RegularChartBarSquareIcon } from './chart-bar-square';
import { ChartBarSquareIconDuotone as ChartBarSquareIconDuotone } from './chart-bar-square-duotone';
import { ChartBarSquareIconBold as ChartBarSquareIconBold } from './chart-bar-square-bold';
import { ChartBarSquareIconBoldDuotone as ChartBarSquareIconBoldDuotone } from './chart-bar-square-bold-duotone';
import { ChartBarSquareIconFill as ChartBarSquareIconFill } from './chart-bar-square-fill';
import { ChartBarSquareIconFillDuotone as ChartBarSquareIconFillDuotone } from './chart-bar-square-fill-duotone';

export interface ChartBarSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartBarSquareIcon = memo(forwardRef<SVGSVGElement, ChartBarSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartBarSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartBarSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartBarSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartBarSquareIconFill ref={ref} {...props} />;
  if (duotone) return <ChartBarSquareIconDuotone ref={ref} {...props} />;
  return <RegularChartBarSquareIcon ref={ref} {...props} />;
}));

ChartBarSquareIcon.displayName = 'ChartBarSquareIcon';

export { ChartBarSquareIcon };
