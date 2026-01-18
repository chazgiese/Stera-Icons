import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PauseRegular } from './PauseRegular';
import { PauseRegularDuotone } from './PauseRegularDuotone';
import { PauseBold } from './PauseBold';
import { PauseBoldDuotone } from './PauseBoldDuotone';
import { PauseFill } from './PauseFill';
import { PauseFillDuotone } from './PauseFillDuotone';

export interface PauseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Pause with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PauseRegular } from 'stera-icons/PauseRegular';
 */
const Pause = memo(forwardRef<SVGSVGElement, PauseProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PauseBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PauseBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PauseFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PauseFill ref={ref} {...rest} />;
  if (duotone) return <PauseRegularDuotone ref={ref} {...rest} />;
  return <PauseRegular ref={ref} {...rest} />;
}));

Pause.displayName = 'Pause';

export { Pause };
