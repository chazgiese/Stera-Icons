import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { DownloadIcon as RegularDownloadIcon } from './download';
import { DownloadIconBold } from './download-bold';
import { DownloadIconFilled } from './download-filled';
import { DownloadIconFilltone } from './download-filltone';
import { DownloadIconLinetone } from './download-linetone';

export interface DownloadIconProps extends IconProps {
  variant?: IconVariant;
}

const DownloadIcon = memo(forwardRef<SVGSVGElement, DownloadIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <DownloadIconFilled ref={ref} {...props} />;
    case 'bold':
      return <DownloadIconBold ref={ref} {...props} />;
    case 'filltone':
      return <DownloadIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <DownloadIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularDownloadIcon ref={ref} {...props} />;
  }
}));

DownloadIcon.displayName = 'DownloadIcon';

export { DownloadIcon };
