import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DraftingCompassRegular } from './DraftingCompassRegular';
import { DraftingCompassRegularDuotone } from './DraftingCompassRegularDuotone';
import { DraftingCompassBold } from './DraftingCompassBold';
import { DraftingCompassBoldDuotone } from './DraftingCompassBoldDuotone';
import { DraftingCompassFill } from './DraftingCompassFill';
import { DraftingCompassFillDuotone } from './DraftingCompassFillDuotone';

export interface DraftingCompassProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * DraftingCompass - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DraftingCompassRegular } from 'stera-icons/icons/DraftingCompassRegular';
 */
const DraftingCompass = memo(forwardRef<SVGSVGElement, DraftingCompassProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DraftingCompassBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DraftingCompassBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DraftingCompassFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DraftingCompassFill ref={ref} {...rest} />;
  if (duotone) return <DraftingCompassRegularDuotone ref={ref} {...rest} />;
  return <DraftingCompassRegular ref={ref} {...rest} />;
}));

DraftingCompass.displayName = 'DraftingCompass';

// Triple export pattern (lucide-react style)
export { DraftingCompass, DraftingCompass as DraftingCompassIcon, DraftingCompass as SiDraftingCompass };
export default DraftingCompass;
