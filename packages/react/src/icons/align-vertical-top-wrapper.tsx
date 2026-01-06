import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AlignVerticalTopIcon as RegularAlignVerticalTopIcon } from './align-vertical-top';
import { AlignVerticalTopIconDuotone as AlignVerticalTopIconDuotone } from './align-vertical-top-duotone';
import { AlignVerticalTopIconBold as AlignVerticalTopIconBold } from './align-vertical-top-bold';
import { AlignVerticalTopIconBoldDuotone as AlignVerticalTopIconBoldDuotone } from './align-vertical-top-bold-duotone';
import { AlignVerticalTopIconFill as AlignVerticalTopIconFill } from './align-vertical-top-fill';
import { AlignVerticalTopIconFillDuotone as AlignVerticalTopIconFillDuotone } from './align-vertical-top-fill-duotone';

export interface AlignVerticalTopIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const AlignVerticalTopIcon = memo(forwardRef<SVGSVGElement, AlignVerticalTopIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <AlignVerticalTopIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <AlignVerticalTopIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <AlignVerticalTopIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <AlignVerticalTopIconFill ref={ref} {...props} />;
  if (duotone) return <AlignVerticalTopIconDuotone ref={ref} {...props} />;
  return <RegularAlignVerticalTopIcon ref={ref} {...props} />;
}));

AlignVerticalTopIcon.displayName = 'AlignVerticalTopIcon';

export { AlignVerticalTopIcon };
