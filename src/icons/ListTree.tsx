import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListTreeRegular } from './ListTreeRegular';
import { ListTreeRegularDuotone } from './ListTreeRegularDuotone';
import { ListTreeBold } from './ListTreeBold';
import { ListTreeBoldDuotone } from './ListTreeBoldDuotone';
import { ListTreeFill } from './ListTreeFill';
import { ListTreeFillDuotone } from './ListTreeFillDuotone';

export interface ListTreeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListTree - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ListTreeRegular } from 'stera-icons/icons/ListTreeRegular';
 */
const ListTree = memo(forwardRef<SVGSVGElement, ListTreeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListTreeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListTreeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListTreeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListTreeFill ref={ref} {...rest} />;
  if (duotone) return <ListTreeRegularDuotone ref={ref} {...rest} />;
  return <ListTreeRegular ref={ref} {...rest} />;
}));

ListTree.displayName = 'ListTree';

// Triple export pattern (lucide-react style)
export { ListTree, ListTree as ListTreeIcon, ListTree as SiListTree };
