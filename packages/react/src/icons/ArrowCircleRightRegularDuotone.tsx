import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M11.47 6.47c.3-.3.77-.3 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H7a.75.75 0 0 1 0-1.5h8.19l-3.72-3.72a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowCircleRightRegularDuotone.displayName = 'ArrowCircleRightRegularDuotone';

export { ArrowCircleRightRegularDuotone };
export type { ArrowCircleRightRegularDuotoneProps };
