import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CopyRegular } from './CopyRegular';
import { CopyRegularDuotone } from './CopyRegularDuotone';
import { CopyBold } from './CopyBold';
import { CopyBoldDuotone } from './CopyBoldDuotone';
import { CopyFill } from './CopyFill';
import { CopyFillDuotone } from './CopyFillDuotone';

export interface CopyProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Copy - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CopyRegular } from 'stera-icons/icons/CopyRegular';
 */
const Copy = memo(forwardRef<SVGSVGElement, CopyProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CopyBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CopyBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CopyFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CopyFill ref={ref} {...rest} />;
  if (duotone) return <CopyRegularDuotone ref={ref} {...rest} />;
  return <CopyRegular ref={ref} {...rest} />;
}));

Copy.displayName = 'Copy';

// Triple export pattern (lucide-react style)
export { Copy, Copy as CopyIcon, Copy as SiCopy };
export default Copy;
