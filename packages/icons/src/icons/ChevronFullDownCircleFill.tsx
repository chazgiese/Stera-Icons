import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullDownCircleFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownCircleFill = memo(
  forwardRef<SVGSVGElement, ChevronFullDownCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M9.01 9.63c-.94 0-1.46 1.07-.89 1.81l3 3.84c.44.58 1.32.58 1.77 0l2.99-3.84c.57-.74.04-1.81-.9-1.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullDownCircleFill.displayName = 'ChevronFullDownCircleFill';

// Triple export pattern
export { ChevronFullDownCircleFill, ChevronFullDownCircleFill as ChevronFullDownCircleFillIcon, ChevronFullDownCircleFill as SiChevronFullDownCircleFill };
export default ChevronFullDownCircleFill;
export type { ChevronFullDownCircleFillProps };
