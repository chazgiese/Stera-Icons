import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TennisBallBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TennisBallBoldDuotone = memo(
  forwardRef<SVGSVGElement, TennisBallBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.43 4.93a10.96 10.96 0 0 1 0 14.14q-.79-.63-1.43-1.42a8.95 8.95 0 0 0 0-11.3q.63-.8 1.43-1.42M17.57 4.93q.79.63 1.43 1.42a8.96 8.96 0 0 0 0 11.3q-.63.8-1.43 1.42a10.96 10.96 0 0 1 0-14.14" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

TennisBallBoldDuotone.displayName = 'TennisBallBoldDuotone';

export { TennisBallBoldDuotone };
export type { TennisBallBoldDuotoneProps };
