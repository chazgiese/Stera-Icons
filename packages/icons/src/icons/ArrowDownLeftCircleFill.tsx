import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowDownLeftCircleFillProps = Omit<IconBaseProps, 'children'>;

const ArrowDownLeftCircleFill = memo(
  forwardRef<SVGSVGElement, ArrowDownLeftCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M9.17 8.3c-.48 0-.87.39-.87.87v5.66q0 .36.25.62.27.25.62.25h5.66c.48 0 .87-.39.87-.87s-.39-.88-.87-.88h-3.55l4.17-4.16c.34-.34.34-.9 0-1.24s-.9-.34-1.24 0l-4.16 4.17V9.17c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowDownLeftCircleFill.displayName = 'ArrowDownLeftCircleFill';

// Triple export pattern
export { ArrowDownLeftCircleFill, ArrowDownLeftCircleFill as ArrowDownLeftCircleFillIcon, ArrowDownLeftCircleFill as SiArrowDownLeftCircleFill };
export default ArrowDownLeftCircleFill;
export type { ArrowDownLeftCircleFillProps };
