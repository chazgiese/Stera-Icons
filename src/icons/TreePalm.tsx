import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TreePalmRegular } from './TreePalmRegular';
import { TreePalmRegularDuotone } from './TreePalmRegularDuotone';
import { TreePalmBold } from './TreePalmBold';
import { TreePalmBoldDuotone } from './TreePalmBoldDuotone';
import { TreePalmFill } from './TreePalmFill';
import { TreePalmFillDuotone } from './TreePalmFillDuotone';

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
