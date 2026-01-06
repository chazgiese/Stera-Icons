import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CliSquareIcon as RegularCliSquareIcon } from './cli-square';
import { CliSquareIconDuotone as CliSquareIconDuotone } from './cli-square-duotone';
import { CliSquareIconBold as CliSquareIconBold } from './cli-square-bold';
import { CliSquareIconBoldDuotone as CliSquareIconBoldDuotone } from './cli-square-bold-duotone';
import { CliSquareIconFill as CliSquareIconFill } from './cli-square-fill';
import { CliSquareIconFillDuotone as CliSquareIconFillDuotone } from './cli-square-fill-duotone';

export interface CliSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CliSquareIcon = memo(forwardRef<SVGSVGElement, CliSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CliSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CliSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CliSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CliSquareIconFill ref={ref} {...props} />;
  if (duotone) return <CliSquareIconDuotone ref={ref} {...props} />;
  return <RegularCliSquareIcon ref={ref} {...props} />;
}));

CliSquareIcon.displayName = 'CliSquareIcon';

export { CliSquareIcon };
