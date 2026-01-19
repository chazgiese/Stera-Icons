import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PlayRectangleRegular } from './PlayRectangleRegular';
import { PlayRectangleRegularDuotone } from './PlayRectangleRegularDuotone';
import { PlayRectangleBold } from './PlayRectangleBold';
import { PlayRectangleBoldDuotone } from './PlayRectangleBoldDuotone';
import { PlayRectangleFill } from './PlayRectangleFill';
import { PlayRectangleFillDuotone } from './PlayRectangleFillDuotone';

export interface PlayRectangleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PlayRectangle - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { PlayRectangleRegular } from 'stera-icons/icons/PlayRectangleRegular';
 */
const PlayRectangle = memo(forwardRef<SVGSVGElement, PlayRectangleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PlayRectangleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PlayRectangleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PlayRectangleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PlayRectangleFill ref={ref} {...rest} />;
  if (duotone) return <PlayRectangleRegularDuotone ref={ref} {...rest} />;
  return <PlayRectangleRegular ref={ref} {...rest} />;
}));

PlayRectangle.displayName = 'PlayRectangle';

// Triple export pattern (lucide-react style)
export { PlayRectangle, PlayRectangle as PlayRectangleIcon, PlayRectangle as SiPlayRectangle };
export default PlayRectangle;
