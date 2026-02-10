import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarHalfFillProps = Omit<IconBaseProps, 'children'>;

const StarHalfFill = memo(
  forwardRef<SVGSVGElement, StarHalfFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-half-fill" {...props}>
      <path fill="currentColor" d="m12 18.16-4.48 2.63c-1.12.66-2.54-.32-2.24-1.63l1.14-5.02-3.9-3.4a1.5 1.5 0 0 1 .85-2.63l5.19-.47L10.6 2.9l.06-.11c.28-.53.8-.8 1.33-.8z" />
    </IconBase>
  ))
);

StarHalfFill.displayName = 'StarHalfFill';

// Triple export pattern (lucide-react style)
export { StarHalfFill, StarHalfFill as StarHalfFillIcon, StarHalfFill as SiStarHalfFill };
export default StarHalfFill;
export type { StarHalfFillProps };
