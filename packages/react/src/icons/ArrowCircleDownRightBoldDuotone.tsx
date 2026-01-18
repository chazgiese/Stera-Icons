import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleDownRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.22 4.22a11 11 0 1 1 15.56 15.56A11 11 0 0 1 4.22 4.22m1.42 1.42a9 9 0 1 0 12.72 12.72A9 9 0 0 0 5.64 5.64" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.76 7.76a1 1 0 0 1 1.41 0l5.37 5.36V8.46a1 1 0 1 1 2 0v7.08a1 1 0 0 1-1 1H8.46a1 1 0 1 1 0-2h4.66L7.76 9.17a1 1 0 0 1 0-1.41" />
    </IconBase>
  ))
);

ArrowCircleDownRightBoldDuotone.displayName = 'ArrowCircleDownRightBoldDuotone';

export { ArrowCircleDownRightBoldDuotone };
export type { ArrowCircleDownRightBoldDuotoneProps };
