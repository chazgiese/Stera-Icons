import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarHalfRegularProps = Omit<IconBaseProps, 'children'>;

const StarHalfRegular = memo(
  forwardRef<SVGSVGElement, StarHalfRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-half" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="m12 2.25.16.01c.39.05.75.27.95.66l.05.09 2.11 4.86 5.33.5c1.1.1 1.56 1.45.72 2.19l-4.02 3.5 1.18 5.15c.24 1.1-.94 1.91-1.87 1.36L12 17.87l-4.6 2.7c-.94.55-2.12-.26-1.88-1.36l1.18-5.16-4.02-3.5c-.84-.73-.38-2.09.72-2.19l5.33-.49 2.11-4.86.05-.1c.23-.44.67-.66 1.11-.66m0 14.08q.34 0 .64.17L16.9 19l-1.09-4.76c-.1-.45.06-.92.4-1.22l3.7-3.22-4.9-.45a1.3 1.3 0 0 1-1.04-.75L12 4.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

StarHalfRegular.displayName = 'StarHalfRegular';

// Triple export pattern (lucide-react style)
export { StarHalfRegular, StarHalfRegular as StarHalfRegularIcon, StarHalfRegular as SiStarHalfRegular };
export default StarHalfRegular;
export type { StarHalfRegularProps };
