import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-right" {...props}>
      <path fill="currentColor" d="M6.25 12c0-.41.34-.75.75-.75h8.19l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H7a.75.75 0 0 1-.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M1.25 12a10.75 10.75 0 1 1 21.5 0 10.75 10.75 0 0 1-21.5 0m1.5 0a9.25 9.25 0 1 0 18.5 0 9.25 9.25 0 0 0-18.5 0" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleRightRegular.displayName = 'ArrowCircleRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowCircleRightRegular, ArrowCircleRightRegular as ArrowCircleRightRegularIcon, ArrowCircleRightRegular as SiArrowCircleRightRegular };
export default ArrowCircleRightRegular;
export type { ArrowCircleRightRegularProps };
