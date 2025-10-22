import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { PencilTipIcon as PencilTipIconRegular } from './pencil-tip';
import { PencilTipIconBold } from './pencil-tip-bold';
import { PencilTipIconFilled } from './pencil-tip-filled';
import { PencilTipIconFilltone } from './pencil-tip-filltone';
import { PencilTipIconLinetone } from './pencil-tip-linetone';

export interface PencilTipIconProps extends IconProps {
  variant?: IconVariant;
}

const PencilTipIcon = memo(forwardRef<SVGSVGElement, PencilTipIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <PencilTipIconFilled ref={ref} {...props} />;
    case 'bold':
      return <PencilTipIconBold ref={ref} {...props} />;
    case 'filltone':
      return <PencilTipIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <PencilTipIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <PencilTipIconRegular ref={ref} {...props} />;
  }
}));

PencilTipIcon.displayName = 'PencilTipIcon';

export { PencilTipIcon };
