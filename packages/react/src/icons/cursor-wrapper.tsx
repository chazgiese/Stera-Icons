import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorIcon as RegularCursorIcon } from './cursor';
import { CursorIconDuotone as CursorIconDuotone } from './cursor-duotone';
import { CursorIconBold as CursorIconBold } from './cursor-bold';
import { CursorIconBoldDuotone as CursorIconBoldDuotone } from './cursor-bold-duotone';
import { CursorIconFill as CursorIconFill } from './cursor-fill';
import { CursorIconFillDuotone as CursorIconFillDuotone } from './cursor-fill-duotone';

export interface CursorIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CursorIcon = memo(forwardRef<SVGSVGElement, CursorIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CursorIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CursorIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CursorIconFill ref={ref} {...props} />;
  if (duotone) return <CursorIconDuotone ref={ref} {...props} />;
  return <RegularCursorIcon ref={ref} {...props} />;
}));

CursorIcon.displayName = 'CursorIcon';

export { CursorIcon };
