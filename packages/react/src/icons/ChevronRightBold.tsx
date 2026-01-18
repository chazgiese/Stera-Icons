import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronRightBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronRightBold = memo(
  forwardRef<SVGSVGElement, ChevronRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8.3 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4-1.4l6.29-6.3-6.3-6.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ChevronRightBold.displayName = 'ChevronRightBold';

export { ChevronRightBold };
export type { ChevronRightBoldProps };
