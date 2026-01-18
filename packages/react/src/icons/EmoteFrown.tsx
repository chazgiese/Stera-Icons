import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { EmoteFrownRegular } from './EmoteFrownRegular';
import { EmoteFrownRegularDuotone } from './EmoteFrownRegularDuotone';
import { EmoteFrownBold } from './EmoteFrownBold';
import { EmoteFrownBoldDuotone } from './EmoteFrownBoldDuotone';
import { EmoteFrownFill } from './EmoteFrownFill';
import { EmoteFrownFillDuotone } from './EmoteFrownFillDuotone';

export interface EmoteFrownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * EmoteFrown with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { EmoteFrownRegular } from 'stera-icons/EmoteFrownRegular';
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

export { EmoteFrown };
