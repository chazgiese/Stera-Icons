import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ListExpandRegular } from './ListExpandRegular.js';
import { ListExpandRegularDuotone } from './ListExpandRegularDuotone.js';
import { ListExpandBold } from './ListExpandBold.js';
import { ListExpandBoldDuotone } from './ListExpandBoldDuotone.js';
import { ListExpandFill } from './ListExpandFill.js';
import { ListExpandFillDuotone } from './ListExpandFillDuotone.js';

export interface ListExpandProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListExpand - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ListExpandRegular } from 'stera-icons/icons/ListExpandRegular';
 */
const ListExpand = memo(forwardRef<SVGSVGElement, ListExpandProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListExpandBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListExpandBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListExpandFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListExpandFill ref={ref} {...rest} />;
  if (duotone) return <ListExpandRegularDuotone ref={ref} {...rest} />;
  return <ListExpandRegular ref={ref} {...rest} />;
}));

ListExpand.displayName = 'ListExpand';

// Triple export pattern (lucide-react style)
export { ListExpand, ListExpand as ListExpandIcon, ListExpand as SiListExpand };
export default ListExpand;
