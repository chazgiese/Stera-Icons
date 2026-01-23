import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ListContractRegular } from './ListContractRegular.js';
import { ListContractRegularDuotone } from './ListContractRegularDuotone.js';
import { ListContractBold } from './ListContractBold.js';
import { ListContractBoldDuotone } from './ListContractBoldDuotone.js';
import { ListContractFill } from './ListContractFill.js';
import { ListContractFillDuotone } from './ListContractFillDuotone.js';

export interface ListContractProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ListContract - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ListContractRegular } from 'stera-icons/icons/ListContractRegular';
 */
const ListContract = memo(forwardRef<SVGSVGElement, ListContractProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ListContractBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ListContractBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ListContractFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ListContractFill ref={ref} {...rest} />;
  if (duotone) return <ListContractRegularDuotone ref={ref} {...rest} />;
  return <ListContractRegular ref={ref} {...rest} />;
}));

ListContract.displayName = 'ListContract';

// Triple export pattern (lucide-react style)
export { ListContract, ListContract as ListContractIcon, ListContract as SiListContract };
export default ListContract;
