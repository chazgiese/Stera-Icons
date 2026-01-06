import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SparklesIcon as RegularSparklesIcon } from './sparkles';
import { SparklesIconDuotone as SparklesIconDuotone } from './sparkles-duotone';
import { SparklesIconBold as SparklesIconBold } from './sparkles-bold';
import { SparklesIconBoldDuotone as SparklesIconBoldDuotone } from './sparkles-bold-duotone';
import { SparklesIconFill as SparklesIconFill } from './sparkles-fill';
import { SparklesIconFillDuotone as SparklesIconFillDuotone } from './sparkles-fill-duotone';

export interface SparklesIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SparklesIcon = memo(forwardRef<SVGSVGElement, SparklesIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SparklesIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SparklesIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SparklesIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SparklesIconFill ref={ref} {...props} />;
  if (duotone) return <SparklesIconDuotone ref={ref} {...props} />;
  return <RegularSparklesIcon ref={ref} {...props} />;
}));

SparklesIcon.displayName = 'SparklesIcon';

export { SparklesIcon };
