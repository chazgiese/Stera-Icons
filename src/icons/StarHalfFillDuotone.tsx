import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarHalfFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StarHalfFillDuotone = memo(
  forwardRef<SVGSVGElement, StarHalfFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-half-fill-duotone" {...props}>
      <path d="m12 18.16 4.48 2.63c1.12.66 2.54-.32 2.24-1.63l-1.14-5.02 3.9-3.4a1.5 1.5 0 0 0-.85-2.63l-5.19-.47L13.4 2.9l-.06-.11c-.28-.53-.8-.8-1.33-.8z" opacity={.4} />
        <path d="m12 18.16-4.48 2.63c-1.12.66-2.54-.32-2.24-1.63l1.14-5.02-3.9-3.4a1.5 1.5 0 0 1 .85-2.63l5.19-.47L10.6 2.9l.06-.11c.28-.53.8-.8 1.33-.8z" />
    </IconBase>
  ))
);

StarHalfFillDuotone.displayName = 'StarHalfFillDuotone';

// Triple export pattern (lucide-react style)
export { StarHalfFillDuotone, StarHalfFillDuotone as StarHalfFillDuotoneIcon, StarHalfFillDuotone as SiStarHalfFillDuotone };
export default StarHalfFillDuotone;
export type { StarHalfFillDuotoneProps };
