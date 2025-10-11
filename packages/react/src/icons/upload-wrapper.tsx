import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UploadIcon as UploadIconRegular } from './upload';
import { UploadIconBold } from './upload-bold';
import { UploadIconFilled } from './upload-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <UploadIconRegular ref={ref} {...props} />;
  }
}));

UploadIcon.displayName = 'UploadIcon';

export { UploadIcon };
