import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FolderPlusRegular } from './FolderPlusRegular.js';
import { FolderPlusRegularDuotone } from './FolderPlusRegularDuotone.js';
import { FolderPlusBold } from './FolderPlusBold.js';
import { FolderPlusBoldDuotone } from './FolderPlusBoldDuotone.js';
import { FolderPlusFill } from './FolderPlusFill.js';
import { FolderPlusFillDuotone } from './FolderPlusFillDuotone.js';

export interface FolderPlusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FolderPlus - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FolderPlusRegular } from 'stera-icons/icons/FolderPlusRegular';
 */
const FolderPlus = memo(forwardRef<SVGSVGElement, FolderPlusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FolderPlusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FolderPlusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FolderPlusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FolderPlusFill ref={ref} {...rest} />;
  if (duotone) return <FolderPlusRegularDuotone ref={ref} {...rest} />;
  return <FolderPlusRegular ref={ref} {...rest} />;
}));

FolderPlus.displayName = 'FolderPlus';

// Triple export pattern (lucide-react style)
export { FolderPlus, FolderPlus as FolderPlusIcon, FolderPlus as SiFolderPlus };
export default FolderPlus;
