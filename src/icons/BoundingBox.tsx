import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BoundingBoxRegular } from './BoundingBoxRegular';
import { BoundingBoxRegularDuotone } from './BoundingBoxRegularDuotone';
import { BoundingBoxBold } from './BoundingBoxBold';
import { BoundingBoxBoldDuotone } from './BoundingBoxBoldDuotone';
import { BoundingBoxFill } from './BoundingBoxFill';
import { BoundingBoxFillDuotone } from './BoundingBoxFillDuotone';

export interface BoundingBoxProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BoundingBox - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BoundingBoxRegular } from 'stera-icons/icons/BoundingBoxRegular';
 */
const BoundingBox = memo(forwardRef<SVGSVGElement, BoundingBoxProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BoundingBoxBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BoundingBoxBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BoundingBoxFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BoundingBoxFill ref={ref} {...rest} />;
  if (duotone) return <BoundingBoxRegularDuotone ref={ref} {...rest} />;
  return <BoundingBoxRegular ref={ref} {...rest} />;
}));

BoundingBox.displayName = 'BoundingBox';

// Triple export pattern (lucide-react style)
export { BoundingBox, BoundingBox as BoundingBoxIcon, BoundingBox as SiBoundingBox };
