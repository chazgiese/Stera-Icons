import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { CloudDownloadIcon as CloudDownloadIconRegular } from './cloud-download';
import { CloudDownloadIconBold } from './cloud-download-bold';
import { CloudDownloadIconFilled } from './cloud-download-filled';
import { CloudDownloadIconFilltone } from './cloud-download-filltone';
import { CloudDownloadIconLinetone } from './cloud-download-linetone';

export interface CloudDownloadIconProps extends IconProps {
  variant?: IconVariant;
}

const CloudDownloadIcon = memo(forwardRef<SVGSVGElement, CloudDownloadIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <CloudDownloadIconFilled ref={ref} {...props} />;
    case 'bold':
      return <CloudDownloadIconBold ref={ref} {...props} />;
    case 'filltone':
      return <CloudDownloadIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <CloudDownloadIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <CloudDownloadIconRegular ref={ref} {...props} />;
  }
}));

CloudDownloadIcon.displayName = 'CloudDownloadIcon';

export { CloudDownloadIcon };
