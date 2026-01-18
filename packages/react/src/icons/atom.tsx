import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { AtomRegular } from './AtomRegular';
import { AtomRegularDuotone } from './AtomRegularDuotone';
import { AtomBold } from './AtomBold';
import { AtomBoldDuotone } from './AtomBoldDuotone';
import { AtomFill } from './AtomFill';
import { AtomFillDuotone } from './AtomFillDuotone';

export interface AtomProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Atom with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { AtomRegular } from 'stera-icons/AtomRegular';
 */
const Atom = memo(forwardRef<SVGSVGElement, AtomProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <AtomBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <AtomBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <AtomFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <AtomFill ref={ref} {...rest} />;
  if (duotone) return <AtomRegularDuotone ref={ref} {...rest} />;
  return <AtomRegular ref={ref} {...rest} />;
}));

Atom.displayName = 'Atom';

export { Atom };
