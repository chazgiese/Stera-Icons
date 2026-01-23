import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TreePalmRegular } from './TreePalmRegular.js';
import { TreePalmRegularDuotone } from './TreePalmRegularDuotone.js';
import { TreePalmBold } from './TreePalmBold.js';
import { TreePalmBoldDuotone } from './TreePalmBoldDuotone.js';
import { TreePalmFill } from './TreePalmFill.js';
import { TreePalmFillDuotone } from './TreePalmFillDuotone.js';

export interface TreePalmProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TreePalm - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TreePalmRegular } from 'stera-icons/icons/TreePalmRegular';
 */
const TreePalm = memo(forwardRef<SVGSVGElement, TreePalmProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TreePalmBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TreePalmBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TreePalmFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TreePalmFill ref={ref} {...rest} />;
  if (duotone) return <TreePalmRegularDuotone ref={ref} {...rest} />;
  return <TreePalmRegular ref={ref} {...rest} />;
}));

TreePalm.displayName = 'TreePalm';

// Triple export pattern (lucide-react style)
export { TreePalm, TreePalm as TreePalmIcon, TreePalm as SiTreePalm };
export default TreePalm;
