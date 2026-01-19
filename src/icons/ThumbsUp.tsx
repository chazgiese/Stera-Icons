import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ThumbsUpRegular } from './ThumbsUpRegular';
import { ThumbsUpRegularDuotone } from './ThumbsUpRegularDuotone';
import { ThumbsUpBold } from './ThumbsUpBold';
import { ThumbsUpBoldDuotone } from './ThumbsUpBoldDuotone';
import { ThumbsUpFill } from './ThumbsUpFill';
import { ThumbsUpFillDuotone } from './ThumbsUpFillDuotone';

export interface ThumbsUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ThumbsUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { ThumbsUpRegular } from 'stera-icons/icons/ThumbsUpRegular';
 */
const ThumbsUp = memo(forwardRef<SVGSVGElement, ThumbsUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ThumbsUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ThumbsUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ThumbsUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ThumbsUpFill ref={ref} {...rest} />;
  if (duotone) return <ThumbsUpRegularDuotone ref={ref} {...rest} />;
  return <ThumbsUpRegular ref={ref} {...rest} />;
}));

ThumbsUp.displayName = 'ThumbsUp';

// Triple export pattern (lucide-react style)
export { ThumbsUp, ThumbsUp as ThumbsUpIcon, ThumbsUp as SiThumbsUp };
export default ThumbsUp;
