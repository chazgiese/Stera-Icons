import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronLeftCircleFillProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftCircleFill = memo(
  forwardRef<SVGSVGElement, ChevronLeftCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m2.12 5.63c-.34-.34-.9-.34-1.24 0l-4 4q-.25.26-.26.62.01.36.26.62l4 4c.34.34.9.34 1.24 0s.34-.9 0-1.24L10.74 12l3.38-3.38c.34-.34.34-.9 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronLeftCircleFill.displayName = 'ChevronLeftCircleFill';

// Triple export pattern
export { ChevronLeftCircleFill, ChevronLeftCircleFill as ChevronLeftCircleFillIcon, ChevronLeftCircleFill as SiChevronLeftCircleFill };
export default ChevronLeftCircleFill;
export type { ChevronLeftCircleFillProps };
