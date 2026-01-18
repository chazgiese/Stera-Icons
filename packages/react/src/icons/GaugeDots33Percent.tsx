import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots33PercentRegular } from './GaugeDots33PercentRegular';
import { GaugeDots33PercentRegularDuotone } from './GaugeDots33PercentRegularDuotone';
import { GaugeDots33PercentBold } from './GaugeDots33PercentBold';
import { GaugeDots33PercentBoldDuotone } from './GaugeDots33PercentBoldDuotone';
import { GaugeDots33PercentFill } from './GaugeDots33PercentFill';
import { GaugeDots33PercentFillDuotone } from './GaugeDots33PercentFillDuotone';

export interface GaugeDots33PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots33Percent with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots33PercentRegular } from 'stera-icons/GaugeDots33PercentRegular';
 */
const GaugeDots33Percent = memo(forwardRef<SVGSVGElement, GaugeDots33PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots33PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots33PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots33PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots33PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots33PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeDots33PercentRegular ref={ref} {...rest} />;
}));

GaugeDots33Percent.displayName = 'GaugeDots33Percent';

export { GaugeDots33Percent };
