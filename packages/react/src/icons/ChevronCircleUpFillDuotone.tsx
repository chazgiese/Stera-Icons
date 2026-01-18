import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 7.5a1 1 0 0 0-.7.3l-4.5 4.5a1 1 0 0 0 1.4 1.4l3.8-3.79 3.8 3.8a1 1 0 0 0 1.4-1.42l-4.5-4.5a1 1 0 0 0-.7-.29" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 8.5a1 1 0 0 1 .7.3l4.5 4.5a1 1 0 0 1-1.4 1.4L12 10.92l-3.8 3.8a1 1 0 1 1-1.4-1.42l4.5-4.5a1 1 0 0 1 .7-.29" />
    </IconBase>
  ))
);

ChevronCircleUpFillDuotone.displayName = 'ChevronCircleUpFillDuotone';

export { ChevronCircleUpFillDuotone };
export type { ChevronCircleUpFillDuotoneProps };
