import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleDownLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16.07 7.93c.29.3.29.77 0 1.06l-5.8 5.8h5.27a.75.75 0 1 1 0 1.5H8.46a.75.75 0 0 1-.75-.75V8.46a.75.75 0 1 1 1.5 0v5.26l5.8-5.79c.29-.29.76-.29 1.06 0" />
        <path fill="currentColor" fillRule="evenodd" d="M19.6 4.4A10.75 10.75 0 1 1 4.4 19.6 10.75 10.75 0 0 1 19.6 4.4m-1.06 1.06A9.25 9.25 0 1 0 5.46 18.54 9.25 9.25 0 0 0 18.54 5.46" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownLeftRegular.displayName = 'ArrowCircleDownLeftRegular';

export { ArrowCircleDownLeftRegular };
export type { ArrowCircleDownLeftRegularProps };
