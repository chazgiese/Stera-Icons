import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RectangleFillProps = Omit<IconBaseProps, 'children'>;

const RectangleFill = memo(
  forwardRef<SVGSVGElement, RectangleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5z" />
    </IconBase>
  ))
);

RectangleFill.displayName = 'RectangleFill';

// Triple export pattern (lucide-react style)
export { RectangleFill, RectangleFill as RectangleFillIcon, RectangleFill as SiRectangleFill };
export type { RectangleFillProps };
