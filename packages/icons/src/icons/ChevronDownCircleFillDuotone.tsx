import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronDownCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronDownCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m4.62 8.13c-.34-.34-.9-.34-1.24 0L12 13.26 8.62 9.88c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l4 4q.26.24.62.26.36-.01.62-.26l4-4c.34-.34.34-.9 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M15.38 9.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-4 4q-.27.24-.62.25-.36 0-.62-.25l-4-4c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0L12 13.26z" />
    </IconBase>
  ))
);

ChevronDownCircleFillDuotone.displayName = 'ChevronDownCircleFillDuotone';

// Triple export pattern
export { ChevronDownCircleFillDuotone, ChevronDownCircleFillDuotone as ChevronDownCircleFillDuotoneIcon, ChevronDownCircleFillDuotone as SiChevronDownCircleFillDuotone };
export default ChevronDownCircleFillDuotone;
export type { ChevronDownCircleFillDuotoneProps };
