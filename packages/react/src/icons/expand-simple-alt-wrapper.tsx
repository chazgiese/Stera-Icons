import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { ExpandSimpleAltIcon as ExpandSimpleAltIconRegular } from './expand-simple-alt';
import { ExpandSimpleAltIconBold } from './expand-simple-alt-bold';
import { ExpandSimpleAltIconFilled } from './expand-simple-alt-filled';
import { ExpandSimpleAltIconFilltone } from './expand-simple-alt-filltone';
import { ExpandSimpleAltIconLinetone } from './expand-simple-alt-linetone';

export interface ExpandSimpleAltIconProps extends IconProps {
  variant?: IconVariant;
}

const ExpandSimpleAltIcon = memo(forwardRef<SVGSVGElement, ExpandSimpleAltIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <ExpandSimpleAltIconFilled ref={ref} {...props} />;
    case 'bold':
      return <ExpandSimpleAltIconBold ref={ref} {...props} />;
    case 'filltone':
      return <ExpandSimpleAltIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <ExpandSimpleAltIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <ExpandSimpleAltIconRegular ref={ref} {...props} />;
  }
}));

ExpandSimpleAltIcon.displayName = 'ExpandSimpleAltIcon';

export { ExpandSimpleAltIcon };
