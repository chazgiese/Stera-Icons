import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CloudXIcon as RegularCloudXIcon } from './cloud-x';
import { CloudXIconDuotone as CloudXIconDuotone } from './cloud-x-duotone';
import { CloudXIconBold as CloudXIconBold } from './cloud-x-bold';
import { CloudXIconBoldDuotone as CloudXIconBoldDuotone } from './cloud-x-bold-duotone';
import { CloudXIconFill as CloudXIconFill } from './cloud-x-fill';
import { CloudXIconFillDuotone as CloudXIconFillDuotone } from './cloud-x-fill-duotone';

export interface CloudXIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const CloudXIcon = memo(forwardRef<SVGSVGElement, CloudXIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <CloudXIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <CloudXIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <CloudXIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <CloudXIconFill ref={ref} {...props} />;
  if (duotone) return <CloudXIconDuotone ref={ref} {...props} />;
  return <RegularCloudXIcon ref={ref} {...props} />;
}));

CloudXIcon.displayName = 'CloudXIcon';

export { CloudXIcon };
