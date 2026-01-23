import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ListMinusRegular } from './ListMinusRegular.js';
import { ListMinusRegularDuotone } from './ListMinusRegularDuotone.js';
import { ListMinusBold } from './ListMinusBold.js';
import { ListMinusBoldDuotone } from './ListMinusBoldDuotone.js';
import { ListMinusFill } from './ListMinusFill.js';
import { ListMinusFillDuotone } from './ListMinusFillDuotone.js';

export interface ListMinusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListMinus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ListMinusRegular } from 'stera-icons/icons/ListMinusRegular';
 */
const ListMinus = memo(forwardRef<SVGSVGElement, ListMinusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListMinusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListMinusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListMinusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListMinusFill ref={ref} {...rest} />;
  if (duotone) return <ListMinusRegularDuotone ref={ref} {...rest} />;
  return <ListMinusRegular ref={ref} {...rest} />;
}));

ListMinus.displayName = 'ListMinus';

// Triple export pattern (lucide-react style)
export { ListMinus, ListMinus as ListMinusIcon, ListMinus as SiListMinus };
export default ListMinus;
