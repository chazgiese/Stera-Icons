import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HexagonIcon as HexagonIconRegular } from './hexagon';
import { HexagonIconBold } from './hexagon-bold';
import { HexagonIconFilled } from './hexagon-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface HexagonIconProps extends IconProps {
  variant?: IconVariant;
}

const HexagonIcon = memo(forwardRef<SVGSVGElement, HexagonIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <HexagonIconFilled ref={ref} {...props} />;
    case 'bold':
      return <HexagonIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <HexagonIconRegular ref={ref} {...props} />;
  }
}));

HexagonIcon.displayName = 'HexagonIcon';

export { HexagonIcon };
