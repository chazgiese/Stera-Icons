import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TreeRegular } from './TreeRegular.js';
import { TreeRegularDuotone } from './TreeRegularDuotone.js';
import { TreeBold } from './TreeBold.js';
import { TreeBoldDuotone } from './TreeBoldDuotone.js';
import { TreeFill } from './TreeFill.js';
import { TreeFillDuotone } from './TreeFillDuotone.js';

export interface TreeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Tree - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TreeRegular } from 'stera-icons/icons/TreeRegular';
 */
const Tree = memo(forwardRef<SVGSVGElement, TreeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TreeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TreeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TreeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TreeFill ref={ref} {...rest} />;
  if (duotone) return <TreeRegularDuotone ref={ref} {...rest} />;
  return <TreeRegular ref={ref} {...rest} />;
}));

Tree.displayName = 'Tree';

// Triple export pattern (lucide-react style)
export { Tree, Tree as TreeIcon, Tree as SiTree };
export default Tree;
