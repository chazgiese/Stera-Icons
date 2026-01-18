import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { SlashRegular } from './SlashRegular';
import { SlashRegularDuotone } from './SlashRegularDuotone';
import { SlashBold } from './SlashBold';
import { SlashBoldDuotone } from './SlashBoldDuotone';
import { SlashFill } from './SlashFill';
import { SlashFillDuotone } from './SlashFillDuotone';

export interface SlashProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Slash with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { SlashRegular } from 'stera-icons/SlashRegular';
 */
const Slash = memo(forwardRef<SVGSVGElement, SlashProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <SlashBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <SlashBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <SlashFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <SlashFill ref={ref} {...rest} />;
  if (duotone) return <SlashRegularDuotone ref={ref} {...rest} />;
  return <SlashRegular ref={ref} {...rest} />;
}));

Slash.displayName = 'Slash';

export { Slash };
