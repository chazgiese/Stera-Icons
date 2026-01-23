import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { FolderRegular } from './FolderRegular.js';
import { FolderRegularDuotone } from './FolderRegularDuotone.js';
import { FolderBold } from './FolderBold.js';
import { FolderBoldDuotone } from './FolderBoldDuotone.js';
import { FolderFill } from './FolderFill.js';
import { FolderFillDuotone } from './FolderFillDuotone.js';

export interface FolderProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Folder - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FolderRegular } from 'stera-icons/icons/FolderRegular';
 */
const Folder = memo(forwardRef<SVGSVGElement, FolderProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FolderBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FolderBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FolderFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FolderFill ref={ref} {...rest} />;
  if (duotone) return <FolderRegularDuotone ref={ref} {...rest} />;
  return <FolderRegular ref={ref} {...rest} />;
}));

Folder.displayName = 'Folder';

// Triple export pattern (lucide-react style)
export { Folder, Folder as FolderIcon, Folder as SiFolder };
export default Folder;
