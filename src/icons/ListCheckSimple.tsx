import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ListCheckSimpleRegular } from './ListCheckSimpleRegular.js';
import { ListCheckSimpleRegularDuotone } from './ListCheckSimpleRegularDuotone.js';
import { ListCheckSimpleBold } from './ListCheckSimpleBold.js';
import { ListCheckSimpleBoldDuotone } from './ListCheckSimpleBoldDuotone.js';
import { ListCheckSimpleFill } from './ListCheckSimpleFill.js';
import { ListCheckSimpleFillDuotone } from './ListCheckSimpleFillDuotone.js';

export interface ListCheckSimpleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListCheckSimple - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ListCheckSimpleRegular } from 'stera-icons/icons/ListCheckSimpleRegular';
 */
const ListCheckSimple = memo(forwardRef<SVGSVGElement, ListCheckSimpleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListCheckSimpleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListCheckSimpleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListCheckSimpleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListCheckSimpleFill ref={ref} {...rest} />;
  if (duotone) return <ListCheckSimpleRegularDuotone ref={ref} {...rest} />;
  return <ListCheckSimpleRegular ref={ref} {...rest} />;
}));

ListCheckSimple.displayName = 'ListCheckSimple';

// Triple export pattern (lucide-react style)
export { ListCheckSimple, ListCheckSimple as ListCheckSimpleIcon, ListCheckSimple as SiListCheckSimple };
export default ListCheckSimple;
