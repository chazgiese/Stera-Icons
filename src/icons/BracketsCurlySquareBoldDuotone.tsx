import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlySquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlySquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlySquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-square-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-1q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35q-.09-1.32-.07-3.37v-1q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58q1.32-.09 3.37-.07zm-1 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62-.06.78-.06 1.78-.06 3.2v1c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h1c1.42 0 2.42 0 3.2-.06a4 4 0 0 0 1.62-.38 4 4 0 0 0 1.74-1.74c.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-1c0-1.42 0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38-.78-.06-1.78-.06-3.2-.06z" clipRule="evenodd" opacity={.4} />
        <path d="M10 7a1 1 0 1 1 0 2h-.5v1a3 3 0 0 1-.74 2c.46.55.74 1.25.74 2v1h.5a1 1 0 1 1 0 2h-.6a1.9 1.9 0 0 1-1.9-1.9V14c0-.48-.32-.9-.78-1.04a1 1 0 0 1 0-1.92c.46-.14.78-.56.78-1.05V8.9C7.5 7.85 8.35 7 9.4 7zM14.6 7c1.05 0 1.9.85 1.9 1.9V10c0 .48.32.9.78 1.04a1 1 0 0 1 0 1.92A1.1 1.1 0 0 0 16.5 14v1.1A1.9 1.9 0 0 1 14.6 17H14a1 1 0 1 1 0-2h.5v-1c0-.75.28-1.45.74-2a3 3 0 0 1-.74-2V9H14a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

BracketsCurlySquareBoldDuotone.displayName = 'BracketsCurlySquareBoldDuotone';

// Triple export pattern (lucide-react style)
export { BracketsCurlySquareBoldDuotone, BracketsCurlySquareBoldDuotone as BracketsCurlySquareBoldDuotoneIcon, BracketsCurlySquareBoldDuotone as SiBracketsCurlySquareBoldDuotone };
export default BracketsCurlySquareBoldDuotone;
export type { BracketsCurlySquareBoldDuotoneProps };
