import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignHorizontalRightIcon as RegularAlignHorizontalRightIcon } from './align-horizontal-right';
import { AlignHorizontalRightIconDuotone as AlignHorizontalRightIconDuotone } from './align-horizontal-right-duotone';
import { AlignHorizontalRightIconBold as AlignHorizontalRightIconBold } from './align-horizontal-right-bold';
import { AlignHorizontalRightIconBoldDuotone as AlignHorizontalRightIconBoldDuotone } from './align-horizontal-right-bold-duotone';
import { AlignHorizontalRightIconFill as AlignHorizontalRightIconFill } from './align-horizontal-right-fill';
import { AlignHorizontalRightIconFillDuotone as AlignHorizontalRightIconFillDuotone } from './align-horizontal-right-fill-duotone';

export interface AlignHorizontalRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlignHorizontalRightIcon = memo(forwardRef<SVGSVGElement, AlignHorizontalRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlignHorizontalRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlignHorizontalRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlignHorizontalRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlignHorizontalRightIconFill ref={ref} {...props} />;
  if (duotone) return <AlignHorizontalRightIconDuotone ref={ref} {...props} />;
  return <RegularAlignHorizontalRightIcon ref={ref} {...props} />;
}));

AlignHorizontalRightIcon.displayName = 'AlignHorizontalRightIcon';

export { AlignHorizontalRightIcon };
