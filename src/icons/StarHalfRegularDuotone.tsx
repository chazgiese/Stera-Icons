import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarHalfRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const StarHalfRegularDuotone = memo(
  forwardRef<SVGSVGElement, StarHalfRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-half-duotone" {...props}>
      <path fill="currentColor" d="M12 1.25c.46 0 .92.23 1.16.7l.05.1 2.37 5.48 5.97.55c1.15.1 1.62 1.53.75 2.3l-4.5 3.94 1.31 5.82c.26 1.14-.97 2-1.95 1.42L12 18.51V17q.26 0 .51.1l.16.08 4.89 2.89-1.25-5.52c-.1-.47.05-.96.42-1.28l4.26-3.73-5.65-.52c-.48-.04-.9-.34-1.1-.79L12 3.02z" opacity={.4} />
        <path fill="currentColor" d="M4.89 20.14c-.26 1.14.97 2 1.95 1.42L12 18.51V1.25c-.48 0-.98.26-1.21.8L8.42 7.52l-5.97.55a1.31 1.31 0 0 0-.75 2.3l4.5 3.94z" />
    </IconBase>
  ))
);

StarHalfRegularDuotone.displayName = 'StarHalfRegularDuotone';

// Triple export pattern (lucide-react style)
export { StarHalfRegularDuotone, StarHalfRegularDuotone as StarHalfRegularDuotoneIcon, StarHalfRegularDuotone as SiStarHalfRegularDuotone };
export default StarHalfRegularDuotone;
export type { StarHalfRegularDuotoneProps };
