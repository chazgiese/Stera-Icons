import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeCircleFillProps = Omit<IconBaseProps, 'children'>;

const CodeCircleFill = memo(
  forwardRef<SVGSVGElement, CodeCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m1.21 5.15a.87.87 0 0 0-1.06.64l-2 8a.87.87 0 1 0 1.7.42l2-8a.87.87 0 0 0-.64-1.06m-4.1 2.23a.9.9 0 0 0-1.23 0l-2 2a.9.9 0 0 0 0 1.24l2 2a.88.88 0 0 0 1.24-1.24L7.74 12l1.38-1.38a.9.9 0 0 0 0-1.24m7 0a.88.88 0 0 0-1.23 1.24L16.26 12l-1.38 1.38a.88.88 0 0 0 1.24 1.24l2-2a.9.9 0 0 0 0-1.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

CodeCircleFill.displayName = 'CodeCircleFill';

// Triple export pattern (lucide-react style)
export { CodeCircleFill, CodeCircleFill as CodeCircleFillIcon, CodeCircleFill as SiCodeCircleFill };
export default CodeCircleFill;
export type { CodeCircleFillProps };
