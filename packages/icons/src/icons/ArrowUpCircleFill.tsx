import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpCircleFillProps = Omit<IconBaseProps, 'children'>;

const ArrowUpCircleFill = memo(
  forwardRef<SVGSVGElement, ArrowUpCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 5.38q-.36 0-.62.25l-4 4c-.34.34-.34.9 0 1.24s.9.34 1.24 0l2.5-2.5V16c0 .48.4.88.88.88s.88-.4.88-.88v-5.89l2.5 2.5c.34.35.9.35 1.24 0 .34-.33.34-.89 0-1.23l-4-4q-.26-.25-.62-.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowUpCircleFill.displayName = 'ArrowUpCircleFill';

// Triple export pattern
export { ArrowUpCircleFill, ArrowUpCircleFill as ArrowUpCircleFillIcon, ArrowUpCircleFill as SiArrowUpCircleFill };
export default ArrowUpCircleFill;
export type { ArrowUpCircleFillProps };
