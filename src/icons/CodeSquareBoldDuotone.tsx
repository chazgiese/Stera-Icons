import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, CodeSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-square-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-2 2c-1.42 0-2.42 0-3.2.06-.77.07-1.25.19-1.62.38a4 4 0 0 0-1.74 1.74c-.2.37-.31.85-.38 1.62C4 8.58 4 9.58 4 11v2c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h2c1.42 0 2.42 0 3.2-.06a4 4 0 0 0 1.62-.38 4 4 0 0 0 1.74-1.74c.2-.37.31-.85.38-1.62.06-.78.06-1.78.06-3.2v-2c0-1.42 0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38C15.42 4 14.42 4 13 4z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.55 7.18a1 1 0 1 1 1.9.64l-3 9a1 1 0 0 1-1.9-.64zM7.3 9.3a1 1 0 1 1 1.4 1.4L7.42 12l1.3 1.3a1 1 0 1 1-1.42 1.4l-2-2a1 1 0 0 1 0-1.4zM15.3 9.3a1 1 0 0 1 1.4 0l2 2a1 1 0 0 1 0 1.4l-2 2a1 1 0 0 1-1.4-1.4l1.29-1.3-1.3-1.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

CodeSquareBoldDuotone.displayName = 'CodeSquareBoldDuotone';

// Triple export pattern (lucide-react style)
export { CodeSquareBoldDuotone, CodeSquareBoldDuotone as CodeSquareBoldDuotoneIcon, CodeSquareBoldDuotone as SiCodeSquareBoldDuotone };
export default CodeSquareBoldDuotone;
export type { CodeSquareBoldDuotoneProps };
