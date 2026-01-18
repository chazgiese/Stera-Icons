import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoreSquareVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreSquareVFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreSquareVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-1 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M12 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </IconBase>
  ))
);

MoreSquareVFillDuotone.displayName = 'MoreSquareVFillDuotone';

export { MoreSquareVFillDuotone };
export type { MoreSquareVFillDuotoneProps };
