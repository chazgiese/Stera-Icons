import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ListPlusRegular } from './ListPlusRegular.js';
import { ListPlusRegularDuotone } from './ListPlusRegularDuotone.js';
import { ListPlusBold } from './ListPlusBold.js';
import { ListPlusBoldDuotone } from './ListPlusBoldDuotone.js';
import { ListPlusFill } from './ListPlusFill.js';
import { ListPlusFillDuotone } from './ListPlusFillDuotone.js';

export interface ListPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListPlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ListPlusRegular } from 'stera-icons/icons/ListPlusRegular';
 */
const ListPlus = memo(forwardRef<SVGSVGElement, ListPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListPlusFill ref={ref} {...rest} />;
  if (duotone) return <ListPlusRegularDuotone ref={ref} {...rest} />;
  return <ListPlusRegular ref={ref} {...rest} />;
}));

ListPlus.displayName = 'ListPlus';

// Triple export pattern (lucide-react style)
export { ListPlus, ListPlus as ListPlusIcon, ListPlus as SiListPlus };
export default ListPlus;
