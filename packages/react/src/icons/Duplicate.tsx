import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { DuplicateRegular } from './DuplicateRegular';
import { DuplicateRegularDuotone } from './DuplicateRegularDuotone';
import { DuplicateBold } from './DuplicateBold';
import { DuplicateBoldDuotone } from './DuplicateBoldDuotone';
import { DuplicateFill } from './DuplicateFill';
import { DuplicateFillDuotone } from './DuplicateFillDuotone';

export interface DuplicateProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Duplicate with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { DuplicateRegular } from 'stera-icons/DuplicateRegular';
 */
const Duplicate = memo(forwardRef<SVGSVGElement, DuplicateProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <DuplicateBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <DuplicateBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <DuplicateFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <DuplicateFill ref={ref} {...rest} />;
  if (duotone) return <DuplicateRegularDuotone ref={ref} {...rest} />;
  return <DuplicateRegular ref={ref} {...rest} />;
}));

Duplicate.displayName = 'Duplicate';

export { Duplicate };
