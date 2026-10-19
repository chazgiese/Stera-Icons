import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 5.38q-.36 0-.62.25l-4 4c-.34.34-.34.9 0 1.24s.9.34 1.24 0l2.5-2.5V16c0 .48.4.88.88.88s.87-.4.88-.88v-5.89l2.5 2.51c.34.34.9.34 1.24 0s.34-.9 0-1.24l-4-4q-.26-.25-.62-.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.13q.36 0 .62.25l4 4c.34.34.34.9 0 1.24s-.9.34-1.24 0l-2.5-2.5V16c0 .48-.4.88-.88.88s-.87-.4-.88-.88v-5.89l-2.5 2.51c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l4-4q.26-.25.62-.25" />
    </IconBase>
  ))
);

ArrowUpCircleFillDuotone.displayName = 'ArrowUpCircleFillDuotone';

// Triple export pattern
export { ArrowUpCircleFillDuotone, ArrowUpCircleFillDuotone as ArrowUpCircleFillDuotoneIcon, ArrowUpCircleFillDuotone as SiArrowUpCircleFillDuotone };
export default ArrowUpCircleFillDuotone;
export type { ArrowUpCircleFillDuotoneProps };
