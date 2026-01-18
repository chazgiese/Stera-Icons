import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FolderRegular } from './FolderRegular';
import { FolderRegularDuotone } from './FolderRegularDuotone';
import { FolderBold } from './FolderBold';
import { FolderBoldDuotone } from './FolderBoldDuotone';
import { FolderFill } from './FolderFill';
import { FolderFillDuotone } from './FolderFillDuotone';

export interface FolderProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Folder - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FolderRegular } from 'stera-icons/FolderRegular';
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
