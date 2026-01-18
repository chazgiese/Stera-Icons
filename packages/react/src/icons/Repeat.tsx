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
 * Repeat with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { RepeatRegular } from 'stera-icons/RepeatRegular';
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

export { Repeat };
