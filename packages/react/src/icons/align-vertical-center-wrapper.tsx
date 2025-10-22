import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { AlignVerticalCenterIcon as RegularAlignVerticalCenterIcon } from './align-vertical-center';
import { AlignVerticalCenterIconBold } from './align-vertical-center-bold';
import { AlignVerticalCenterIconFilled } from './align-vertical-center-filled';
import { AlignVerticalCenterIconFilltone } from './align-vertical-center-filltone';
import { AlignVerticalCenterIconLinetone } from './align-vertical-center-linetone';

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
    case 'filltone':
      return <AlignVerticalCenterIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <AlignVerticalCenterIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularAlignVerticalCenterIcon ref={ref} {...props} />;
  }
}));

AlignVerticalCenterIcon.displayName = 'AlignVerticalCenterIcon';

export { AlignVerticalCenterIcon };
