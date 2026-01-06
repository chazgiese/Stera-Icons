import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignVerticalBottomIcon as RegularAlignVerticalBottomIcon } from './align-vertical-bottom';
import { AlignVerticalBottomIconDuotone as AlignVerticalBottomIconDuotone } from './align-vertical-bottom-duotone';
import { AlignVerticalBottomIconBold as AlignVerticalBottomIconBold } from './align-vertical-bottom-bold';
import { AlignVerticalBottomIconBoldDuotone as AlignVerticalBottomIconBoldDuotone } from './align-vertical-bottom-bold-duotone';
import { AlignVerticalBottomIconFill as AlignVerticalBottomIconFill } from './align-vertical-bottom-fill';
import { AlignVerticalBottomIconFillDuotone as AlignVerticalBottomIconFillDuotone } from './align-vertical-bottom-fill-duotone';

export interface AlignVerticalBottomIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlignVerticalBottomIcon = memo(forwardRef<SVGSVGElement, AlignVerticalBottomIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlignVerticalBottomIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlignVerticalBottomIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlignVerticalBottomIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlignVerticalBottomIconFill ref={ref} {...props} />;
  if (duotone) return <AlignVerticalBottomIconDuotone ref={ref} {...props} />;
  return <RegularAlignVerticalBottomIcon ref={ref} {...props} />;
}));

AlignVerticalBottomIcon.displayName = 'AlignVerticalBottomIcon';

export { AlignVerticalBottomIcon };
