import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, TextSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zM8.5 6.5a2 2 0 0 0-2 2 1 1 0 1 0 2 0h1.6a1 1 0 0 1 .9.9v5.1a1 1 0 0 1-.9 1h-.2l-.2.04H9.7l-.07.03-.04.02-.05.03-.02.01-.14.1h-.02a1 1 0 0 0-.35.77 1 1 0 0 0 1 1h4a1 1 0 0 0 1-1.1l-.01-.04a1 1 0 0 0-.35-.62l-.01-.02-.14-.09-.02-.01-.05-.03-.04-.02-.07-.02h-.01l-.2-.05h-.2a1 1 0 0 1-.9-1v-5a1 1 0 0 1 .9-1h1.6a1 1 0 1 0 2 0 2 2 0 0 0-2-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.5 6.5a2 2 0 0 1 2 2 1 1 0 1 1-2 0h-1.6a1 1 0 0 0-.9 1v5c0 .52.4.94.9 1h.2l.2.04h.01q.04.02.07.03l.04.02.05.03.02.01.14.1h.01a1 1 0 0 1 .27.35 1 1 0 0 1 .08.28v.04l.01.1a1 1 0 0 1-1 1h-4a1 1 0 0 1-.65-1.76l.02-.02.14-.09.02-.01.05-.03.04-.02.07-.02h.01l.2-.05h.2a1 1 0 0 0 .9-1V9.4a1 1 0 0 0-.9-.9H8.5a1 1 0 0 1-2 0c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

TextSquareFillDuotone.displayName = 'TextSquareFillDuotone';

export { TextSquareFillDuotone };
export type { TextSquareFillDuotoneProps };
