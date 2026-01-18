import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TreeDeciduousRegularProps = Omit<IconBaseProps, 'children'>;

const TreeDeciduousRegular = memo(
  forwardRef<SVGSVGElement, TreeDeciduousRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a3.75 3.75 0 0 1 3.67 3 4.25 4.25 0 0 1 3.13 6.92 4.74 4.74 0 0 1-2.8 8.58h-3V22a1 1 0 1 1-2 0v-2.25H8a4.75 4.75 0 0 1-2.8-8.58 4.23 4.23 0 0 1 3.12-6.92c.35-1.71 1.86-3 3.68-3m0 1.5c-1.24 0-2.25 1-2.25 2.25v.03a.75.75 0 0 1-.86.75l-.39-.03a2.75 2.75 0 0 0-1.63 4.97.75.75 0 0 1-.15 1.3A3.25 3.25 0 0 0 8 18.24h8a3.25 3.25 0 0 0 1.28-6.24.75.75 0 0 1-.15-1.3 2.75 2.75 0 0 0-2.02-4.93.75.75 0 0 1-.86-.75V5c0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

TreeDeciduousRegular.displayName = 'TreeDeciduousRegular';

// Triple export pattern (lucide-react style)
export { TreeDeciduousRegular, TreeDeciduousRegular as TreeDeciduousRegularIcon, TreeDeciduousRegular as SiTreeDeciduousRegular };
export type { TreeDeciduousRegularProps };
