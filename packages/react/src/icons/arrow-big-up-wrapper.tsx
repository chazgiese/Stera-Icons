import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowBigUpIcon as RegularArrowBigUpIcon } from './arrow-big-up';
import { ArrowBigUpIconDuotone as ArrowBigUpIconDuotone } from './arrow-big-up-duotone';
import { ArrowBigUpIconBold as ArrowBigUpIconBold } from './arrow-big-up-bold';
import { ArrowBigUpIconBoldDuotone as ArrowBigUpIconBoldDuotone } from './arrow-big-up-bold-duotone';
import { ArrowBigUpIconFill as ArrowBigUpIconFill } from './arrow-big-up-fill';
import { ArrowBigUpIconFillDuotone as ArrowBigUpIconFillDuotone } from './arrow-big-up-fill-duotone';

export interface ArrowBigUpIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ArrowBigUpIcon = memo(forwardRef<SVGSVGElement, ArrowBigUpIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowBigUpIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ArrowBigUpIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ArrowBigUpIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ArrowBigUpIconFill ref={ref} {...props} />;
  if (duotone) return <ArrowBigUpIconDuotone ref={ref} {...props} />;
  return <RegularArrowBigUpIcon ref={ref} {...props} />;
}));

ArrowBigUpIcon.displayName = 'ArrowBigUpIcon';

export { ArrowBigUpIcon };
