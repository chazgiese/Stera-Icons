import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftCircleFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftCircleFill = memo(
  forwardRef<SVGSVGElement, ArrowLeftCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m.62 5.63c-.34-.34-.9-.34-1.24 0l-4 4q-.25.26-.25.62t.25.62l4 4c.34.34.9.34 1.24 0s.34-.9 0-1.24l-2.5-2.5H16c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-5.89l2.5-2.51c.35-.34.35-.9 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowLeftCircleFill.displayName = 'ArrowLeftCircleFill';

// Triple export pattern
export { ArrowLeftCircleFill, ArrowLeftCircleFill as ArrowLeftCircleFillIcon, ArrowLeftCircleFill as SiArrowLeftCircleFill };
export default ArrowLeftCircleFill;
export type { ArrowLeftCircleFillProps };
