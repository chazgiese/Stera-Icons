import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignHorizontalCenterIcon as RegularAlignHorizontalCenterIcon } from './align-horizontal-center';
import { AlignHorizontalCenterIconDuotone as AlignHorizontalCenterIconDuotone } from './align-horizontal-center-duotone';
import { AlignHorizontalCenterIconBold as AlignHorizontalCenterIconBold } from './align-horizontal-center-bold';
import { AlignHorizontalCenterIconBoldDuotone as AlignHorizontalCenterIconBoldDuotone } from './align-horizontal-center-bold-duotone';
import { AlignHorizontalCenterIconFill as AlignHorizontalCenterIconFill } from './align-horizontal-center-fill';
import { AlignHorizontalCenterIconFillDuotone as AlignHorizontalCenterIconFillDuotone } from './align-horizontal-center-fill-duotone';

export interface AlignHorizontalCenterIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlignHorizontalCenterIcon = memo(forwardRef<SVGSVGElement, AlignHorizontalCenterIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlignHorizontalCenterIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlignHorizontalCenterIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlignHorizontalCenterIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlignHorizontalCenterIconFill ref={ref} {...props} />;
  if (duotone) return <AlignHorizontalCenterIconDuotone ref={ref} {...props} />;
  return <RegularAlignHorizontalCenterIcon ref={ref} {...props} />;
}));

AlignHorizontalCenterIcon.displayName = 'AlignHorizontalCenterIcon';

export { AlignHorizontalCenterIcon };
