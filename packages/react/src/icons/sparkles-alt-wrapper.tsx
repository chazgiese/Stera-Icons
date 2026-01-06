import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SparklesAltIcon as RegularSparklesAltIcon } from './sparkles-alt';
import { SparklesAltIconDuotone as SparklesAltIconDuotone } from './sparkles-alt-duotone';
import { SparklesAltIconBold as SparklesAltIconBold } from './sparkles-alt-bold';
import { SparklesAltIconBoldDuotone as SparklesAltIconBoldDuotone } from './sparkles-alt-bold-duotone';
import { SparklesAltIconFill as SparklesAltIconFill } from './sparkles-alt-fill';
import { SparklesAltIconFillDuotone as SparklesAltIconFillDuotone } from './sparkles-alt-fill-duotone';

export interface SparklesAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SparklesAltIcon = memo(forwardRef<SVGSVGElement, SparklesAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SparklesAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SparklesAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SparklesAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SparklesAltIconFill ref={ref} {...props} />;
  if (duotone) return <SparklesAltIconDuotone ref={ref} {...props} />;
  return <RegularSparklesAltIcon ref={ref} {...props} />;
}));

SparklesAltIcon.displayName = 'SparklesAltIcon';

export { SparklesAltIcon };
