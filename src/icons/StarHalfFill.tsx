import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StarHalfFillProps = Omit<IconBaseProps, 'children'>;

const StarHalfFill = memo(
  forwardRef<SVGSVGElement, StarHalfFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-half-fill" {...props}>
      <path fill="currentColor" d="m12 18.8-5.03 2.98a1.57 1.57 0 0 1-2.33-1.7l1.29-5.67-4.4-3.84a1.57 1.57 0 0 1 .9-2.74l5.82-.54 2.31-5.34c.27-.63.86-.95 1.44-.95z" />
    </IconBase>
  ))
);

StarHalfFill.displayName = 'StarHalfFill';

// Triple export pattern (lucide-react style)
export { StarHalfFill, StarHalfFill as StarHalfFillIcon, StarHalfFill as SiStarHalfFill };
export type { StarHalfFillProps };
