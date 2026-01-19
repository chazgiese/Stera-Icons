import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteSadRegular } from './EmoteSadRegular';
import { EmoteSadRegularDuotone } from './EmoteSadRegularDuotone';
import { EmoteSadBold } from './EmoteSadBold';
import { EmoteSadBoldDuotone } from './EmoteSadBoldDuotone';
import { EmoteSadFill } from './EmoteSadFill';
import { EmoteSadFillDuotone } from './EmoteSadFillDuotone';

export interface EmoteSadProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EmoteSad - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EmoteSadRegular } from 'stera-icons/icons/EmoteSadRegular';
 */
const EmoteSad = memo(forwardRef<SVGSVGElement, EmoteSadProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <EmoteSadBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EmoteSadBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EmoteSadFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EmoteSadFill ref={ref} {...rest} />;
  if (duotone) return <EmoteSadRegularDuotone ref={ref} {...rest} />;
  return <EmoteSadRegular ref={ref} {...rest} />;
}));

EmoteSad.displayName = 'EmoteSad';

// Triple export pattern (lucide-react style)
export { EmoteSad, EmoteSad as EmoteSadIcon, EmoteSad as SiEmoteSad };
