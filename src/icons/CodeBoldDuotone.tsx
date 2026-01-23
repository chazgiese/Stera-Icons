import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeBoldDuotone = memo(
  forwardRef<SVGSVGElement, CodeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-bold-duotone" {...props}>
      <path fill="currentColor" d="M13.55 3.7a1 1 0 0 1 1.9.6l-5 16a1 1 0 0 1-1.9-.6z" opacity={.4} />
        <path fill="currentColor" d="M5.8 6.8a1 1 0 1 1 1.4 1.4L3.42 12l3.8 3.8a1 1 0 0 1-1.42 1.4l-4.5-4.5a1 1 0 0 1 0-1.4zM16.8 6.8a1 1 0 0 1 1.4 0l4.5 4.5a1 1 0 0 1 0 1.4l-4.5 4.5a1 1 0 1 1-1.4-1.4l3.79-3.8-3.8-3.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

CodeBoldDuotone.displayName = 'CodeBoldDuotone';

// Triple export pattern (lucide-react style)
export { CodeBoldDuotone, CodeBoldDuotone as CodeBoldDuotoneIcon, CodeBoldDuotone as SiCodeBoldDuotone };
export default CodeBoldDuotone;
export type { CodeBoldDuotoneProps };
