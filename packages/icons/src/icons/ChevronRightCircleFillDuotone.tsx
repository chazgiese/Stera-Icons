import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronRightCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronRightCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-.88 5.63c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L13.26 12l-3.38 3.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l4-4q.24-.26.26-.62-.01-.36-.26-.62z" clipRule="evenodd" opacity={.4} />
        <path d="M9.88 7.38c.34-.34.9-.34 1.24 0l4 4q.24.26.25.62 0 .36-.25.62l-4 4c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L13.26 12 9.88 8.62c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

ChevronRightCircleFillDuotone.displayName = 'ChevronRightCircleFillDuotone';

// Triple export pattern
export { ChevronRightCircleFillDuotone, ChevronRightCircleFillDuotone as ChevronRightCircleFillDuotoneIcon, ChevronRightCircleFillDuotone as SiChevronRightCircleFillDuotone };
export default ChevronRightCircleFillDuotone;
export type { ChevronRightCircleFillDuotoneProps };
