import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignVerticalBottomIcon as AlignVerticalBottomIconRegular } from './align-vertical-bottom';
import { AlignVerticalBottomIconBold } from './align-vertical-bottom-bold';
import { AlignVerticalBottomIconFilled } from './align-vertical-bottom-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AlignVerticalBottomIconProps extends IconProps {
  variant?: IconVariant;
}

const AlignVerticalBottomIcon = memo(forwardRef<SVGSVGElement, AlignVerticalBottomIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlignVerticalBottomIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlignVerticalBottomIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlignVerticalBottomIconRegular ref={ref} {...props} />;
  }
}));

AlignVerticalBottomIcon.displayName = 'AlignVerticalBottomIcon';

export { AlignVerticalBottomIcon };
