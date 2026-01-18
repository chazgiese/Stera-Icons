import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpLeftDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M10.5 3a1 1 0 0 1 .7 1.7L8.67 7.26l8.09 8.09 2.54-2.55a1 1 0 0 1 1.71.71V20a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-.7-1.7l2.54-2.55-8.09-8.09-2.54 2.55A1 1 0 0 1 3 10.5V4a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ArrowUpLeftDownRightFill.displayName = 'ArrowUpLeftDownRightFill';

export { ArrowUpLeftDownRightFill };
export type { ArrowUpLeftDownRightFillProps };
