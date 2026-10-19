import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronUpCircleFillProps = Omit<IconBaseProps, 'children'>;

const ChevronUpCircleFill = memo(
  forwardRef<SVGSVGElement, ChevronUpCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 6.88q-.36 0-.62.25l-4 4c-.34.34-.34.9 0 1.24s.9.34 1.24 0L12 10.74l3.38 3.38c.34.34.9.34 1.24 0s.34-.9 0-1.24l-4-4q-.26-.25-.62-.26" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronUpCircleFill.displayName = 'ChevronUpCircleFill';

// Triple export pattern
export { ChevronUpCircleFill, ChevronUpCircleFill as ChevronUpCircleFillIcon, ChevronUpCircleFill as SiChevronUpCircleFill };
export default ChevronUpCircleFill;
export type { ChevronUpCircleFillProps };
