import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignVerticalCenterIcon as AlignVerticalCenterIconRegular } from './align-vertical-center';
import { AlignVerticalCenterIconBold } from './align-vertical-center-bold';
import { AlignVerticalCenterIconFilled } from './align-vertical-center-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AlignVerticalCenterIconProps extends IconProps {
  variant?: IconVariant;
}

const AlignVerticalCenterIcon = memo(forwardRef<SVGSVGElement, AlignVerticalCenterIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlignVerticalCenterIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlignVerticalCenterIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlignVerticalCenterIconRegular ref={ref} {...props} />;
  }
}));

AlignVerticalCenterIcon.displayName = 'AlignVerticalCenterIcon';

export { AlignVerticalCenterIcon };
