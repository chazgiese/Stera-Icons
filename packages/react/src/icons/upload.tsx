import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UploadRegular } from './UploadRegular';
import { UploadRegularDuotone } from './UploadRegularDuotone';
import { UploadBold } from './UploadBold';
import { UploadBoldDuotone } from './UploadBoldDuotone';
import { UploadFill } from './UploadFill';
import { UploadFillDuotone } from './UploadFillDuotone';

export interface UploadProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Upload with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { UploadRegular } from 'stera-icons/UploadRegular';
 */
const Upload = memo(forwardRef<SVGSVGElement, UploadProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <UploadBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <UploadBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <UploadFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <UploadFill ref={ref} {...rest} />;
  if (duotone) return <UploadRegularDuotone ref={ref} {...rest} />;
  return <UploadRegular ref={ref} {...rest} />;
}));

Upload.displayName = 'Upload';

export { Upload };
