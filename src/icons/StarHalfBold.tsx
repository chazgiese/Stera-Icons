import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarHalfBoldProps = Omit<IconBaseProps, 'children'>;

const StarHalfBold = memo(
  forwardRef<SVGSVGElement, StarHalfBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-half-bold" {...props}>
      <path fillRule="evenodd" d="M12 2c.56 0 1.12.3 1.39.9l2.05 4.74 5.19.47a1.5 1.5 0 0 1 .85 2.64l-3.9 3.4 1.14 5c.3 1.32-1.12 2.3-2.24 1.64L12 18.16l-4.48 2.63a1.5 1.5 0 0 1-1.81-.21 1.5 1.5 0 0 1-.45-.83 2 2 0 0 1 .02-.6l1.14-5-3.9-3.4a2 2 0 0 1-.41-.56 1.4 1.4 0 0 1-.03-1.05 1.5 1.5 0 0 1 .95-.95q.16-.06.34-.08l5.19-.47L10.6 2.9l.06-.11a1.5 1.5 0 0 1 .53-.57l.05-.03.12-.06.06-.03.14-.05.05-.01.15-.03h.04l.16-.02zm0 14.08q.3 0 .59.12l.18.09 3.75 2.2-.96-4.2a1.5 1.5 0 0 1 .48-1.46L19.3 10l-4.32-.4a1.5 1.5 0 0 1-1.24-.9L12 4.73z" clipRule="evenodd" />
    </IconBase>
  ))
);

StarHalfBold.displayName = 'StarHalfBold';

// Triple export pattern (lucide-react style)
export { StarHalfBold, StarHalfBold as StarHalfBoldIcon, StarHalfBold as SiStarHalfBold };
export default StarHalfBold;
export type { StarHalfBoldProps };
