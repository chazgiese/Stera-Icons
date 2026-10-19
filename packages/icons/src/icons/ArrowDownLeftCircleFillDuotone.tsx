import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M9.17 8.3c-.48 0-.87.39-.87.87v5.66q0 .36.25.62.27.25.62.25h5.66c.48 0 .87-.39.87-.87s-.39-.88-.87-.88h-3.55l4.17-4.16c.34-.34.34-.9 0-1.24s-.9-.34-1.24 0l-4.16 4.17V9.17c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M9.17 8.3c.48 0 .88.39.88.87v3.55l4.16-4.17c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-4.17 4.16h3.55c.48 0 .87.4.87.88s-.39.87-.87.87H9.17q-.35 0-.62-.25-.25-.26-.25-.62V9.17c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ArrowDownLeftCircleFillDuotone.displayName = 'ArrowDownLeftCircleFillDuotone';

// Triple export pattern
export { ArrowDownLeftCircleFillDuotone, ArrowDownLeftCircleFillDuotone as ArrowDownLeftCircleFillDuotoneIcon, ArrowDownLeftCircleFillDuotone as SiArrowDownLeftCircleFillDuotone };
export default ArrowDownLeftCircleFillDuotone;
export type { ArrowDownLeftCircleFillDuotoneProps };
