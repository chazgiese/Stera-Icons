import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowSquareUpIcon as RegularArrowSquareUpIcon } from './arrow-square-up';
import { ArrowSquareUpIconDuotone as ArrowSquareUpIconDuotone } from './arrow-square-up-duotone';
import { ArrowSquareUpIconBold as ArrowSquareUpIconBold } from './arrow-square-up-bold';
import { ArrowSquareUpIconBoldDuotone as ArrowSquareUpIconBoldDuotone } from './arrow-square-up-bold-duotone';
import { ArrowSquareUpIconFill as ArrowSquareUpIconFill } from './arrow-square-up-fill';
import { ArrowSquareUpIconFillDuotone as ArrowSquareUpIconFillDuotone } from './arrow-square-up-fill-duotone';

export interface ArrowSquareUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowSquareUpIcon = memo(forwardRef<SVGSVGElement, ArrowSquareUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowSquareUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowSquareUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowSquareUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowSquareUpIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowSquareUpIconDuotone ref={ref} {...props} />;
  return <RegularArrowSquareUpIcon ref={ref} {...props} />;
}));

ArrowSquareUpIcon.displayName = 'ArrowSquareUpIcon';

export { ArrowSquareUpIcon };
