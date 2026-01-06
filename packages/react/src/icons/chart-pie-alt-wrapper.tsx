import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChartPieAltIcon as RegularChartPieAltIcon } from './chart-pie-alt';
import { ChartPieAltIconDuotone as ChartPieAltIconDuotone } from './chart-pie-alt-duotone';
import { ChartPieAltIconBold as ChartPieAltIconBold } from './chart-pie-alt-bold';
import { ChartPieAltIconBoldDuotone as ChartPieAltIconBoldDuotone } from './chart-pie-alt-bold-duotone';
import { ChartPieAltIconFill as ChartPieAltIconFill } from './chart-pie-alt-fill';
import { ChartPieAltIconFillDuotone as ChartPieAltIconFillDuotone } from './chart-pie-alt-fill-duotone';

export interface ChartPieAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChartPieAltIcon = memo(forwardRef<SVGSVGElement, ChartPieAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChartPieAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChartPieAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChartPieAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChartPieAltIconFill ref={ref} {...props} />;
  if (duotone) return <ChartPieAltIconDuotone ref={ref} {...props} />;
  return <RegularChartPieAltIcon ref={ref} {...props} />;
}));

ChartPieAltIcon.displayName = 'ChartPieAltIcon';

export { ChartPieAltIcon };
