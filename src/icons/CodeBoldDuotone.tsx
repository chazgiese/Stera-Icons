import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeBoldDuotone = memo(
  forwardRef<SVGSVGElement, CodeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-bold-duotone" {...props}>
      <path d="M13.04 4.73a1 1 0 0 1 1.92.54l-4 14a1 1 0 0 1-1.92-.54z" opacity={.4} />
        <path d="M6.3 7.3a1 1 0 1 1 1.4 1.4L4.42 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4zM16.3 7.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

CodeBoldDuotone.displayName = 'CodeBoldDuotone';

// Triple export pattern (lucide-react style)
export { CodeBoldDuotone, CodeBoldDuotone as CodeBoldDuotoneIcon, CodeBoldDuotone as SiCodeBoldDuotone };
export default CodeBoldDuotone;
export type { CodeBoldDuotoneProps };
