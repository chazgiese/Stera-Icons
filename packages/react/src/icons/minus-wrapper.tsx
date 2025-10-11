import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MinusIcon as MinusIconRegular } from './minus';
import { MinusIconBold } from './minus-bold';
import { MinusIconFilled } from './minus-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface MinusIconProps extends IconProps {
  variant?: IconVariant;
}

const MinusIcon = memo(forwardRef<SVGSVGElement, MinusIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <MinusIconFilled ref={ref} {...props} />;
    case 'bold':
      return <MinusIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <MinusIconRegular ref={ref} {...props} />;
  }
}));

MinusIcon.displayName = 'MinusIcon';

export { MinusIcon };
