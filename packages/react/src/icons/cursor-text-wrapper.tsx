import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorTextIcon as RegularCursorTextIcon } from './cursor-text';
import { CursorTextIconDuotone as CursorTextIconDuotone } from './cursor-text-duotone';
import { CursorTextIconBold as CursorTextIconBold } from './cursor-text-bold';
import { CursorTextIconBoldDuotone as CursorTextIconBoldDuotone } from './cursor-text-bold-duotone';
import { CursorTextIconFill as CursorTextIconFill } from './cursor-text-fill';
import { CursorTextIconFillDuotone as CursorTextIconFillDuotone } from './cursor-text-fill-duotone';

export interface CursorTextIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CursorTextIcon = memo(forwardRef<SVGSVGElement, CursorTextIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorTextIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CursorTextIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CursorTextIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CursorTextIconFill ref={ref} {...props} />;
  if (duotone) return <CursorTextIconDuotone ref={ref} {...props} />;
  return <RegularCursorTextIcon ref={ref} {...props} />;
}));

CursorTextIcon.displayName = 'CursorTextIcon';

export { CursorTextIcon };
