import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { ThumbsDownRegular } from './ThumbsDownRegular.js';
import { ThumbsDownRegularDuotone } from './ThumbsDownRegularDuotone.js';
import { ThumbsDownBold } from './ThumbsDownBold.js';
import { ThumbsDownBoldDuotone } from './ThumbsDownBoldDuotone.js';
import { ThumbsDownFill } from './ThumbsDownFill.js';
import { ThumbsDownFillDuotone } from './ThumbsDownFillDuotone.js';

export interface ThumbsDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ThumbsDown - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ThumbsDownRegular } from 'stera-icons/icons/ThumbsDownRegular';
 */
const ThumbsDown = memo(forwardRef<SVGSVGElement, ThumbsDownProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ThumbsDownBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ThumbsDownBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ThumbsDownFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ThumbsDownFill ref={ref} {...rest} />;
  if (duotone) return <ThumbsDownRegularDuotone ref={ref} {...rest} />;
  return <ThumbsDownRegular ref={ref} {...rest} />;
}));

ThumbsDown.displayName = 'ThumbsDown';

// Triple export pattern (lucide-react style)
export { ThumbsDown, ThumbsDown as ThumbsDownIcon, ThumbsDown as SiThumbsDown };
export default ThumbsDown;
