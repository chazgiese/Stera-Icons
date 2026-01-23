import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { AlignHorizontalCenterRegular } from './AlignHorizontalCenterRegular.js';
import { AlignHorizontalCenterRegularDuotone } from './AlignHorizontalCenterRegularDuotone.js';
import { AlignHorizontalCenterBold } from './AlignHorizontalCenterBold.js';
import { AlignHorizontalCenterBoldDuotone } from './AlignHorizontalCenterBoldDuotone.js';
import { AlignHorizontalCenterFill } from './AlignHorizontalCenterFill.js';
import { AlignHorizontalCenterFillDuotone } from './AlignHorizontalCenterFillDuotone.js';

export interface AlignHorizontalCenterProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * AlignHorizontalCenter - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { AlignHorizontalCenterRegular } from 'stera-icons/icons/AlignHorizontalCenterRegular';
 */
const AlignHorizontalCenter = memo(forwardRef<SVGSVGElement, AlignHorizontalCenterProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlignHorizontalCenterBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AlignHorizontalCenterBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AlignHorizontalCenterFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AlignHorizontalCenterFill ref={ref} {...rest} />;
  if (duotone) return <AlignHorizontalCenterRegularDuotone ref={ref} {...rest} />;
  return <AlignHorizontalCenterRegular ref={ref} {...rest} />;
}));

AlignHorizontalCenter.displayName = 'AlignHorizontalCenter';

// Triple export pattern (lucide-react style)
export { AlignHorizontalCenter, AlignHorizontalCenter as AlignHorizontalCenterIcon, AlignHorizontalCenter as SiAlignHorizontalCenter };
export default AlignHorizontalCenter;
