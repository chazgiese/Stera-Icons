import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightCircleFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightCircleFill = memo(
  forwardRef<SVGSVGElement, ArrowUpRightCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M9.17 8.3c-.48 0-.87.39-.87.87s.39.88.87.88h3.55L8.55 14.2c-.34.34-.34.9 0 1.24s.9.34 1.24 0l4.16-4.17v3.55c0 .48.4.87.88.87s.87-.39.87-.87V9.17q0-.35-.25-.62-.26-.25-.62-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowUpRightCircleFill.displayName = 'ArrowUpRightCircleFill';

// Triple export pattern
export { ArrowUpRightCircleFill, ArrowUpRightCircleFill as ArrowUpRightCircleFillIcon, ArrowUpRightCircleFill as SiArrowUpRightCircleFill };
export default ArrowUpRightCircleFill;
export type { ArrowUpRightCircleFillProps };
