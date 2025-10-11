import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignVerticalTopIcon as AlignVerticalTopIconRegular } from './align-vertical-top';
import { AlignVerticalTopIconBold } from './align-vertical-top-bold';
import { AlignVerticalTopIconFilled } from './align-vertical-top-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AlignVerticalTopIconProps extends IconProps {
  variant?: IconVariant;
}

const AlignVerticalTopIcon = memo(forwardRef<SVGSVGElement, AlignVerticalTopIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlignVerticalTopIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlignVerticalTopIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlignVerticalTopIconRegular ref={ref} {...props} />;
  }
}));

AlignVerticalTopIcon.displayName = 'AlignVerticalTopIcon';

export { AlignVerticalTopIcon };
