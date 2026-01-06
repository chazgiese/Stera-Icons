import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DownloadIcon as RegularDownloadIcon } from './download';
import { DownloadIconDuotone as DownloadIconDuotone } from './download-duotone';
import { DownloadIconBold as DownloadIconBold } from './download-bold';
import { DownloadIconBoldDuotone as DownloadIconBoldDuotone } from './download-bold-duotone';
import { DownloadIconFill as DownloadIconFill } from './download-fill';
import { DownloadIconFillDuotone as DownloadIconFillDuotone } from './download-fill-duotone';

export interface DownloadIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const DownloadIcon = memo(forwardRef<SVGSVGElement, DownloadIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <DownloadIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <DownloadIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <DownloadIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <DownloadIconFill ref={ref} {...props} />;
  if (duotone) return <DownloadIconDuotone ref={ref} {...props} />;
  return <RegularDownloadIcon ref={ref} {...props} />;
}));

DownloadIcon.displayName = 'DownloadIcon';

export { DownloadIcon };
