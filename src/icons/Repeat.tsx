import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RepeatRegular } from './RepeatRegular';
import { RepeatRegularDuotone } from './RepeatRegularDuotone';
import { RepeatBold } from './RepeatBold';
import { RepeatBoldDuotone } from './RepeatBoldDuotone';
import { RepeatFill } from './RepeatFill';
import { RepeatFillDuotone } from './RepeatFillDuotone';

export interface RepeatProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Repeat - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { RepeatRegular } from 'stera-icons/icons/RepeatRegular';
 */
const Repeat = memo(forwardRef<SVGSVGElement, RepeatProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RepeatBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RepeatBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RepeatFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RepeatFill ref={ref} {...rest} />;
  if (duotone) return <RepeatRegularDuotone ref={ref} {...rest} />;
  return <RepeatRegular ref={ref} {...rest} />;
}));

Repeat.displayName = 'Repeat';

// Triple export pattern (lucide-react style)
export { Repeat, Repeat as RepeatIcon, Repeat as SiRepeat };
