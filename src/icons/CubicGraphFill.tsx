import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubicGraphFillProps = Omit<IconBaseProps, 'children'>;

const CubicGraphFill = memo(
  forwardRef<SVGSVGElement, CubicGraphFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cubic-graph-fill" {...props}>
      <path fill="currentColor" d="M12 19.96a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.05a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M21 3.5a1.5 1.5 0 0 1 0 3c-3.74 0-5.96 2.76-8.28 6.32l-.74 1.14H12a1 1 0 0 1 1 1v.1a1 1 0 0 1-1.94.31q-.89 1.34-1.85 2.44C7.91 19.27 6.24 20.5 4 20.5h-.99a1.5 1.5 0 0 1-.02-3h1.02c1 0 1.93-.52 2.97-1.69.7-.78 1.35-1.73 2.05-2.81h-.08a1 1 0 1 1 0-2h.1a1 1 0 0 1 .9.57l.25-.39q.48-.75 1.02-1.51a1 1 0 0 1-.22-.62v-.1a1 1 0 0 1 1.43-.9C14.45 5.62 17.1 3.5 21 3.5M3.8 20.49h.04q-.06 0-.12-.02zm-.4-.11h.02l-.03-.01zm-.83-.92v.01zm.17-1.27v-.01" clipRule="evenodd" />
        <path fill="currentColor" d="M12 16.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1M3.05 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM6.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM15.05 11a1 1 0 1 1 0 2h-.1a1 1 0 0 1 0-2zM18.05 11a1 1 0 1 1 0 2h-.1a1 1 0 0 1 0-2zM21 11a1 1 0 1 1 0 2h-.05a1 1 0 0 1 0-2zM12 4.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v.05a1 1 0 1 1-2 0v-.04a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CubicGraphFill.displayName = 'CubicGraphFill';

// Triple export pattern (lucide-react style)
export { CubicGraphFill, CubicGraphFill as CubicGraphFillIcon, CubicGraphFill as SiCubicGraphFill };
export default CubicGraphFill;
export type { CubicGraphFillProps };
