import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorNavigationIcon as RegularCursorNavigationIcon } from './cursor-navigation';
import { CursorNavigationIconDuotone as CursorNavigationIconDuotone } from './cursor-navigation-duotone';
import { CursorNavigationIconBold as CursorNavigationIconBold } from './cursor-navigation-bold';
import { CursorNavigationIconBoldDuotone as CursorNavigationIconBoldDuotone } from './cursor-navigation-bold-duotone';
import { CursorNavigationIconFill as CursorNavigationIconFill } from './cursor-navigation-fill';
import { CursorNavigationIconFillDuotone as CursorNavigationIconFillDuotone } from './cursor-navigation-fill-duotone';

export interface CursorNavigationIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CursorNavigationIcon = memo(forwardRef<SVGSVGElement, CursorNavigationIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorNavigationIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CursorNavigationIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CursorNavigationIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CursorNavigationIconFill ref={ref} {...props} />;
  if (duotone) return <CursorNavigationIconDuotone ref={ref} {...props} />;
  return <RegularCursorNavigationIcon ref={ref} {...props} />;
}));

CursorNavigationIcon.displayName = 'CursorNavigationIcon';

export { CursorNavigationIcon };
