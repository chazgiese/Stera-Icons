import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CubicGraphBoldProps = Omit<IconBaseProps, 'children'>;

const CubicGraphBold = memo(
  forwardRef<SVGSVGElement, CubicGraphBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cubic-graph-bold" {...props}>
      <path fill="currentColor" d="M12 19.96a1 1 0 0 1 1 1V21a1 1 0 0 1-2 0v-.05a1 1 0 0 1 1-1M21 4a1 1 0 1 1 0 2c-3.66 0-5.94 2.47-8.05 5.57a1 1 0 0 1-.15 1.08 1 1 0 0 1-.8.4h-.03c-1 1.55-2.01 3.18-3.13 4.43C7.58 18.88 6.04 20 4 20h-.09.05H3a1 1 0 0 1 0-2H4c1.21 0 2.25-.64 3.34-1.85 1.1-1.24 2.1-2.9 3.27-4.7q.48-.73 1-1.48a1 1 0 0 1-.62-.92v-.1a1 1 0 0 1 1.82-.57C14.78 5.99 17.3 4 21 4M12 16.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M12 13.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1M3.05 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM6.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM9.05 11a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zM15.05 11a1 1 0 1 1 0 2h-.1a1 1 0 0 1 0-2zM18.05 11a1 1 0 1 1 0 2h-.1a1 1 0 0 1 0-2zM21 11a1 1 0 1 1 0 2h-.05a1 1 0 0 1 0-2zM12 4.96a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0v-.1a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v.05a1 1 0 1 1-2 0v-.04a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CubicGraphBold.displayName = 'CubicGraphBold';

// Triple export pattern (lucide-react style)
export { CubicGraphBold, CubicGraphBold as CubicGraphBoldIcon, CubicGraphBold as SiCubicGraphBold };
export type { CubicGraphBoldProps };
