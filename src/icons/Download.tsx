import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DownloadRegular } from './DownloadRegular';
import { DownloadRegularDuotone } from './DownloadRegularDuotone';
import { DownloadBold } from './DownloadBold';
import { DownloadBoldDuotone } from './DownloadBoldDuotone';
import { DownloadFill } from './DownloadFill';
import { DownloadFillDuotone } from './DownloadFillDuotone';

export interface DownloadProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Download - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { DownloadRegular } from 'stera-icons/icons/DownloadRegular';
 */
const Download = memo(forwardRef<SVGSVGElement, DownloadProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DownloadBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DownloadBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DownloadFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DownloadFill ref={ref} {...rest} />;
  if (duotone) return <DownloadRegularDuotone ref={ref} {...rest} />;
  return <DownloadRegular ref={ref} {...rest} />;
}));

Download.displayName = 'Download';

// Triple export pattern (lucide-react style)
export { Download, Download as DownloadIcon, Download as SiDownload };
export default Download;
