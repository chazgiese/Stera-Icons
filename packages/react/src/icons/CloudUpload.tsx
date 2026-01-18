import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CloudUploadRegular } from './CloudUploadRegular';
import { CloudUploadRegularDuotone } from './CloudUploadRegularDuotone';
import { CloudUploadBold } from './CloudUploadBold';
import { CloudUploadBoldDuotone } from './CloudUploadBoldDuotone';
import { CloudUploadFill } from './CloudUploadFill';
import { CloudUploadFillDuotone } from './CloudUploadFillDuotone';

export interface CloudUploadProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CloudUpload with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CloudUploadRegular } from 'stera-icons/CloudUploadRegular';
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

export { CloudUpload };
