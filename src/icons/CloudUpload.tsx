import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { CloudUploadRegular } from './CloudUploadRegular.js';
import { CloudUploadRegularDuotone } from './CloudUploadRegularDuotone.js';
import { CloudUploadBold } from './CloudUploadBold.js';
import { CloudUploadBoldDuotone } from './CloudUploadBoldDuotone.js';
import { CloudUploadFill } from './CloudUploadFill.js';
import { CloudUploadFillDuotone } from './CloudUploadFillDuotone.js';

export interface CloudUploadProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CloudUpload - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { CloudUploadRegular } from 'stera-icons/icons/CloudUploadRegular';
 */
const CloudUpload = memo(forwardRef<SVGSVGElement, CloudUploadProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CloudUploadBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CloudUploadBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CloudUploadFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CloudUploadFill ref={ref} {...rest} />;
  if (duotone) return <CloudUploadRegularDuotone ref={ref} {...rest} />;
  return <CloudUploadRegular ref={ref} {...rest} />;
}));

CloudUpload.displayName = 'CloudUpload';

// Triple export pattern (lucide-react style)
export { CloudUpload, CloudUpload as CloudUploadIcon, CloudUpload as SiCloudUpload };
export default CloudUpload;
