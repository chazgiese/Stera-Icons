import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpCircleFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpCircleFill = memo(
  forwardRef<SVGSVGElement, ChevronFullUpCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m.89 6.97c-.45-.58-1.33-.58-1.78 0l-2.99 3.84c-.57.74-.05 1.81.9 1.81h5.97c.93 0 1.46-1.07.89-1.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullUpCircleFill.displayName = 'ChevronFullUpCircleFill';

// Triple export pattern
export { ChevronFullUpCircleFill, ChevronFullUpCircleFill as ChevronFullUpCircleFillIcon, ChevronFullUpCircleFill as SiChevronFullUpCircleFill };
export default ChevronFullUpCircleFill;
export type { ChevronFullUpCircleFillProps };
