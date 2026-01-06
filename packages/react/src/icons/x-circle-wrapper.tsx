import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { XCircleIcon as RegularXCircleIcon } from './x-circle';
import { XCircleIconDuotone as XCircleIconDuotone } from './x-circle-duotone';
import { XCircleIconBold as XCircleIconBold } from './x-circle-bold';
import { XCircleIconBoldDuotone as XCircleIconBoldDuotone } from './x-circle-bold-duotone';
import { XCircleIconFill as XCircleIconFill } from './x-circle-fill';
import { XCircleIconFillDuotone as XCircleIconFillDuotone } from './x-circle-fill-duotone';

export interface XCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const XCircleIcon = memo(forwardRef<SVGSVGElement, XCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <XCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <XCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <XCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <XCircleIconFill ref={ref} {...props} />;
  if (duotone) return <XCircleIconDuotone ref={ref} {...props} />;
  return <RegularXCircleIcon ref={ref} {...props} />;
}));

XCircleIcon.displayName = 'XCircleIcon';

export { XCircleIcon };
