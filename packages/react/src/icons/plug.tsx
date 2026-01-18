import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlugRegular } from './PlugRegular';
import { PlugRegularDuotone } from './PlugRegularDuotone';
import { PlugBold } from './PlugBold';
import { PlugBoldDuotone } from './PlugBoldDuotone';
import { PlugFill } from './PlugFill';
import { PlugFillDuotone } from './PlugFillDuotone';

export interface PlugProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Plug with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PlugRegular } from 'stera-icons/PlugRegular';
 */
const Plug = memo(forwardRef<SVGSVGElement, PlugProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlugBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PlugBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PlugFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PlugFill ref={ref} {...rest} />;
  if (duotone) return <PlugRegularDuotone ref={ref} {...rest} />;
  return <PlugRegular ref={ref} {...rest} />;
}));

Plug.displayName = 'Plug';

export { Plug };
