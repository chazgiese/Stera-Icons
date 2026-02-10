import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StarFillProps = Omit<IconBaseProps, 'children'>;

const StarFill = memo(
  forwardRef<SVGSVGElement, StarFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-fill" {...props}>
      <path fill="currentColor" d="M10.67 2.8a1.51 1.51 0 0 1 2.72.1l2.05 4.74 5.19.47a1.5 1.5 0 0 1 .85 2.64l-3.9 3.4 1.14 5c.3 1.32-1.12 2.3-2.24 1.64L12 18.16l-4.48 2.63c-1.12.66-2.54-.32-2.24-1.63l1.14-5.02-3.9-3.4a1.5 1.5 0 0 1 .85-2.63l5.19-.47L10.6 2.9z" />
    </IconBase>
  ))
);

StarFill.displayName = 'StarFill';

// Triple export pattern (lucide-react style)
export { StarFill, StarFill as StarFillIcon, StarFill as SiStarFill };
export default StarFill;
export type { StarFillProps };
