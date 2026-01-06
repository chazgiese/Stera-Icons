import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CloudUploadIcon as RegularCloudUploadIcon } from './cloud-upload';
import { CloudUploadIconDuotone as CloudUploadIconDuotone } from './cloud-upload-duotone';
import { CloudUploadIconBold as CloudUploadIconBold } from './cloud-upload-bold';
import { CloudUploadIconBoldDuotone as CloudUploadIconBoldDuotone } from './cloud-upload-bold-duotone';
import { CloudUploadIconFill as CloudUploadIconFill } from './cloud-upload-fill';
import { CloudUploadIconFillDuotone as CloudUploadIconFillDuotone } from './cloud-upload-fill-duotone';

export interface CloudUploadIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CloudUploadIcon = memo(forwardRef<SVGSVGElement, CloudUploadIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CloudUploadIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CloudUploadIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CloudUploadIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CloudUploadIconFill ref={ref} {...props} />;
  if (duotone) return <CloudUploadIconDuotone ref={ref} {...props} />;
  return <RegularCloudUploadIcon ref={ref} {...props} />;
}));

CloudUploadIcon.displayName = 'CloudUploadIcon';

export { CloudUploadIcon };
