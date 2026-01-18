import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.22 4.22a11 11 0 1 1 15.56 15.56A11 11 0 0 1 4.22 4.22m12.02 3.54a1 1 0 0 0-1.41 0l-5.37 5.36V8.46a1 1 0 0 0-2 0v7.08a1 1 0 0 0 1 1h7.08a1 1 0 0 0 0-2h-4.66l5.36-5.37a1 1 0 0 0 0-1.41" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16.24 7.76a1 1 0 0 1 0 1.41l-5.36 5.37h4.66a1 1 0 1 1 0 2H8.46a1 1 0 0 1-1-1V8.46a1 1 0 1 1 2 0v4.66l5.37-5.36a1 1 0 0 1 1.41 0" />
    </IconBase>
  ))
);

ArrowCircleDownLeftFillDuotone.displayName = 'ArrowCircleDownLeftFillDuotone';

export { ArrowCircleDownLeftFillDuotone };
export type { ArrowCircleDownLeftFillDuotoneProps };
