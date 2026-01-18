import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CursorOgRegular } from './CursorOgRegular';
import { CursorOgRegularDuotone } from './CursorOgRegularDuotone';
import { CursorOgBold } from './CursorOgBold';
import { CursorOgBoldDuotone } from './CursorOgBoldDuotone';
import { CursorOgFill } from './CursorOgFill';
import { CursorOgFillDuotone } from './CursorOgFillDuotone';

export interface CursorOgProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CursorOg with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CursorOgRegular } from 'stera-icons/CursorOgRegular';
 */
const CursorOg = memo(forwardRef<SVGSVGElement, CursorOgProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CursorOgBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CursorOgBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CursorOgFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CursorOgFill ref={ref} {...rest} />;
  if (duotone) return <CursorOgRegularDuotone ref={ref} {...rest} />;
  return <CursorOgRegular ref={ref} {...rest} />;
}));

CursorOg.displayName = 'CursorOg';

export { CursorOg };
