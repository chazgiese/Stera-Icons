import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TriangleFillProps = Omit<IconBaseProps, 'children'>;

const TriangleFill = memo(
  forwardRef<SVGSVGElement, TriangleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="triangle-fill" {...props}>
      <path fill="currentColor" d="M10.37 2.4a4 4 0 0 1 3.26 0c.7.3 1.23.9 1.7 1.58.5.7 1.03 1.64 1.7 2.82l3.73 6.52.9 1.58q.4.7.65 1.28c.35.76.58 1.5.5 2.25a4 4 0 0 1-1.63 2.8c-.62.46-1.38.62-2.2.7q-1.25.09-3.25.07H8.27q-2 .02-3.24-.08a4.3 4.3 0 0 1-2.2-.68 4 4 0 0 1-1.64-2.81c-.08-.76.16-1.5.5-2.25q.54-1.13 1.55-2.86L6.96 6.8q1-1.77 1.7-2.82c.48-.69 1-1.27 1.7-1.58" />
    </IconBase>
  ))
);

TriangleFill.displayName = 'TriangleFill';

// Triple export pattern (lucide-react style)
export { TriangleFill, TriangleFill as TriangleFillIcon, TriangleFill as SiTriangleFill };
export type { TriangleFillProps };
