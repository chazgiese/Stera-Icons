import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { UploadIcon as RegularUploadIcon } from './upload';
import { UploadIconBold } from './upload-bold';
import { UploadIconFilled } from './upload-filled';
import { UploadIconFilltone } from './upload-filltone';
import { UploadIconLinetone } from './upload-linetone';

export interface UploadIconProps extends IconProps {
  variant?: IconVariant;
}

const UploadIcon = memo(forwardRef<SVGSVGElement, UploadIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <UploadIconFilled ref={ref} {...props} />;
    case 'bold':
      return <UploadIconBold ref={ref} {...props} />;
    case 'filltone':
      return <UploadIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <UploadIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularUploadIcon ref={ref} {...props} />;
  }
}));

UploadIcon.displayName = 'UploadIcon';

export { UploadIcon };
