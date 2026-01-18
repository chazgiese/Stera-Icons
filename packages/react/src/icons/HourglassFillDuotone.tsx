import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HourglassFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HourglassFillDuotone = memo(
  forwardRef<SVGSVGElement, HourglassFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 1a3 3 0 0 1 3 3v1.12a7 7 0 0 1-2.63 5.46l-1.28 1.03a.5.5 0 0 0 0 .78l1.28 1.03A7 7 0 0 1 20 18.88V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.12a7 7 0 0 1 2.63-5.46l1.28-1.03a.5.5 0 0 0 0-.78l-1.28-1.03A7 7 0 0 1 4 5.12V4a3 3 0 0 1 3-3zM9.44 6.07a1 1 0 0 0-.63 1.78l1.29 1.03q.66.53 1.02 1.22c.31.57.38 1.23.38 1.9q0 1.3-.21 2.6-.16.86-.8 1.49l-2.2 2.2A1 1 0 0 0 9 20h6a1 1 0 0 0 .7-1.7l-2.2-2.21c-.4-.41-.7-.93-.79-1.5a16 16 0 0 1-.21-2.6c0-.66.07-1.32.38-1.9q.36-.68 1.02-1.21l1.29-1.03a1 1 0 0 0-.63-1.78z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14.56 6.07a1 1 0 0 1 .63 1.78L13.9 8.88q-.66.53-1.02 1.22a4 4 0 0 0-.38 1.9q0 1.3.21 2.6.16.86.79 1.49l2.2 2.2A1 1 0 0 1 15 20H9a1 1 0 0 1-.7-1.7l2.2-2.21c.4-.41.7-.93.79-1.5q.21-1.3.21-2.6c0-.66-.07-1.32-.38-1.9a4 4 0 0 0-1.02-1.21L8.8 7.85a1 1 0 0 1 .63-1.78z" />
    </IconBase>
  ))
);

HourglassFillDuotone.displayName = 'HourglassFillDuotone';

export { HourglassFillDuotone };
export type { HourglassFillDuotoneProps };
