import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorClickIcon as RegularCursorClickIcon } from './cursor-click';
import { CursorClickIconDuotone as CursorClickIconDuotone } from './cursor-click-duotone';
import { CursorClickIconBold as CursorClickIconBold } from './cursor-click-bold';
import { CursorClickIconBoldDuotone as CursorClickIconBoldDuotone } from './cursor-click-bold-duotone';
import { CursorClickIconFill as CursorClickIconFill } from './cursor-click-fill';
import { CursorClickIconFillDuotone as CursorClickIconFillDuotone } from './cursor-click-fill-duotone';

export interface CursorClickIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CursorClickIcon = memo(forwardRef<SVGSVGElement, CursorClickIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorClickIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CursorClickIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CursorClickIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CursorClickIconFill ref={ref} {...props} />;
  if (duotone) return <CursorClickIconDuotone ref={ref} {...props} />;
  return <RegularCursorClickIcon ref={ref} {...props} />;
}));

CursorClickIcon.displayName = 'CursorClickIcon';

export { CursorClickIcon };
