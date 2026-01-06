import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorOgIcon as RegularCursorOgIcon } from './cursor-og';
import { CursorOgIconDuotone as CursorOgIconDuotone } from './cursor-og-duotone';
import { CursorOgIconBold as CursorOgIconBold } from './cursor-og-bold';
import { CursorOgIconBoldDuotone as CursorOgIconBoldDuotone } from './cursor-og-bold-duotone';
import { CursorOgIconFill as CursorOgIconFill } from './cursor-og-fill';
import { CursorOgIconFillDuotone as CursorOgIconFillDuotone } from './cursor-og-fill-duotone';

export interface CursorOgIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CursorOgIcon = memo(forwardRef<SVGSVGElement, CursorOgIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorOgIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CursorOgIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CursorOgIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CursorOgIconFill ref={ref} {...props} />;
  if (duotone) return <CursorOgIconDuotone ref={ref} {...props} />;
  return <RegularCursorOgIcon ref={ref} {...props} />;
}));

CursorOgIcon.displayName = 'CursorOgIcon';

export { CursorOgIcon };
