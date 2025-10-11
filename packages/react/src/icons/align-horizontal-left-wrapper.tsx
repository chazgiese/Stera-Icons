import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignHorizontalLeftIcon as AlignHorizontalLeftIconRegular } from './align-horizontal-left';
import { AlignHorizontalLeftIconBold } from './align-horizontal-left-bold';
import { AlignHorizontalLeftIconFilled } from './align-horizontal-left-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AlignHorizontalLeftIconProps extends IconProps {
  variant?: IconVariant;
}

const AlignHorizontalLeftIcon = memo(forwardRef<SVGSVGElement, AlignHorizontalLeftIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlignHorizontalLeftIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlignHorizontalLeftIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlignHorizontalLeftIconRegular ref={ref} {...props} />;
  }
}));

AlignHorizontalLeftIcon.displayName = 'AlignHorizontalLeftIcon';

export { AlignHorizontalLeftIcon };
