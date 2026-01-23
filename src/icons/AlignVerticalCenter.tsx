import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AlignVerticalCenterRegular } from './AlignVerticalCenterRegular.js';
import { AlignVerticalCenterRegularDuotone } from './AlignVerticalCenterRegularDuotone.js';
import { AlignVerticalCenterBold } from './AlignVerticalCenterBold.js';
import { AlignVerticalCenterBoldDuotone } from './AlignVerticalCenterBoldDuotone.js';
import { AlignVerticalCenterFill } from './AlignVerticalCenterFill.js';
import { AlignVerticalCenterFillDuotone } from './AlignVerticalCenterFillDuotone.js';

export interface AlignVerticalCenterProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlignVerticalCenter - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlignVerticalCenterRegular } from 'stera-icons/icons/AlignVerticalCenterRegular';
 */
const AlignVerticalCenter = memo(forwardRef<SVGSVGElement, AlignVerticalCenterProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlignVerticalCenterBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlignVerticalCenterBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlignVerticalCenterFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlignVerticalCenterFill ref={ref} {...rest} />;
  if (duotone) return <AlignVerticalCenterRegularDuotone ref={ref} {...rest} />;
  return <AlignVerticalCenterRegular ref={ref} {...rest} />;
}));

AlignVerticalCenter.displayName = 'AlignVerticalCenter';

// Triple export pattern (lucide-react style)
export { AlignVerticalCenter, AlignVerticalCenter as AlignVerticalCenterIcon, AlignVerticalCenter as SiAlignVerticalCenter };
export default AlignVerticalCenter;
