import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorTextAltIcon as RegularCursorTextAltIcon } from './cursor-text-alt';
import { CursorTextAltIconDuotone as CursorTextAltIconDuotone } from './cursor-text-alt-duotone';
import { CursorTextAltIconBold as CursorTextAltIconBold } from './cursor-text-alt-bold';
import { CursorTextAltIconBoldDuotone as CursorTextAltIconBoldDuotone } from './cursor-text-alt-bold-duotone';
import { CursorTextAltIconFill as CursorTextAltIconFill } from './cursor-text-alt-fill';
import { CursorTextAltIconFillDuotone as CursorTextAltIconFillDuotone } from './cursor-text-alt-fill-duotone';

export interface CursorTextAltIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CursorTextAltIcon = memo(forwardRef<SVGSVGElement, CursorTextAltIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorTextAltIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CursorTextAltIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CursorTextAltIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CursorTextAltIconFill ref={ref} {...props} />;
  if (duotone) return <CursorTextAltIconDuotone ref={ref} {...props} />;
  return <RegularCursorTextAltIcon ref={ref} {...props} />;
}));

CursorTextAltIcon.displayName = 'CursorTextAltIcon';

export { CursorTextAltIcon };
