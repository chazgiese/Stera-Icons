import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubicGraphBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubicGraphBoldDuotone = memo(
  forwardRef<SVGSVGElement, CubicGraphBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cubic-graph-bold-duotone" {...props}>
      <path d="M12 19.96a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.05a1 1 0 0 1 1-1M12 16.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1M12 13.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1M12.95 11.57a1 1 0 0 1-.15 1.08 1 1 0 0 1-.8.4h-.03zM3.05 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM6.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM9.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM15.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM18.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2h-.05a1 1 0 1 1 0-2zM12 7.96a1 1 0 0 1 .82.42q-.64.79-1.2 1.6a1 1 0 0 1-.62-.93v-.1a1 1 0 0 1 1-1M12 4.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v.05a1 1 0 1 1-2 0v-.04a1 1 0 0 1 1-1" opacity={0.4} />
        <path d="M21 4a1 1 0 1 1 0 2c-4.04 0-6.4 3-8.7 6.55-1.1 1.7-2.22 3.54-3.46 4.93C7.58 18.88 6.04 20 4 20h-.09.05H3a1 1 0 0 1 0-2H4c1.21 0 2.25-.64 3.34-1.85 1.1-1.24 2.1-2.9 3.27-4.7C12.87 8 15.77 4 21 4" />
    </IconBase>
  ))
);

CubicGraphBoldDuotone.displayName = 'CubicGraphBoldDuotone';

// Triple export pattern (lucide-react style)
export { CubicGraphBoldDuotone, CubicGraphBoldDuotone as CubicGraphBoldDuotoneIcon, CubicGraphBoldDuotone as SiCubicGraphBoldDuotone };
export default CubicGraphBoldDuotone;
export type { CubicGraphBoldDuotoneProps };
