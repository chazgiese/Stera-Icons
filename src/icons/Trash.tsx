import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TrashRegular } from './TrashRegular.js';
import { TrashRegularDuotone } from './TrashRegularDuotone.js';
import { TrashBold } from './TrashBold.js';
import { TrashBoldDuotone } from './TrashBoldDuotone.js';
import { TrashFill } from './TrashFill.js';
import { TrashFillDuotone } from './TrashFillDuotone.js';

export interface TrashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Trash - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TrashRegular } from 'stera-icons/icons/TrashRegular';
 */
const Trash = memo(forwardRef<SVGSVGElement, TrashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TrashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TrashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TrashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TrashFill ref={ref} {...rest} />;
  if (duotone) return <TrashRegularDuotone ref={ref} {...rest} />;
  return <TrashRegular ref={ref} {...rest} />;
}));

Trash.displayName = 'Trash';

// Triple export pattern (lucide-react style)
export { Trash, Trash as TrashIcon, Trash as SiTrash };
export default Trash;
