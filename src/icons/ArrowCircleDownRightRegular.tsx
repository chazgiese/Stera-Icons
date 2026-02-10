import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-right" {...props}>
      <path fill="currentColor" d="M14.83 8.42c.41 0 .75.34.75.75v5.66a.75.75 0 0 1-.75.75H9.17a.75.75 0 1 1 0-1.5h3.85L8.64 9.7A.75.75 0 0 1 9.7 8.64l4.38 4.38V9.17c0-.41.33-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M5.1 5.1a9.75 9.75 0 1 1 13.8 13.8A9.75 9.75 0 0 1 5.1 5.1m12.73 1.07A8.25 8.25 0 1 0 6.17 17.84 8.25 8.25 0 0 0 17.83 6.17" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownRightRegular.displayName = 'ArrowCircleDownRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownRightRegular, ArrowCircleDownRightRegular as ArrowCircleDownRightRegularIcon, ArrowCircleDownRightRegular as SiArrowCircleDownRightRegular };
export default ArrowCircleDownRightRegular;
export type { ArrowCircleDownRightRegularProps };
