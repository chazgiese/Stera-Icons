import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrightnessMediumIcon as BrightnessMediumIconRegular } from './brightness-medium';
import { BrightnessMediumIconBold } from './brightness-medium-bold';
import { BrightnessMediumIconFilled } from './brightness-medium-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface BrightnessMediumIconProps extends IconProps {
  variant?: IconVariant;
}

const BrightnessMediumIcon = memo(forwardRef<SVGSVGElement, BrightnessMediumIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <BrightnessMediumIconFilled ref={ref} {...props} />;
    case 'bold':
      return <BrightnessMediumIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <BrightnessMediumIconRegular ref={ref} {...props} />;
  }
}));

BrightnessMediumIcon.displayName = 'BrightnessMediumIcon';

export { BrightnessMediumIcon };
