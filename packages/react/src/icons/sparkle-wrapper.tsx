import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SparkleIcon as RegularSparkleIcon } from './sparkle';
import { SparkleIconDuotone as SparkleIconDuotone } from './sparkle-duotone';
import { SparkleIconBold as SparkleIconBold } from './sparkle-bold';
import { SparkleIconBoldDuotone as SparkleIconBoldDuotone } from './sparkle-bold-duotone';
import { SparkleIconFill as SparkleIconFill } from './sparkle-fill';
import { SparkleIconFillDuotone as SparkleIconFillDuotone } from './sparkle-fill-duotone';

export interface SparkleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SparkleIcon = memo(forwardRef<SVGSVGElement, SparkleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SparkleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SparkleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SparkleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SparkleIconFill ref={ref} {...props} />;
  if (duotone) return <SparkleIconDuotone ref={ref} {...props} />;
  return <RegularSparkleIcon ref={ref} {...props} />;
}));

SparkleIcon.displayName = 'SparkleIcon';

export { SparkleIcon };
