import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8 5q0 .4.3.7L10 7.42v9.18l-1.7 1.7A1 1 0 0 0 8 19z" opacity={.4} />
        <path fill="currentColor" d="M8.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4-1.4l6.29-6.3-6.3-6.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ChevronFullRightBoldDuotone.displayName = 'ChevronFullRightBoldDuotone';

export { ChevronFullRightBoldDuotone };
export type { ChevronFullRightBoldDuotoneProps };
