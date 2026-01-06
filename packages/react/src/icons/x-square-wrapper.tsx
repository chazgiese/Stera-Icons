import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { XSquareIcon as RegularXSquareIcon } from './x-square';
import { XSquareIconDuotone as XSquareIconDuotone } from './x-square-duotone';
import { XSquareIconBold as XSquareIconBold } from './x-square-bold';
import { XSquareIconBoldDuotone as XSquareIconBoldDuotone } from './x-square-bold-duotone';
import { XSquareIconFill as XSquareIconFill } from './x-square-fill';
import { XSquareIconFillDuotone as XSquareIconFillDuotone } from './x-square-fill-duotone';

export interface XSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const XSquareIcon = memo(forwardRef<SVGSVGElement, XSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <XSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <XSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <XSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <XSquareIconFill ref={ref} {...props} />;
  if (duotone) return <XSquareIconDuotone ref={ref} {...props} />;
  return <RegularXSquareIcon ref={ref} {...props} />;
}));

XSquareIcon.displayName = 'XSquareIcon';

export { XSquareIcon };
