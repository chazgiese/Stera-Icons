import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CloudDownloadRegular } from './CloudDownloadRegular.js';
import { CloudDownloadRegularDuotone } from './CloudDownloadRegularDuotone.js';
import { CloudDownloadBold } from './CloudDownloadBold.js';
import { CloudDownloadBoldDuotone } from './CloudDownloadBoldDuotone.js';
import { CloudDownloadFill } from './CloudDownloadFill.js';
import { CloudDownloadFillDuotone } from './CloudDownloadFillDuotone.js';

export interface CloudDownloadProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CloudDownload - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CloudDownloadRegular } from 'stera-icons/icons/CloudDownloadRegular';
 */
const CloudDownload = memo(forwardRef<SVGSVGElement, CloudDownloadProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CloudDownloadBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CloudDownloadBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CloudDownloadFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CloudDownloadFill ref={ref} {...rest} />;
  if (duotone) return <CloudDownloadRegularDuotone ref={ref} {...rest} />;
  return <CloudDownloadRegular ref={ref} {...rest} />;
}));

CloudDownload.displayName = 'CloudDownload';

// Triple export pattern (lucide-react style)
export { CloudDownload, CloudDownload as CloudDownloadIcon, CloudDownload as SiCloudDownload };
export default CloudDownload;
