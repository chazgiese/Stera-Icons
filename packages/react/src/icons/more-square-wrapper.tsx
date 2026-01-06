import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreSquareIcon as RegularMoreSquareIcon } from './more-square';
import { MoreSquareIconDuotone as MoreSquareIconDuotone } from './more-square-duotone';
import { MoreSquareIconBold as MoreSquareIconBold } from './more-square-bold';
import { MoreSquareIconBoldDuotone as MoreSquareIconBoldDuotone } from './more-square-bold-duotone';
import { MoreSquareIconFill as MoreSquareIconFill } from './more-square-fill';
import { MoreSquareIconFillDuotone as MoreSquareIconFillDuotone } from './more-square-fill-duotone';

export interface MoreSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MoreSquareIcon = memo(forwardRef<SVGSVGElement, MoreSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MoreSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MoreSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MoreSquareIconFill ref={ref} {...props} />;
  if (duotone) return <MoreSquareIconDuotone ref={ref} {...props} />;
  return <RegularMoreSquareIcon ref={ref} {...props} />;
}));

MoreSquareIcon.displayName = 'MoreSquareIcon';

export { MoreSquareIcon };
