import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SquareSlashIcon as RegularSquareSlashIcon } from './square-slash';
import { SquareSlashIconDuotone as SquareSlashIconDuotone } from './square-slash-duotone';
import { SquareSlashIconBold as SquareSlashIconBold } from './square-slash-bold';
import { SquareSlashIconBoldDuotone as SquareSlashIconBoldDuotone } from './square-slash-bold-duotone';
import { SquareSlashIconFill as SquareSlashIconFill } from './square-slash-fill';
import { SquareSlashIconFillDuotone as SquareSlashIconFillDuotone } from './square-slash-fill-duotone';

export interface SquareSlashIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const SquareSlashIcon = memo(forwardRef<SVGSVGElement, SquareSlashIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <SquareSlashIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <SquareSlashIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <SquareSlashIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <SquareSlashIconFill ref={ref} {...props} />;
  if (duotone) return <SquareSlashIconDuotone ref={ref} {...props} />;
  return <RegularSquareSlashIcon ref={ref} {...props} />;
}));

SquareSlashIcon.displayName = 'SquareSlashIcon';

export { SquareSlashIcon };
