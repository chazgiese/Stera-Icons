import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleFillProps = Omit<IconBaseProps, 'children'>;

const RectangleFill = memo(
  forwardRef<SVGSVGElement, RectangleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rectangle-fill" {...props}>
      <path d="M15.4 3.5q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v3.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H8.6q-1.44.01-2.38-.05A5 5 0 0 1 4.46 20a4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q2 15.34 2 13.9v-3.8q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44q.94-.06 2.38-.05z" />
    </IconBase>
  ))
);

RectangleFill.displayName = 'RectangleFill';

// Triple export pattern (lucide-react style)
export { RectangleFill, RectangleFill as RectangleFillIcon, RectangleFill as SiRectangleFill };
export default RectangleFill;
export type { RectangleFillProps };
