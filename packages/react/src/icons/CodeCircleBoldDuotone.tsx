import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CodeCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CodeCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.54 6.71a1 1 0 0 1 1.92.58l-3 10a1 1 0 0 1-1.92-.58zM7.3 8.8a1 1 0 0 1 1.4 1.4L6.92 12l1.8 1.8a1 1 0 0 1-1.42 1.4l-2.5-2.5a1 1 0 0 1 0-1.4zM15.3 8.8a1 1 0 0 1 1.4 0l2.5 2.5a1 1 0 0 1 0 1.4l-2.5 2.5a1 1 0 1 1-1.4-1.4l1.79-1.8-1.8-1.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

CodeCircleBoldDuotone.displayName = 'CodeCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { CodeCircleBoldDuotone, CodeCircleBoldDuotone as CodeCircleBoldDuotoneIcon, CodeCircleBoldDuotone as SiCodeCircleBoldDuotone };
export type { CodeCircleBoldDuotoneProps };
