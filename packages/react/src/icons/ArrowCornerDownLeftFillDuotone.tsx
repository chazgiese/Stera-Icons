import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.3 9.3A1 1 0 0 1 9 10v10a1 1 0 0 1-1.7.7l-5-5-.07-.07a1 1 0 0 1 .06-1.34z" />
        <path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H9v-2h9a2 2 0 0 0 2-2V4a1 1 0 0 1 1-1" opacity={.4} />
    </IconBase>
  ))
);

ArrowCornerDownLeftFillDuotone.displayName = 'ArrowCornerDownLeftFillDuotone';

export { ArrowCornerDownLeftFillDuotone };
export type { ArrowCornerDownLeftFillDuotoneProps };
