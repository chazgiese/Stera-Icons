import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { InfoSquareIcon as RegularInfoSquareIcon } from './info-square';
import { InfoSquareIconDuotone as InfoSquareIconDuotone } from './info-square-duotone';
import { InfoSquareIconBold as InfoSquareIconBold } from './info-square-bold';
import { InfoSquareIconBoldDuotone as InfoSquareIconBoldDuotone } from './info-square-bold-duotone';
import { InfoSquareIconFill as InfoSquareIconFill } from './info-square-fill';
import { InfoSquareIconFillDuotone as InfoSquareIconFillDuotone } from './info-square-fill-duotone';

export interface InfoSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const InfoSquareIcon = memo(forwardRef<SVGSVGElement, InfoSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <InfoSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <InfoSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <InfoSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <InfoSquareIconFill ref={ref} {...props} />;
  if (duotone) return <InfoSquareIconDuotone ref={ref} {...props} />;
  return <RegularInfoSquareIcon ref={ref} {...props} />;
}));

InfoSquareIcon.displayName = 'InfoSquareIcon';

export { InfoSquareIcon };
