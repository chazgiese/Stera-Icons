import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { SaveRegular } from './SaveRegular.js';
import { SaveRegularDuotone } from './SaveRegularDuotone.js';
import { SaveBold } from './SaveBold.js';
import { SaveBoldDuotone } from './SaveBoldDuotone.js';
import { SaveFill } from './SaveFill.js';
import { SaveFillDuotone } from './SaveFillDuotone.js';

export interface SaveProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Save - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { SaveRegular } from 'stera-icons/icons/SaveRegular';
 */
const Save = memo(forwardRef<SVGSVGElement, SaveProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SaveBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SaveBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SaveFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SaveFill ref={ref} {...rest} />;
  if (duotone) return <SaveRegularDuotone ref={ref} {...rest} />;
  return <SaveRegular ref={ref} {...rest} />;
}));

Save.displayName = 'Save';

// Triple export pattern (lucide-react style)
export { Save, Save as SaveIcon, Save as SiSave };
export default Save;
