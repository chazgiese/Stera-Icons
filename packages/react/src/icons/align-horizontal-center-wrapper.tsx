import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignHorizontalCenterIcon as AlignHorizontalCenterIconRegular } from './align-horizontal-center';
import { AlignHorizontalCenterIconBold } from './align-horizontal-center-bold';
import { AlignHorizontalCenterIconFilled } from './align-horizontal-center-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface AlignHorizontalCenterIconProps extends IconProps {
  variant?: IconVariant;
}

const AlignHorizontalCenterIcon = memo(forwardRef<SVGSVGElement, AlignHorizontalCenterIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <AlignHorizontalCenterIconFilled ref={ref} {...props} />;
    case 'bold':
      return <AlignHorizontalCenterIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <AlignHorizontalCenterIconRegular ref={ref} {...props} />;
  }
}));

AlignHorizontalCenterIcon.displayName = 'AlignHorizontalCenterIcon';

export { AlignHorizontalCenterIcon };
