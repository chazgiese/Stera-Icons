import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarHalfBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StarHalfBoldDuotone = memo(
  forwardRef<SVGSVGElement, StarHalfBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-half-bold-duotone" {...props}>
      <path d="m12 4.73 1.73 3.97c.22.5.7.85 1.24.9l4.32.4-3.25 2.83c-.42.36-.6.92-.48 1.47l.96 4.2-3.75-2.21-.18-.1a2 2 0 0 0-.59-.11v2.08l4.48 2.63c1.12.66 2.54-.32 2.24-1.63l-1.14-5.02 3.9-3.4a1.5 1.5 0 0 0-.85-2.63l-5.19-.47L13.4 2.9l-.06-.11A1.5 1.5 0 0 0 12 2z" opacity={.4} />
        <path d="m12 18.16-4.48 2.63c-1.12.66-2.54-.32-2.24-1.63l1.14-5.02-3.9-3.4a1.5 1.5 0 0 1 .85-2.63l5.19-.47L10.6 2.9l.06-.11c.28-.53.8-.8 1.33-.8z" />
    </IconBase>
  ))
);

StarHalfBoldDuotone.displayName = 'StarHalfBoldDuotone';

// Triple export pattern (lucide-react style)
export { StarHalfBoldDuotone, StarHalfBoldDuotone as StarHalfBoldDuotoneIcon, StarHalfBoldDuotone as SiStarHalfBoldDuotone };
export default StarHalfBoldDuotone;
export type { StarHalfBoldDuotoneProps };
