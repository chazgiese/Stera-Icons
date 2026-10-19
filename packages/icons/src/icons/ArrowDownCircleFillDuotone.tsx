import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 5.38c-.48 0-.87.39-.87.87v5.89l-2.51-2.5c-.34-.35-.9-.35-1.24 0-.34.33-.34.89 0 1.23l4 4q.26.24.62.25.36 0 .62-.25l4-4c.34-.34.34-.9 0-1.24s-.9-.34-1.24 0l-2.5 2.5V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.13c.48 0 .87.39.87.87v5.89l2.51-2.5c.34-.35.9-.35 1.24 0 .34.33.34.89 0 1.23l-4 4q-.27.24-.62.25-.36 0-.62-.25l-4-4c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l2.5 2.5V8c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ArrowDownCircleFillDuotone.displayName = 'ArrowDownCircleFillDuotone';

// Triple export pattern
export { ArrowDownCircleFillDuotone, ArrowDownCircleFillDuotone as ArrowDownCircleFillDuotoneIcon, ArrowDownCircleFillDuotone as SiArrowDownCircleFillDuotone };
export default ArrowDownCircleFillDuotone;
export type { ArrowDownCircleFillDuotoneProps };
