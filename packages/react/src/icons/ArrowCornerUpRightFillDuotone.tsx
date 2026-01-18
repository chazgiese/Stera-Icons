import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 21a1 1 0 0 1-1-1v-8a4 4 0 0 1 4-4h9v2H6a2 2 0 0 0-2 2v8a1 1 0 0 1-1 1" opacity={.4} />
        <path fill="currentColor" d="M16.7 14.7A1 1 0 0 1 15 14V4a1 1 0 0 1 1.7-.7l5 5 .07.07a1 1 0 0 1-.06 1.34z" />
    </IconBase>
  ))
);

ArrowCornerUpRightFillDuotone.displayName = 'ArrowCornerUpRightFillDuotone';

export { ArrowCornerUpRightFillDuotone };
export type { ArrowCornerUpRightFillDuotoneProps };
