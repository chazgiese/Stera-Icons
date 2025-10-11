import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PencilTipIcon as PencilTipIconRegular } from './pencil-tip';
import { PencilTipIconBold } from './pencil-tip-bold';
import { PencilTipIconFilled } from './pencil-tip-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <PencilTipIconRegular ref={ref} {...props} />;
  }
}));

PencilTipIcon.displayName = 'PencilTipIcon';

export { PencilTipIcon };
