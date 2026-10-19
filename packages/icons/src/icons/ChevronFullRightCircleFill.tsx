import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullRightCircleFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullRightCircleFill = memo(
  forwardRef<SVGSVGElement, ChevronFullRightCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-.56 6.37c-.74-.57-1.81-.05-1.81.9v5.97c0 .93 1.07 1.46 1.81.89l3.84-3c.58-.44.58-1.32 0-1.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullRightCircleFill.displayName = 'ChevronFullRightCircleFill';

// Triple export pattern
export { ChevronFullRightCircleFill, ChevronFullRightCircleFill as ChevronFullRightCircleFillIcon, ChevronFullRightCircleFill as SiChevronFullRightCircleFill };
export default ChevronFullRightCircleFill;
export type { ChevronFullRightCircleFillProps };
