import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RectangleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RectangleFillDuotone = memo(
  forwardRef<SVGSVGElement, RectangleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18 5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zM6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

RectangleFillDuotone.displayName = 'RectangleFillDuotone';

// Triple export pattern (lucide-react style)
export { RectangleFillDuotone, RectangleFillDuotone as RectangleFillDuotoneIcon, RectangleFillDuotone as SiRectangleFillDuotone };
export type { RectangleFillDuotoneProps };
