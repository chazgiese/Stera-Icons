import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { InfoCircleIcon as RegularInfoCircleIcon } from './info-circle';
import { InfoCircleIconDuotone as InfoCircleIconDuotone } from './info-circle-duotone';
import { InfoCircleIconBold as InfoCircleIconBold } from './info-circle-bold';
import { InfoCircleIconBoldDuotone as InfoCircleIconBoldDuotone } from './info-circle-bold-duotone';
import { InfoCircleIconFill as InfoCircleIconFill } from './info-circle-fill';
import { InfoCircleIconFillDuotone as InfoCircleIconFillDuotone } from './info-circle-fill-duotone';

export interface InfoCircleIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const InfoCircleIcon = memo(forwardRef<SVGSVGElement, InfoCircleIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <InfoCircleIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <InfoCircleIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <InfoCircleIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <InfoCircleIconFill ref={ref} {...props} />;
  if (duotone) return <InfoCircleIconDuotone ref={ref} {...props} />;
  return <RegularInfoCircleIcon ref={ref} {...props} />;
}));

InfoCircleIcon.displayName = 'InfoCircleIcon';

export { InfoCircleIcon };
