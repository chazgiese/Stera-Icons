import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { BladeSwordRegular } from './BladeSwordRegular.js';
import { BladeSwordRegularDuotone } from './BladeSwordRegularDuotone.js';
import { BladeSwordBold } from './BladeSwordBold.js';
import { BladeSwordBoldDuotone } from './BladeSwordBoldDuotone.js';
import { BladeSwordFill } from './BladeSwordFill.js';
import { BladeSwordFillDuotone } from './BladeSwordFillDuotone.js';

export interface BladeSwordProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BladeSword - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { BladeSwordRegular } from 'stera-icons/icons/BladeSwordRegular';
 */
const BladeSword = memo(forwardRef<SVGSVGElement, BladeSwordProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BladeSwordBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BladeSwordBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BladeSwordFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BladeSwordFill ref={ref} {...rest} />;
  if (duotone) return <BladeSwordRegularDuotone ref={ref} {...rest} />;
  return <BladeSwordRegular ref={ref} {...rest} />;
}));

BladeSword.displayName = 'BladeSword';

// Triple export pattern (lucide-react style)
export { BladeSword, BladeSword as BladeSwordIcon, BladeSword as SiBladeSword };
export default BladeSword;
