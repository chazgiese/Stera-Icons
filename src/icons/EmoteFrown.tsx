import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { EmoteFrownRegular } from './EmoteFrownRegular.js';
import { EmoteFrownRegularDuotone } from './EmoteFrownRegularDuotone.js';
import { EmoteFrownBold } from './EmoteFrownBold.js';
import { EmoteFrownBoldDuotone } from './EmoteFrownBoldDuotone.js';
import { EmoteFrownFill } from './EmoteFrownFill.js';
import { EmoteFrownFillDuotone } from './EmoteFrownFillDuotone.js';

export interface EmoteFrownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EmoteFrown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { EmoteFrownRegular } from 'stera-icons/icons/EmoteFrownRegular';
 */
const EmoteFrown = memo(forwardRef<SVGSVGElement, EmoteFrownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <EmoteFrownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <EmoteFrownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <EmoteFrownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <EmoteFrownFill ref={ref} {...rest} />;
  if (duotone) return <EmoteFrownRegularDuotone ref={ref} {...rest} />;
  return <EmoteFrownRegular ref={ref} {...rest} />;
}));

EmoteFrown.displayName = 'EmoteFrown';

// Triple export pattern (lucide-react style)
export { EmoteFrown, EmoteFrown as EmoteFrownIcon, EmoteFrown as SiEmoteFrown };
export default EmoteFrown;
