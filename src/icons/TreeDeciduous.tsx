import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TreeDeciduousRegular } from './TreeDeciduousRegular';
import { TreeDeciduousRegularDuotone } from './TreeDeciduousRegularDuotone';
import { TreeDeciduousBold } from './TreeDeciduousBold';
import { TreeDeciduousBoldDuotone } from './TreeDeciduousBoldDuotone';
import { TreeDeciduousFill } from './TreeDeciduousFill';
import { TreeDeciduousFillDuotone } from './TreeDeciduousFillDuotone';

export interface TreeDeciduousProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TreeDeciduous - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TreeDeciduousRegular } from 'stera-icons/icons/TreeDeciduousRegular';
 */
const TreeDeciduous = memo(forwardRef<SVGSVGElement, TreeDeciduousProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TreeDeciduousBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TreeDeciduousBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TreeDeciduousFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TreeDeciduousFill ref={ref} {...rest} />;
  if (duotone) return <TreeDeciduousRegularDuotone ref={ref} {...rest} />;
  return <TreeDeciduousRegular ref={ref} {...rest} />;
}));

TreeDeciduous.displayName = 'TreeDeciduous';

// Triple export pattern (lucide-react style)
export { TreeDeciduous, TreeDeciduous as TreeDeciduousIcon, TreeDeciduous as SiTreeDeciduous };
export default TreeDeciduous;
