import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { FolderOpenRegular } from './FolderOpenRegular';
import { FolderOpenRegularDuotone } from './FolderOpenRegularDuotone';
import { FolderOpenBold } from './FolderOpenBold';
import { FolderOpenBoldDuotone } from './FolderOpenBoldDuotone';
import { FolderOpenFill } from './FolderOpenFill';
import { FolderOpenFillDuotone } from './FolderOpenFillDuotone';

export interface FolderOpenProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * FolderOpen - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { FolderOpenRegular } from 'stera-icons/icons/FolderOpenRegular';
 */
const FolderOpen = memo(forwardRef<SVGSVGElement, FolderOpenProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <FolderOpenBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <FolderOpenBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <FolderOpenFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <FolderOpenFill ref={ref} {...rest} />;
  if (duotone) return <FolderOpenRegularDuotone ref={ref} {...rest} />;
  return <FolderOpenRegular ref={ref} {...rest} />;
}));

FolderOpen.displayName = 'FolderOpen';

// Triple export pattern (lucide-react style)
export { FolderOpen, FolderOpen as FolderOpenIcon, FolderOpen as SiFolderOpen };
