import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CloudUploadIcon as CloudUploadIconRegular } from './cloud-upload';
import { CloudUploadIconBold } from './cloud-upload-bold';
import { CloudUploadIconFilled } from './cloud-upload-filled';
import { CloudUploadIconFilltone } from './cloud-upload-filltone';
import { CloudUploadIconLinetone } from './cloud-upload-linetone';

export interface CloudUploadIconProps extends IconProps {
  variant?: IconVariant;
}

const CloudUploadIcon = memo(forwardRef<SVGSVGElement, CloudUploadIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CloudUploadIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CloudUploadIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CloudUploadIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CloudUploadIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CloudUploadIconRegular ref={ref} {...props} />;
  }
}));

CloudUploadIcon.displayName = 'CloudUploadIcon';

export { CloudUploadIcon };
