import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CurveEaseRegular } from './CurveEaseRegular';
import { CurveEaseRegularDuotone } from './CurveEaseRegularDuotone';
import { CurveEaseBold } from './CurveEaseBold';
import { CurveEaseBoldDuotone } from './CurveEaseBoldDuotone';
import { CurveEaseFill } from './CurveEaseFill';
import { CurveEaseFillDuotone } from './CurveEaseFillDuotone';

export interface CurveEaseProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CurveEase with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CurveEaseRegular } from 'stera-icons/CurveEaseRegular';
 */
const CurveEase = memo(forwardRef<SVGSVGElement, CurveEaseProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CurveEaseBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CurveEaseBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CurveEaseFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CurveEaseFill ref={ref} {...rest} />;
  if (duotone) return <CurveEaseRegularDuotone ref={ref} {...rest} />;
  return <CurveEaseRegular ref={ref} {...rest} />;
}));

CurveEase.displayName = 'CurveEase';

export { CurveEase };
