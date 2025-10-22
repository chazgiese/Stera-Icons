import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { HexagonIcon as RegularHexagonIcon } from './hexagon';
import { HexagonIconBold } from './hexagon-bold';
import { HexagonIconFilled } from './hexagon-filled';
import { HexagonIconFilltone } from './hexagon-filltone';
import { HexagonIconLinetone } from './hexagon-linetone';

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
    case 'filltone':
      return <HexagonIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <HexagonIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularHexagonIcon ref={ref} {...props} />;
  }
}));

HexagonIcon.displayName = 'HexagonIcon';

export { HexagonIcon };
