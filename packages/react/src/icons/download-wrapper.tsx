import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DownloadIcon as DownloadIconRegular } from './download';
import { DownloadIconBold } from './download-bold';
import { DownloadIconFilled } from './download-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

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
    case 'regular':
    default:
      return <DownloadIconRegular ref={ref} {...props} />;
  }
}));

DownloadIcon.displayName = 'DownloadIcon';

export { DownloadIcon };
