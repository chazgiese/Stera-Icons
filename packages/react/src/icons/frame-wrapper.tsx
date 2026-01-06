import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FrameIcon as RegularFrameIcon } from './frame';
import { FrameIconDuotone as FrameIconDuotone } from './frame-duotone';
import { FrameIconBold as FrameIconBold } from './frame-bold';
import { FrameIconBoldDuotone as FrameIconBoldDuotone } from './frame-bold-duotone';
import { FrameIconFill as FrameIconFill } from './frame-fill';
import { FrameIconFillDuotone as FrameIconFillDuotone } from './frame-fill-duotone';

export interface FrameIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const FrameIcon = memo(forwardRef<SVGSVGElement, FrameIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <FrameIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <FrameIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <FrameIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <FrameIconFill ref={ref} {...props} />;
  if (duotone) return <FrameIconDuotone ref={ref} {...props} />;
  return <RegularFrameIcon ref={ref} {...props} />;
}));

FrameIcon.displayName = 'FrameIcon';

export { FrameIcon };
