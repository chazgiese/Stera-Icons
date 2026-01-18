import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FolderTreeRegular } from './FolderTreeRegular';
import { FolderTreeRegularDuotone } from './FolderTreeRegularDuotone';
import { FolderTreeBold } from './FolderTreeBold';
import { FolderTreeBoldDuotone } from './FolderTreeBoldDuotone';
import { FolderTreeFill } from './FolderTreeFill';
import { FolderTreeFillDuotone } from './FolderTreeFillDuotone';

export interface FolderTreeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FolderTree - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FolderTreeRegular } from 'stera-icons/FolderTreeRegular';
 */
const FolderTree = memo(forwardRef<SVGSVGElement, FolderTreeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FolderTreeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FolderTreeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FolderTreeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FolderTreeFill ref={ref} {...rest} />;
  if (duotone) return <FolderTreeRegularDuotone ref={ref} {...rest} />;
  return <FolderTreeRegular ref={ref} {...rest} />;
}));

FolderTree.displayName = 'FolderTree';

// Triple export pattern (lucide-react style)
export { FolderTree, FolderTree as FolderTreeIcon, FolderTree as SiFolderTree };
