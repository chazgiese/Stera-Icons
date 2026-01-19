import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CodeFillProps = Omit<IconBaseProps, 'children'>;

const CodeFill = memo(
  forwardRef<SVGSVGElement, CodeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-fill" {...props}>
      <path fill="currentColor" d="M13.07 3.55a1.5 1.5 0 0 1 2.86.9l-5 16a1.5 1.5 0 0 1-2.86-.9zM5.44 6.44a1.5 1.5 0 0 1 2.12 2.12L4.12 12l3.44 3.44a1.5 1.5 0 0 1-2.12 2.12l-4.5-4.5a1.5 1.5 0 0 1 0-2.12zM16.44 6.44a1.5 1.5 0 0 1 2.12 0l4.5 4.5a1.5 1.5 0 0 1 0 2.12l-4.5 4.5a1.5 1.5 0 1 1-2.12-2.12L19.88 12l-3.44-3.44a1.5 1.5 0 0 1 0-2.12" />
    </IconBase>
  ))
);

CodeFill.displayName = 'CodeFill';

// Triple export pattern (lucide-react style)
export { CodeFill, CodeFill as CodeFillIcon, CodeFill as SiCodeFill };
export type { CodeFillProps };
