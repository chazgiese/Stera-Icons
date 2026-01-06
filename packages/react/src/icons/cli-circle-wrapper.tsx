import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CliCircleIcon as RegularCliCircleIcon } from './cli-circle';
import { CliCircleIconDuotone as CliCircleIconDuotone } from './cli-circle-duotone';
import { CliCircleIconBold as CliCircleIconBold } from './cli-circle-bold';
import { CliCircleIconBoldDuotone as CliCircleIconBoldDuotone } from './cli-circle-bold-duotone';
import { CliCircleIconFill as CliCircleIconFill } from './cli-circle-fill';
import { CliCircleIconFillDuotone as CliCircleIconFillDuotone } from './cli-circle-fill-duotone';

export interface CliCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CliCircleIcon = memo(forwardRef<SVGSVGElement, CliCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CliCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CliCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CliCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CliCircleIconFill ref={ref} {...props} />;
  if (duotone) return <CliCircleIconDuotone ref={ref} {...props} />;
  return <RegularCliCircleIcon ref={ref} {...props} />;
}));

CliCircleIcon.displayName = 'CliCircleIcon';

export { CliCircleIcon };
