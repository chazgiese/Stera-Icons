import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { MoreSquareVIcon as RegularMoreSquareVIcon } from './more-square-v';
import { MoreSquareVIconDuotone as MoreSquareVIconDuotone } from './more-square-v-duotone';
import { MoreSquareVIconBold as MoreSquareVIconBold } from './more-square-v-bold';
import { MoreSquareVIconBoldDuotone as MoreSquareVIconBoldDuotone } from './more-square-v-bold-duotone';
import { MoreSquareVIconFill as MoreSquareVIconFill } from './more-square-v-fill';
import { MoreSquareVIconFillDuotone as MoreSquareVIconFillDuotone } from './more-square-v-fill-duotone';

export interface MoreSquareVIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const MoreSquareVIcon = memo(forwardRef<SVGSVGElement, MoreSquareVIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <MoreSquareVIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <MoreSquareVIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <MoreSquareVIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <MoreSquareVIconFill ref={ref} {...props} />;
  if (duotone) return <MoreSquareVIconDuotone ref={ref} {...props} />;
  return <RegularMoreSquareVIcon ref={ref} {...props} />;
}));

MoreSquareVIcon.displayName = 'MoreSquareVIcon';

export { MoreSquareVIcon };
