import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteSurprisedRegular } from './EmoteSurprisedRegular';
import { EmoteSurprisedRegularDuotone } from './EmoteSurprisedRegularDuotone';
import { EmoteSurprisedBold } from './EmoteSurprisedBold';
import { EmoteSurprisedBoldDuotone } from './EmoteSurprisedBoldDuotone';
import { EmoteSurprisedFill } from './EmoteSurprisedFill';
import { EmoteSurprisedFillDuotone } from './EmoteSurprisedFillDuotone';

export interface EmoteSurprisedProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EmoteSurprised - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EmoteSurprisedRegular } from 'stera-icons/icons/EmoteSurprisedRegular';
 */
const EmoteSurprised = memo(forwardRef<SVGSVGElement, EmoteSurprisedProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <EmoteSurprisedBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EmoteSurprisedBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EmoteSurprisedFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EmoteSurprisedFill ref={ref} {...rest} />;
  if (duotone) return <EmoteSurprisedRegularDuotone ref={ref} {...rest} />;
  return <EmoteSurprisedRegular ref={ref} {...rest} />;
}));

EmoteSurprised.displayName = 'EmoteSurprised';

// Triple export pattern (lucide-react style)
export { EmoteSurprised, EmoteSurprised as EmoteSurprisedIcon, EmoteSurprised as SiEmoteSurprised };
