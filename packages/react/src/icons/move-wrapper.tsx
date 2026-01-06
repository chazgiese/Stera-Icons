import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoveIcon as RegularMoveIcon } from './move';
import { MoveIconDuotone as MoveIconDuotone } from './move-duotone';
import { MoveIconBold as MoveIconBold } from './move-bold';
import { MoveIconBoldDuotone as MoveIconBoldDuotone } from './move-bold-duotone';
import { MoveIconFill as MoveIconFill } from './move-fill';
import { MoveIconFillDuotone as MoveIconFillDuotone } from './move-fill-duotone';

export interface MoveIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MoveIcon = memo(forwardRef<SVGSVGElement, MoveIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoveIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MoveIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MoveIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MoveIconFill ref={ref} {...props} />;
  if (duotone) return <MoveIconDuotone ref={ref} {...props} />;
  return <RegularMoveIcon ref={ref} {...props} />;
}));

MoveIcon.displayName = 'MoveIcon';

export { MoveIcon };
