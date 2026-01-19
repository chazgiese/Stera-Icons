import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ListXRegular } from './ListXRegular';
import { ListXRegularDuotone } from './ListXRegularDuotone';
import { ListXBold } from './ListXBold';
import { ListXBoldDuotone } from './ListXBoldDuotone';
import { ListXFill } from './ListXFill';
import { ListXFillDuotone } from './ListXFillDuotone';

export interface ListXProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListX - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ListXRegular } from 'stera-icons/icons/ListXRegular';
 */
const ListX = memo(forwardRef<SVGSVGElement, ListXProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListXBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListXBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListXFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListXFill ref={ref} {...rest} />;
  if (duotone) return <ListXRegularDuotone ref={ref} {...rest} />;
  return <ListXRegular ref={ref} {...rest} />;
}));

ListX.displayName = 'ListX';

// Triple export pattern (lucide-react style)
export { ListX, ListX as ListXIcon, ListX as SiListX };
export default ListX;
