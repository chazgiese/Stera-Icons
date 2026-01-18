import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SquareSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, SquareSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.47 20.89a6 6 0 0 1-.75.46c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 .46-.76zM13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-.46.75L4.52 3.11a6 6 0 0 1 .76-.46c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2z" />
        <path fill="currentColor" d="M20.89 19.47a6 6 0 0 1-1.42 1.42L3.11 4.52a6 6 0 0 1 1.41-1.41z" />
    </IconBase>
  ))
);

SquareSlashFillDuotone.displayName = 'SquareSlashFillDuotone';

export { SquareSlashFillDuotone };
export type { SquareSlashFillDuotoneProps };
