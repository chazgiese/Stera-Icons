import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerUpRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 21a1 1 0 0 1-1-1v-8a4 4 0 0 1 4-4h9V4a1 1 0 0 1 1.7-.7l5 5 .07.07.1.13v.01a1 1 0 0 1-.16 1.2l-5 5A1 1 0 0 1 15 14v-4H6a2 2 0 0 0-2 2v8a1 1 0 0 1-1 1" />
    </IconBase>
  ))
);

ArrowCornerUpRightFill.displayName = 'ArrowCornerUpRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightFill, ArrowCornerUpRightFill as ArrowCornerUpRightFillIcon, ArrowCornerUpRightFill as SiArrowCornerUpRightFill };
export type { ArrowCornerUpRightFillProps };
