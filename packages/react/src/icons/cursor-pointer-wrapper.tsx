import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorPointerIcon as RegularCursorPointerIcon } from './cursor-pointer';
import { CursorPointerIconDuotone as CursorPointerIconDuotone } from './cursor-pointer-duotone';
import { CursorPointerIconBold as CursorPointerIconBold } from './cursor-pointer-bold';
import { CursorPointerIconBoldDuotone as CursorPointerIconBoldDuotone } from './cursor-pointer-bold-duotone';
import { CursorPointerIconFill as CursorPointerIconFill } from './cursor-pointer-fill';
import { CursorPointerIconFillDuotone as CursorPointerIconFillDuotone } from './cursor-pointer-fill-duotone';

export interface CursorPointerIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CursorPointerIcon = memo(forwardRef<SVGSVGElement, CursorPointerIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorPointerIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CursorPointerIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CursorPointerIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CursorPointerIconFill ref={ref} {...props} />;
  if (duotone) return <CursorPointerIconDuotone ref={ref} {...props} />;
  return <RegularCursorPointerIcon ref={ref} {...props} />;
}));

CursorPointerIcon.displayName = 'CursorPointerIcon';

export { CursorPointerIcon };
