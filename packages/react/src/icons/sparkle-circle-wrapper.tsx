import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SparkleCircleIcon as RegularSparkleCircleIcon } from './sparkle-circle';
import { SparkleCircleIconDuotone as SparkleCircleIconDuotone } from './sparkle-circle-duotone';
import { SparkleCircleIconBold as SparkleCircleIconBold } from './sparkle-circle-bold';
import { SparkleCircleIconBoldDuotone as SparkleCircleIconBoldDuotone } from './sparkle-circle-bold-duotone';
import { SparkleCircleIconFill as SparkleCircleIconFill } from './sparkle-circle-fill';
import { SparkleCircleIconFillDuotone as SparkleCircleIconFillDuotone } from './sparkle-circle-fill-duotone';

export interface SparkleCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SparkleCircleIcon = memo(forwardRef<SVGSVGElement, SparkleCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SparkleCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SparkleCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SparkleCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SparkleCircleIconFill ref={ref} {...props} />;
  if (duotone) return <SparkleCircleIconDuotone ref={ref} {...props} />;
  return <RegularSparkleCircleIcon ref={ref} {...props} />;
}));

SparkleCircleIcon.displayName = 'SparkleCircleIcon';

export { SparkleCircleIcon };
