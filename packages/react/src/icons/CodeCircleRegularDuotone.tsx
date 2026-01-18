import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CodeCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CodeCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.78 6.78a.75.75 0 0 1 1.44.44l-3 10a.75.75 0 0 1-1.44-.44zM7.47 8.97a.75.75 0 1 1 1.06 1.06L6.56 12l1.97 1.97a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06zM15.47 8.97c.3-.3.77-.3 1.06 0l2.5 2.5c.3.3.3.77 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06L17.44 12l-1.97-1.97a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

CodeCircleRegularDuotone.displayName = 'CodeCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CodeCircleRegularDuotone, CodeCircleRegularDuotone as CodeCircleRegularDuotoneIcon, CodeCircleRegularDuotone as SiCodeCircleRegularDuotone };
export type { CodeCircleRegularDuotoneProps };
