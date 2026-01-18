import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LockFillProps = Omit<IconBaseProps, 'children'>;

const LockFill = memo(
  forwardRef<SVGSVGElement, LockFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a6 6 0 0 1 6 6v2.15q.42.09.82.29a4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2v-2.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74q.4-.2.82-.29V7a6 6 0 0 1 6-6m0 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-11a4 4 0 0 0-4 4v2h8V7a4 4 0 0 0-4-4" clipRule="evenodd" />
    </IconBase>
  ))
);

LockFill.displayName = 'LockFill';

export { LockFill };
export type { LockFillProps };
