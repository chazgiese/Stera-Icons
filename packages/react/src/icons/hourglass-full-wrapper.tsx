import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HourglassFullIcon as HourglassFullIconRegular } from './hourglass-full';
import { HourglassFullIconBold } from './hourglass-full-bold';
import { HourglassFullIconFilled } from './hourglass-full-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface HourglassFullIconProps extends IconProps {
  variant?: IconVariant;
}

const HourglassFullIcon = memo(forwardRef<SVGSVGElement, HourglassFullIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HourglassFullIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HourglassFullIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <HourglassFullIconRegular ref={ref} {...props} />;
  }
}));

HourglassFullIcon.displayName = 'HourglassFullIcon';

export { HourglassFullIcon };
