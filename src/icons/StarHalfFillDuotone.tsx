import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StarHalfFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StarHalfFillDuotone = memo(
  forwardRef<SVGSVGElement, StarHalfFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-half-fill-duotone" {...props}>
      <path fill="currentColor" d="M17.03 21.78 12 18.81V1c.58 0 1.17.32 1.44.95l2.31 5.34 5.83.54a1.57 1.57 0 0 1 .88 2.74l-4.39 3.84 1.29 5.68a1.57 1.57 0 0 1-2.33 1.69" opacity={.4} />
        <path fill="currentColor" d="M6.97 21.78 12 18.81V1c-.58 0-1.17.32-1.44.95L8.25 7.29l-5.83.54a1.57 1.57 0 0 0-.88 2.74l4.39 3.84-1.29 5.68a1.57 1.57 0 0 0 2.33 1.69" />
    </IconBase>
  ))
);

StarHalfFillDuotone.displayName = 'StarHalfFillDuotone';

// Triple export pattern (lucide-react style)
export { StarHalfFillDuotone, StarHalfFillDuotone as StarHalfFillDuotoneIcon, StarHalfFillDuotone as SiStarHalfFillDuotone };
export type { StarHalfFillDuotoneProps };
