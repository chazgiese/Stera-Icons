import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { UploadIcon as RegularUploadIcon } from './upload';
import { UploadIconDuotone as UploadIconDuotone } from './upload-duotone';
import { UploadIconBold as UploadIconBold } from './upload-bold';
import { UploadIconBoldDuotone as UploadIconBoldDuotone } from './upload-bold-duotone';
import { UploadIconFill as UploadIconFill } from './upload-fill';
import { UploadIconFillDuotone as UploadIconFillDuotone } from './upload-fill-duotone';

export interface UploadIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const UploadIcon = memo(forwardRef<SVGSVGElement, UploadIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <UploadIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <UploadIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <UploadIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <UploadIconFill ref={ref} {...props} />;
  if (duotone) return <UploadIconDuotone ref={ref} {...props} />;
  return <RegularUploadIcon ref={ref} {...props} />;
}));

UploadIcon.displayName = 'UploadIcon';

export { UploadIcon };
