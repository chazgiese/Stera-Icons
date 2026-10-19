import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightCircleFillProps = Omit<IconBaseProps, 'children'>;

const ChevronRightCircleFill = memo(
  forwardRef<SVGSVGElement, ChevronRightCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-.88 5.63c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L13.26 12l-3.38 3.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l4-4q.25-.26.26-.62-.01-.36-.26-.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronRightCircleFill.displayName = 'ChevronRightCircleFill';

// Triple export pattern
export { ChevronRightCircleFill, ChevronRightCircleFill as ChevronRightCircleFillIcon, ChevronRightCircleFill as SiChevronRightCircleFill };
export default ChevronRightCircleFill;
export type { ChevronRightCircleFillProps };
