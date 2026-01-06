import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignHorizontalLeftIcon as RegularAlignHorizontalLeftIcon } from './align-horizontal-left';
import { AlignHorizontalLeftIconDuotone as AlignHorizontalLeftIconDuotone } from './align-horizontal-left-duotone';
import { AlignHorizontalLeftIconBold as AlignHorizontalLeftIconBold } from './align-horizontal-left-bold';
import { AlignHorizontalLeftIconBoldDuotone as AlignHorizontalLeftIconBoldDuotone } from './align-horizontal-left-bold-duotone';
import { AlignHorizontalLeftIconFill as AlignHorizontalLeftIconFill } from './align-horizontal-left-fill';
import { AlignHorizontalLeftIconFillDuotone as AlignHorizontalLeftIconFillDuotone } from './align-horizontal-left-fill-duotone';

export interface AlignHorizontalLeftIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlignHorizontalLeftIcon = memo(forwardRef<SVGSVGElement, AlignHorizontalLeftIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlignHorizontalLeftIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlignHorizontalLeftIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlignHorizontalLeftIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlignHorizontalLeftIconFill ref={ref} {...props} />;
  if (duotone) return <AlignHorizontalLeftIconDuotone ref={ref} {...props} />;
  return <RegularAlignHorizontalLeftIcon ref={ref} {...props} />;
}));

AlignHorizontalLeftIcon.displayName = 'AlignHorizontalLeftIcon';

export { AlignHorizontalLeftIcon };
