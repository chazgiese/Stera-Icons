import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.3 12.7a1 1 0 0 0 1.4 0l-7 7a1 1 0 0 1-1.4-1.4l6.29-6.3z" opacity={.4} />
        <path fill="currentColor" d="M8.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1-1.4 1.4l-7-7a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ChevronRightBoldDuotone.displayName = 'ChevronRightBoldDuotone';

export { ChevronRightBoldDuotone };
export type { ChevronRightBoldDuotoneProps };
