import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LotusIcon as RegularLotusIcon } from './lotus';
import { LotusIconDuotone as LotusIconDuotone } from './lotus-duotone';
import { LotusIconBold as LotusIconBold } from './lotus-bold';
import { LotusIconBoldDuotone as LotusIconBoldDuotone } from './lotus-bold-duotone';
import { LotusIconFill as LotusIconFill } from './lotus-fill';
import { LotusIconFillDuotone as LotusIconFillDuotone } from './lotus-fill-duotone';

export interface LotusIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const LotusIcon = memo(forwardRef<SVGSVGElement, LotusIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <LotusIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <LotusIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <LotusIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <LotusIconFill ref={ref} {...props} />;
  if (duotone) return <LotusIconDuotone ref={ref} {...props} />;
  return <RegularLotusIcon ref={ref} {...props} />;
}));

LotusIcon.displayName = 'LotusIcon';

export { LotusIcon };
