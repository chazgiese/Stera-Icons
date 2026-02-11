import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeCircleRegularProps = Omit<IconBaseProps, 'children'>;

const CodeCircleRegular = memo(
  forwardRef<SVGSVGElement, CodeCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="code-circle" {...props}>
      <path d="M12.27 7.82a.75.75 0 0 1 1.46.36l-2 8a.75.75 0 1 1-1.46-.36zM7.97 9.47a.75.75 0 1 1 1.06 1.06L7.56 12l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06zM14.97 9.47c.3-.3.77-.3 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06L16.44 12l-1.47-1.47a.75.75 0 0 1 0-1.06" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CodeCircleRegular.displayName = 'CodeCircleRegular';

// Triple export pattern (lucide-react style)
export { CodeCircleRegular, CodeCircleRegular as CodeCircleRegularIcon, CodeCircleRegular as SiCodeCircleRegular };
export default CodeCircleRegular;
export type { CodeCircleRegularProps };
