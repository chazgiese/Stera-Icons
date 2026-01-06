import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CopyIcon as RegularCopyIcon } from './copy';
import { CopyIconDuotone as CopyIconDuotone } from './copy-duotone';
import { CopyIconBold as CopyIconBold } from './copy-bold';
import { CopyIconBoldDuotone as CopyIconBoldDuotone } from './copy-bold-duotone';
import { CopyIconFill as CopyIconFill } from './copy-fill';
import { CopyIconFillDuotone as CopyIconFillDuotone } from './copy-fill-duotone';

export interface CopyIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CopyIcon = memo(forwardRef<SVGSVGElement, CopyIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CopyIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CopyIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CopyIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CopyIconFill ref={ref} {...props} />;
  if (duotone) return <CopyIconDuotone ref={ref} {...props} />;
  return <RegularCopyIcon ref={ref} {...props} />;
}));

CopyIcon.displayName = 'CopyIcon';

export { CopyIcon };
