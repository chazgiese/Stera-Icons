import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { XIcon as RegularXIcon } from './x';
import { XIconDuotone as XIconDuotone } from './x-duotone';
import { XIconBold as XIconBold } from './x-bold';
import { XIconBoldDuotone as XIconBoldDuotone } from './x-bold-duotone';
import { XIconFill as XIconFill } from './x-fill';
import { XIconFillDuotone as XIconFillDuotone } from './x-fill-duotone';

export interface XIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const XIcon = memo(forwardRef<SVGSVGElement, XIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <XIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <XIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <XIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <XIconFill ref={ref} {...props} />;
  if (duotone) return <XIconDuotone ref={ref} {...props} />;
  return <RegularXIcon ref={ref} {...props} />;
}));

XIcon.displayName = 'XIcon';

export { XIcon };
