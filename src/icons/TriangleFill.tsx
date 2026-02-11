import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TriangleFillProps = Omit<IconBaseProps, 'children'>;

const TriangleFill = memo(
  forwardRef<SVGSVGElement, TriangleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-fill" {...props}>
      <path d="M10.58 2.8c.9-.41 1.94-.41 2.84 0 .62.27 1.08.78 1.49 1.35q.59.87 1.42 2.33l4.06 7.02q.86 1.43 1.31 2.4c.3.63.52 1.29.44 1.96a3.5 3.5 0 0 1-1.42 2.47c-.55.4-1.22.54-1.92.6q-1.06.09-2.74.07H7.94q-1.68.01-2.74-.06c-.7-.07-1.37-.2-1.92-.6a3.5 3.5 0 0 1-1.42-2.48c-.08-.67.14-1.33.44-1.97q.46-.95 1.31-2.4l4.06-7.01Q8.5 5.02 9.1 4.15c.41-.57.87-1.08 1.49-1.36" />
    </IconBase>
  ))
);

TriangleFill.displayName = 'TriangleFill';

// Triple export pattern (lucide-react style)
export { TriangleFill, TriangleFill as TriangleFillIcon, TriangleFill as SiTriangleFill };
export default TriangleFill;
export type { TriangleFillProps };
