import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CliIcon as RegularCliIcon } from './cli';
import { CliIconDuotone as CliIconDuotone } from './cli-duotone';
import { CliIconBold as CliIconBold } from './cli-bold';
import { CliIconBoldDuotone as CliIconBoldDuotone } from './cli-bold-duotone';
import { CliIconFill as CliIconFill } from './cli-fill';
import { CliIconFillDuotone as CliIconFillDuotone } from './cli-fill-duotone';

export interface CliIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CliIcon = memo(forwardRef<SVGSVGElement, CliIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CliIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CliIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CliIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CliIconFill ref={ref} {...props} />;
  if (duotone) return <CliIconDuotone ref={ref} {...props} />;
  return <RegularCliIcon ref={ref} {...props} />;
}));

CliIcon.displayName = 'CliIcon';

export { CliIcon };
