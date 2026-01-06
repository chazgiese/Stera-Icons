import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpLeftDownRightIcon as RegularArrowUpLeftDownRightIcon } from './arrow-up-left-down-right';
import { ArrowUpLeftDownRightIconDuotone as ArrowUpLeftDownRightIconDuotone } from './arrow-up-left-down-right-duotone';
import { ArrowUpLeftDownRightIconBold as ArrowUpLeftDownRightIconBold } from './arrow-up-left-down-right-bold';
import { ArrowUpLeftDownRightIconBoldDuotone as ArrowUpLeftDownRightIconBoldDuotone } from './arrow-up-left-down-right-bold-duotone';
import { ArrowUpLeftDownRightIconFill as ArrowUpLeftDownRightIconFill } from './arrow-up-left-down-right-fill';
import { ArrowUpLeftDownRightIconFillDuotone as ArrowUpLeftDownRightIconFillDuotone } from './arrow-up-left-down-right-fill-duotone';

export interface ArrowUpLeftDownRightIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowUpLeftDownRightIcon = memo(forwardRef<SVGSVGElement, ArrowUpLeftDownRightIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpLeftDownRightIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowUpLeftDownRightIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowUpLeftDownRightIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowUpLeftDownRightIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowUpLeftDownRightIconDuotone ref={ref} {...props} />;
  return <RegularArrowUpLeftDownRightIcon ref={ref} {...props} />;
}));

ArrowUpLeftDownRightIcon.displayName = 'ArrowUpLeftDownRightIcon';

export { ArrowUpLeftDownRightIcon };
