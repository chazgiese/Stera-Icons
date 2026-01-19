import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlagBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlagBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlagBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flag-bold-duotone" {...props}>
      <path fill="currentColor" d="M4.9 2.14c1.94-.24 3.31-.21 4.4 0a9 9 0 0 1 2.56.96c.67.36 1.24.66 2.09.88s2.04.34 3.88.23A2.03 2.03 0 0 1 20 6.22v7.92c0 1.02-.78 1.9-1.82 1.98-2.05.15-3.5.04-4.63-.23-1.14-.27-1.92-.7-2.59-1.05a7 7 0 0 0-2.02-.8c-.68-.14-1.6-.2-2.94-.09v-2a12 12 0 0 1 3.34.13c1.12.22 1.89.63 2.56 1 .67.35 1.25.66 2.12.87s2.09.32 3.98.17v-7.9l-.05-.02c-1.98.13-3.38 0-4.49-.28-1.1-.28-1.87-.7-2.53-1.05a7 7 0 0 0-2-.77c-.69-.13-1.6-.18-2.93-.07v-.9a1 1 0 0 0-1.1-1" opacity={.4} />
        <path fill="currentColor" d="M5 2.13a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0V3.13a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

FlagBoldDuotone.displayName = 'FlagBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlagBoldDuotone, FlagBoldDuotone as FlagBoldDuotoneIcon, FlagBoldDuotone as SiFlagBoldDuotone };
export type { FlagBoldDuotoneProps };
