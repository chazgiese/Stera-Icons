import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CloudDownloadIcon as RegularCloudDownloadIcon } from './cloud-download';
import { CloudDownloadIconDuotone as CloudDownloadIconDuotone } from './cloud-download-duotone';
import { CloudDownloadIconBold as CloudDownloadIconBold } from './cloud-download-bold';
import { CloudDownloadIconBoldDuotone as CloudDownloadIconBoldDuotone } from './cloud-download-bold-duotone';
import { CloudDownloadIconFill as CloudDownloadIconFill } from './cloud-download-fill';
import { CloudDownloadIconFillDuotone as CloudDownloadIconFillDuotone } from './cloud-download-fill-duotone';

export interface CloudDownloadIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CloudDownloadIcon = memo(forwardRef<SVGSVGElement, CloudDownloadIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CloudDownloadIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CloudDownloadIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CloudDownloadIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CloudDownloadIconFill ref={ref} {...props} />;
  if (duotone) return <CloudDownloadIconDuotone ref={ref} {...props} />;
  return <RegularCloudDownloadIcon ref={ref} {...props} />;
}));

CloudDownloadIcon.displayName = 'CloudDownloadIcon';

export { CloudDownloadIcon };
