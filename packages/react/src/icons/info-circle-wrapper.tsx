import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { InfoCircleIcon as InfoCircleIconRegular } from './info-circle';
import { InfoCircleIconBold } from './info-circle-bold';
import { InfoCircleIconFilled } from './info-circle-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface InfoCircleIconProps extends IconProps {
  variant?: IconVariant;
}

const InfoCircleIcon = memo(forwardRef<SVGSVGElement, InfoCircleIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <InfoCircleIconFilled ref={ref} {...props} />;
    case 'bold':
      return <InfoCircleIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <InfoCircleIconRegular ref={ref} {...props} />;
  }
}));

InfoCircleIcon.displayName = 'InfoCircleIcon';

export { InfoCircleIcon };
