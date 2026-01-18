import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ThumbsDownRegular } from './ThumbsDownRegular';
import { ThumbsDownRegularDuotone } from './ThumbsDownRegularDuotone';
import { ThumbsDownBold } from './ThumbsDownBold';
import { ThumbsDownBoldDuotone } from './ThumbsDownBoldDuotone';
import { ThumbsDownFill } from './ThumbsDownFill';
import { ThumbsDownFillDuotone } from './ThumbsDownFillDuotone';

export interface ThumbsDownProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ThumbsDown with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ThumbsDownRegular } from 'stera-icons/ThumbsDownRegular';
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

export { ThumbsDown };
