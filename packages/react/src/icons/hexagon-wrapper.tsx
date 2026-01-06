import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HexagonIcon as RegularHexagonIcon } from './hexagon';
import { HexagonIconDuotone as HexagonIconDuotone } from './hexagon-duotone';
import { HexagonIconBold as HexagonIconBold } from './hexagon-bold';
import { HexagonIconBoldDuotone as HexagonIconBoldDuotone } from './hexagon-bold-duotone';
import { HexagonIconFill as HexagonIconFill } from './hexagon-fill';
import { HexagonIconFillDuotone as HexagonIconFillDuotone } from './hexagon-fill-duotone';

export interface HexagonIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const HexagonIcon = memo(forwardRef<SVGSVGElement, HexagonIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <HexagonIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <HexagonIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <HexagonIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <HexagonIconFill ref={ref} {...props} />;
  if (duotone) return <HexagonIconDuotone ref={ref} {...props} />;
  return <RegularHexagonIcon ref={ref} {...props} />;
}));

HexagonIcon.displayName = 'HexagonIcon';

export { HexagonIcon };
