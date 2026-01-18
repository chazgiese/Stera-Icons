import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerDownRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v8a4 4 0 0 0 4 4h12.59l1-1-1-1H6a2 2 0 0 1-2-2V4a1 1 0 0 0-1-1" opacity={.4} />
        <path fill="currentColor" d="M16.7 9.3a1 1 0 1 0-1.4 1.4l4.29 4.3-4.3 4.3a1 1 0 0 0 1.42 1.4l5-5 .06-.07a1 1 0 0 0-.06-1.34z" />
    </IconBase>
  ))
);

ArrowCornerDownRightBoldDuotone.displayName = 'ArrowCornerDownRightBoldDuotone';

export { ArrowCornerDownRightBoldDuotone };
export type { ArrowCornerDownRightBoldDuotoneProps };
