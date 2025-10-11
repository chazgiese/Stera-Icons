import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignHorizontalRightIcon as AlignHorizontalRightIconRegular } from './align-horizontal-right';
import { AlignHorizontalRightIconBold } from './align-horizontal-right-bold';
import { AlignHorizontalRightIconFilled } from './align-horizontal-right-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AlignHorizontalRightIconProps extends IconProps {
  variant?: IconVariant;
}

const AlignHorizontalRightIcon = memo(forwardRef<SVGSVGElement, AlignHorizontalRightIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlignHorizontalRightIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlignHorizontalRightIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlignHorizontalRightIconRegular ref={ref} {...props} />;
  }
}));

AlignHorizontalRightIcon.displayName = 'AlignHorizontalRightIcon';

export { AlignHorizontalRightIcon };
