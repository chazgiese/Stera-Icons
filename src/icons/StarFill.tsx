import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StarFillProps = Omit<IconBaseProps, 'children'>;

const StarFill = memo(
  forwardRef<SVGSVGElement, StarFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="star-fill" {...props}>
      <path fill="currentColor" d="M10.56 1.95a1.57 1.57 0 0 1 2.82-.12l.06.12 2.31 5.34 5.83.54a1.57 1.57 0 0 1 .88 2.74l-4.39 3.84 1.29 5.68a1.57 1.57 0 0 1-2.33 1.69L12 18.81l-5.03 2.97a1.57 1.57 0 0 1-2.33-1.7l1.29-5.67-4.4-3.84a1.57 1.57 0 0 1 .9-2.74l5.82-.54z" />
    </IconBase>
  ))
);

StarFill.displayName = 'StarFill';

// Triple export pattern (lucide-react style)
export { StarFill, StarFill as StarFillIcon, StarFill as SiStarFill };
export type { StarFillProps };
