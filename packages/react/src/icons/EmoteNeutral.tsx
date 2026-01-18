import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteNeutralRegular } from './EmoteNeutralRegular';
import { EmoteNeutralRegularDuotone } from './EmoteNeutralRegularDuotone';
import { EmoteNeutralBold } from './EmoteNeutralBold';
import { EmoteNeutralBoldDuotone } from './EmoteNeutralBoldDuotone';
import { EmoteNeutralFill } from './EmoteNeutralFill';
import { EmoteNeutralFillDuotone } from './EmoteNeutralFillDuotone';

export interface EmoteNeutralProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EmoteNeutral with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { EmoteNeutralRegular } from 'stera-icons/EmoteNeutralRegular';
 */
const EmoteNeutral = memo(forwardRef<SVGSVGElement, EmoteNeutralProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <EmoteNeutralBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EmoteNeutralBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EmoteNeutralFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EmoteNeutralFill ref={ref} {...rest} />;
  if (duotone) return <EmoteNeutralRegularDuotone ref={ref} {...rest} />;
  return <EmoteNeutralRegular ref={ref} {...rest} />;
}));

EmoteNeutral.displayName = 'EmoteNeutral';

export { EmoteNeutral };
