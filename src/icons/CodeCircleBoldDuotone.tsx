import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CodeCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.03 7.76a1 1 0 1 1 1.94.48l-2 8a1 1 0 0 1-1.94-.48zM7.8 9.3a1 1 0 1 1 1.4 1.4L7.92 12l1.3 1.3a1 1 0 0 1-1.42 1.4l-2-2a1 1 0 0 1 0-1.4zM14.8 9.3a1 1 0 0 1 1.4 0l2 2a1 1 0 0 1 0 1.4l-2 2a1 1 0 0 1-1.4-1.4l1.29-1.3-1.3-1.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

CodeCircleBoldDuotone.displayName = 'CodeCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { CodeCircleBoldDuotone, CodeCircleBoldDuotone as CodeCircleBoldDuotoneIcon, CodeCircleBoldDuotone as SiCodeCircleBoldDuotone };
export default CodeCircleBoldDuotone;
export type { CodeCircleBoldDuotoneProps };
