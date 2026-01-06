import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RulerIcon as RegularRulerIcon } from './ruler';
import { RulerIconDuotone as RulerIconDuotone } from './ruler-duotone';
import { RulerIconBold as RulerIconBold } from './ruler-bold';
import { RulerIconBoldDuotone as RulerIconBoldDuotone } from './ruler-bold-duotone';
import { RulerIconFill as RulerIconFill } from './ruler-fill';
import { RulerIconFillDuotone as RulerIconFillDuotone } from './ruler-fill-duotone';

export interface RulerIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RulerIcon = memo(forwardRef<SVGSVGElement, RulerIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RulerIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RulerIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RulerIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RulerIconFill ref={ref} {...props} />;
  if (duotone) return <RulerIconDuotone ref={ref} {...props} />;
  return <RegularRulerIcon ref={ref} {...props} />;
}));

RulerIcon.displayName = 'RulerIcon';

export { RulerIcon };
