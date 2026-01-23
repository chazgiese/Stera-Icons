import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlySquareBoldProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlySquareBold = memo(
  forwardRef<SVGSVGElement, BracketsCurlySquareBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-square-bold" {...props}>
      <path fill="currentColor" d="M9.5 6.5a1 1 0 1 1 0 2H9v1.42c0 .78-.29 1.51-.77 2.08.48.57.77 1.3.77 2.08v1.42h.5a1 1 0 1 1 0 2h-.6A1.9 1.9 0 0 1 7 15.6v-1.52c0-.51-.33-.97-.82-1.13a1 1 0 0 1 0-1.9c.5-.16.82-.62.82-1.13V8.4c0-1.06.85-1.91 1.9-1.91zM15.1 6.5c1.05 0 1.9.85 1.9 1.9v1.52c0 .51.33.97.82 1.13a1 1 0 0 1 0 1.9 1.2 1.2 0 0 0-.82 1.13v1.51a1.9 1.9 0 0 1-1.9 1.91h-.6a1 1 0 1 1 0-2h.5v-1.42c0-.78.29-1.51.77-2.08A3.2 3.2 0 0 1 15 9.92V8.5h-.5a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-2 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h2c1.42 0 2.42 0 3.2-.06a4 4 0 0 0 1.62-.38 4 4 0 0 0 1.74-1.74c.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-2c0-1.42 0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38C15.42 4 14.42 4 13 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsCurlySquareBold.displayName = 'BracketsCurlySquareBold';

// Triple export pattern (lucide-react style)
export { BracketsCurlySquareBold, BracketsCurlySquareBold as BracketsCurlySquareBoldIcon, BracketsCurlySquareBold as SiBracketsCurlySquareBold };
export default BracketsCurlySquareBold;
export type { BracketsCurlySquareBoldProps };
