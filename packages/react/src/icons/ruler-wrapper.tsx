import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RulerIcon as RulerIconRegular } from './ruler';
import { RulerIconBold } from './ruler-bold';
import { RulerIconFilled } from './ruler-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface RulerIconProps extends IconProps {
  variant?: IconVariant;
}

const RulerIcon = memo(forwardRef<SVGSVGElement, RulerIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RulerIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RulerIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <RulerIconRegular ref={ref} {...props} />;
  }
}));

RulerIcon.displayName = 'RulerIcon';

export { RulerIcon };
