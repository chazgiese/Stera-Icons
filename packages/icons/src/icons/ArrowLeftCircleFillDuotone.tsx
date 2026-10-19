import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m.62 5.63c-.34-.34-.9-.34-1.24 0l-4 4q-.25.26-.25.62t.25.62l4 4c.34.34.9.34 1.24 0s.34-.9 0-1.24l-2.5-2.5H16c.48 0 .87-.4.88-.88 0-.48-.4-.87-.88-.87h-5.89l2.5-2.51c.35-.34.35-.9 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M11.38 7.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-2.5 2.5H16c.48 0 .87.4.88.88 0 .48-.4.87-.88.87h-5.89l2.5 2.51c.35.34.35.9 0 1.24-.33.34-.89.34-1.23 0l-4-4q-.25-.27-.25-.62 0-.36.25-.62z" />
    </IconBase>
  ))
);

ArrowLeftCircleFillDuotone.displayName = 'ArrowLeftCircleFillDuotone';

// Triple export pattern
export { ArrowLeftCircleFillDuotone, ArrowLeftCircleFillDuotone as ArrowLeftCircleFillDuotoneIcon, ArrowLeftCircleFillDuotone as SiArrowLeftCircleFillDuotone };
export default ArrowLeftCircleFillDuotone;
export type { ArrowLeftCircleFillDuotoneProps };
