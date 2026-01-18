import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleDownRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.4 4.4a10.75 10.75 0 1 1 15.2 15.2A10.75 10.75 0 0 1 4.4 4.4m14.14 1.06A9.25 9.25 0 1 0 5.46 18.54 9.25 9.25 0 0 0 18.54 5.46" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.54 7.71c.4 0 .75.34.75.75v7.08a.75.75 0 0 1-.75.75H8.46a.75.75 0 0 1 0-1.5h5.26l-5.79-5.8A.75.75 0 1 1 9 7.94l5.79 5.8V8.45c0-.4.33-.74.75-.75" />
    </IconBase>
  ))
);

ArrowCircleDownRightRegularDuotone.displayName = 'ArrowCircleDownRightRegularDuotone';

export { ArrowCircleDownRightRegularDuotone };
export type { ArrowCircleDownRightRegularDuotoneProps };
