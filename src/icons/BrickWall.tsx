import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BrickWallRegular } from './BrickWallRegular';
import { BrickWallRegularDuotone } from './BrickWallRegularDuotone';
import { BrickWallBold } from './BrickWallBold';
import { BrickWallBoldDuotone } from './BrickWallBoldDuotone';
import { BrickWallFill } from './BrickWallFill';
import { BrickWallFillDuotone } from './BrickWallFillDuotone';

export interface BrickWallProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BrickWall - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BrickWallRegular } from 'stera-icons/icons/BrickWallRegular';
 */
const BrickWall = memo(forwardRef<SVGSVGElement, BrickWallProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BrickWallBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BrickWallBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BrickWallFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BrickWallFill ref={ref} {...rest} />;
  if (duotone) return <BrickWallRegularDuotone ref={ref} {...rest} />;
  return <BrickWallRegular ref={ref} {...rest} />;
}));

BrickWall.displayName = 'BrickWall';

// Triple export pattern (lucide-react style)
export { BrickWall, BrickWall as BrickWallIcon, BrickWall as SiBrickWall };
