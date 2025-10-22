import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlignHorizontalCenterIcon as RegularAlignHorizontalCenterIcon } from './align-horizontal-center';
import { AlignHorizontalCenterIconBold } from './align-horizontal-center-bold';
import { AlignHorizontalCenterIconFilled } from './align-horizontal-center-filled';
import { AlignHorizontalCenterIconFilltone } from './align-horizontal-center-filltone';
import { AlignHorizontalCenterIconLinetone } from './align-horizontal-center-linetone';

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
    case 'filltone':
      return <AlignHorizontalCenterIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlignHorizontalCenterIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAlignHorizontalCenterIcon ref={ref} {...props} />;
  }
}));

AlignHorizontalCenterIcon.displayName = 'AlignHorizontalCenterIcon';

export { AlignHorizontalCenterIcon };
