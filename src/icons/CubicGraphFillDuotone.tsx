import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubicGraphFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubicGraphFillDuotone = memo(
  forwardRef<SVGSVGElement, CubicGraphFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cubic-graph-fill-duotone" {...props}>
      <path d="M12 19.96a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.05a1 1 0 0 1 1-1M12 16.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1M12 13.96a1 1 0 0 1 1 1v.1a1 1 0 0 1-1.94.31l.92-1.41zM3.05 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM6.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM9.05 11a1 1 0 0 1 .9.57L9.03 13h-.08a1 1 0 1 1 0-2zM15.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM18.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2h-.05a1 1 0 1 1 0-2zM12 7.96a1 1 0 0 1 .43.1q-.64.79-1.21 1.61a1 1 0 0 1-.22-.62v-.1a1 1 0 0 1 1-1M12 4.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v.05a1 1 0 1 1-2 0v-.04a1 1 0 0 1 1-1" opacity={0.4} />
        <path fillRule="evenodd" d="M21 3.5a1.5 1.5 0 0 1 0 3c-3.74 0-5.96 2.76-8.28 6.32-1.1 1.67-2.23 3.57-3.5 5C7.9 19.26 6.23 20.5 4 20.5h-.99a1.5 1.5 0 0 1-.02-3h1.02c1 0 1.93-.52 2.97-1.69 1.07-1.2 2.03-2.8 3.22-4.63C12.44 7.74 15.47 3.5 21 3.5M3.8 20.49h.04q-.06 0-.12-.02zm-.4-.11h.02l-.03-.01zm-.83-.92v.01zm.17-1.27v-.01" clipRule="evenodd" />
    </IconBase>
  ))
);

CubicGraphFillDuotone.displayName = 'CubicGraphFillDuotone';

// Triple export pattern (lucide-react style)
export { CubicGraphFillDuotone, CubicGraphFillDuotone as CubicGraphFillDuotoneIcon, CubicGraphFillDuotone as SiCubicGraphFillDuotone };
export default CubicGraphFillDuotone;
export type { CubicGraphFillDuotoneProps };
