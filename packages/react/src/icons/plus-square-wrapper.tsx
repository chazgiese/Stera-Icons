import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlusSquareIcon as RegularPlusSquareIcon } from './plus-square';
import { PlusSquareIconDuotone as PlusSquareIconDuotone } from './plus-square-duotone';
import { PlusSquareIconBold as PlusSquareIconBold } from './plus-square-bold';
import { PlusSquareIconBoldDuotone as PlusSquareIconBoldDuotone } from './plus-square-bold-duotone';
import { PlusSquareIconFill as PlusSquareIconFill } from './plus-square-fill';
import { PlusSquareIconFillDuotone as PlusSquareIconFillDuotone } from './plus-square-fill-duotone';

export interface PlusSquareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const PlusSquareIcon = memo(forwardRef<SVGSVGElement, PlusSquareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlusSquareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <PlusSquareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <PlusSquareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <PlusSquareIconFill ref={ref} {...props} />;
  if (duotone) return <PlusSquareIconDuotone ref={ref} {...props} />;
  return <RegularPlusSquareIcon ref={ref} {...props} />;
}));

PlusSquareIcon.displayName = 'PlusSquareIcon';

export { PlusSquareIcon };
