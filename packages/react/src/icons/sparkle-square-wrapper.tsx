import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SparkleSquareIcon as RegularSparkleSquareIcon } from './sparkle-square';
import { SparkleSquareIconDuotone as SparkleSquareIconDuotone } from './sparkle-square-duotone';
import { SparkleSquareIconBold as SparkleSquareIconBold } from './sparkle-square-bold';
import { SparkleSquareIconBoldDuotone as SparkleSquareIconBoldDuotone } from './sparkle-square-bold-duotone';
import { SparkleSquareIconFill as SparkleSquareIconFill } from './sparkle-square-fill';
import { SparkleSquareIconFillDuotone as SparkleSquareIconFillDuotone } from './sparkle-square-fill-duotone';

export interface SparkleSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SparkleSquareIcon = memo(forwardRef<SVGSVGElement, SparkleSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SparkleSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SparkleSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SparkleSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SparkleSquareIconFill ref={ref} {...props} />;
  if (duotone) return <SparkleSquareIconDuotone ref={ref} {...props} />;
  return <RegularSparkleSquareIcon ref={ref} {...props} />;
}));

SparkleSquareIcon.displayName = 'SparkleSquareIcon';

export { SparkleSquareIcon };
