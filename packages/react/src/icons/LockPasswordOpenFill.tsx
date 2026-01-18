import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LockPasswordOpenFillProps = Omit<IconBaseProps, 'children'>;

const LockPasswordOpenFill = memo(
  forwardRef<SVGSVGElement, LockPasswordOpenFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a6 6 0 0 1 4.8 2.4 1 1 0 0 1-1.6 1.2A4 4 0 0 0 8 7v2h7.2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2v-2.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74q.4-.2.82-.29V7a6 6 0 0 1 6-6M8 14.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

LockPasswordOpenFill.displayName = 'LockPasswordOpenFill';

export { LockPasswordOpenFill };
export type { LockPasswordOpenFillProps };
