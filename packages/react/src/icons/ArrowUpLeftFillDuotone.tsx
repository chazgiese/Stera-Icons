import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.7 17.3a1 1 0 0 1-1.4 1.4l-6.8-6.79 1.41-1.41z" opacity={.4} />
        <path fill="currentColor" d="M15 5a1 1 0 0 1 .7 1.7l-9 9A1 1 0 0 1 5 15V6a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ArrowUpLeftFillDuotone.displayName = 'ArrowUpLeftFillDuotone';

export { ArrowUpLeftFillDuotone };
export type { ArrowUpLeftFillDuotoneProps };
