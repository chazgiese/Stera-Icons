import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, CodeSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm-.39 4.15a.9.9 0 0 0-1.06.64l-2 8a.88.88 0 0 0 1.7.42l2-8a.87.87 0 0 0-.64-1.06m-4.1 2.23a.9.9 0 0 0-1.23 0l-2 2a.9.9 0 0 0 0 1.24l2 2a.88.88 0 0 0 1.24-1.24L7.74 12l1.38-1.38a.9.9 0 0 0 0-1.24m7 0a.88.88 0 0 0-1.23 1.24L16.26 12l-1.38 1.38a.88.88 0 0 0 1.24 1.24l2-2a.9.9 0 0 0 0-1.24z" clipRule="evenodd" opacity={.4} />
        <path d="M12.15 7.79a.88.88 0 0 1 1.7.42l-2 8a.87.87 0 0 1-1.7-.42zM7.88 9.38a.88.88 0 0 1 1.24 1.24L7.74 12l1.38 1.38a.88.88 0 0 1-1.24 1.24l-2-2a.9.9 0 0 1 0-1.24zM14.88 9.38a.9.9 0 0 1 1.24 0l2 2a.9.9 0 0 1 0 1.24l-2 2a.88.88 0 0 1-1.24-1.24L16.26 12l-1.38-1.38a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

CodeSquareFillDuotone.displayName = 'CodeSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { CodeSquareFillDuotone, CodeSquareFillDuotone as CodeSquareFillDuotoneIcon, CodeSquareFillDuotone as SiCodeSquareFillDuotone };
export default CodeSquareFillDuotone;
export type { CodeSquareFillDuotoneProps };
