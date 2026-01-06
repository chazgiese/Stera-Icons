import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignVerticalCenterIcon as RegularAlignVerticalCenterIcon } from './align-vertical-center';
import { AlignVerticalCenterIconDuotone as AlignVerticalCenterIconDuotone } from './align-vertical-center-duotone';
import { AlignVerticalCenterIconBold as AlignVerticalCenterIconBold } from './align-vertical-center-bold';
import { AlignVerticalCenterIconBoldDuotone as AlignVerticalCenterIconBoldDuotone } from './align-vertical-center-bold-duotone';
import { AlignVerticalCenterIconFill as AlignVerticalCenterIconFill } from './align-vertical-center-fill';
import { AlignVerticalCenterIconFillDuotone as AlignVerticalCenterIconFillDuotone } from './align-vertical-center-fill-duotone';

export interface AlignVerticalCenterIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlignVerticalCenterIcon = memo(forwardRef<SVGSVGElement, AlignVerticalCenterIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlignVerticalCenterIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlignVerticalCenterIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlignVerticalCenterIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlignVerticalCenterIconFill ref={ref} {...props} />;
  if (duotone) return <AlignVerticalCenterIconDuotone ref={ref} {...props} />;
  return <RegularAlignVerticalCenterIcon ref={ref} {...props} />;
}));

AlignVerticalCenterIcon.displayName = 'AlignVerticalCenterIcon';

export { AlignVerticalCenterIcon };
