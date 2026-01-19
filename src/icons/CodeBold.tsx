import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CodeBoldProps = Omit<IconBaseProps, 'children'>;

const CodeBold = memo(
  forwardRef<SVGSVGElement, CodeBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-bold" {...props}>
      <path fill="currentColor" d="M13.55 3.7a1 1 0 0 1 1.9.6l-5 16a1 1 0 0 1-1.9-.6zM5.8 6.8a1 1 0 1 1 1.4 1.4L3.42 12l3.8 3.8a1 1 0 0 1-1.42 1.4l-4.5-4.5a1 1 0 0 1 0-1.4zM16.8 6.8a1 1 0 0 1 1.4 0l4.5 4.5a1 1 0 0 1 0 1.4l-4.5 4.5a1 1 0 0 1-1.4-1.4l3.79-3.8-3.8-3.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

CodeBold.displayName = 'CodeBold';

// Triple export pattern (lucide-react style)
export { CodeBold, CodeBold as CodeBoldIcon, CodeBold as SiCodeBold };
export type { CodeBoldProps };
