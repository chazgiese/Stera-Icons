import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArchiveRegular } from './ArchiveRegular';
import { ArchiveRegularDuotone } from './ArchiveRegularDuotone';
import { ArchiveBold } from './ArchiveBold';
import { ArchiveBoldDuotone } from './ArchiveBoldDuotone';
import { ArchiveFill } from './ArchiveFill';
import { ArchiveFillDuotone } from './ArchiveFillDuotone';

export interface ArchiveProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Archive - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ArchiveRegular } from 'stera-icons/ArchiveRegular';
 */
const Archive = memo(forwardRef<SVGSVGElement, ArchiveProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArchiveBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArchiveBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArchiveFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArchiveFill ref={ref} {...rest} />;
  if (duotone) return <ArchiveRegularDuotone ref={ref} {...rest} />;
  return <ArchiveRegular ref={ref} {...rest} />;
}));

Archive.displayName = 'Archive';

// Triple export pattern (lucide-react style)
export { Archive, Archive as ArchiveIcon, Archive as SiArchive };
