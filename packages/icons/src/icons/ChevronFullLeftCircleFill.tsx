import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullLeftCircleFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftCircleFill = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m2.38 7.26c0-.94-1.08-1.46-1.82-.89l-3.84 3c-.58.44-.58 1.32 0 1.77l3.84 2.99c.74.57 1.81.04 1.81-.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullLeftCircleFill.displayName = 'ChevronFullLeftCircleFill';

// Triple export pattern
export { ChevronFullLeftCircleFill, ChevronFullLeftCircleFill as ChevronFullLeftCircleFillIcon, ChevronFullLeftCircleFill as SiChevronFullLeftCircleFill };
export default ChevronFullLeftCircleFill;
export type { ChevronFullLeftCircleFillProps };
