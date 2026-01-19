import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpRightDownLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightDownLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightDownLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-up-right-down-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M19 5v1.41L6.41 19H5v-1.41L17.59 5z" opacity={.4} />
        <path fill="currentColor" d="M4 12.5a1 1 0 0 1 1 1V19h5.5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 1-1M20 3a1 1 0 0 1 1 1v6.5a1 1 0 1 1-2 0V5h-5.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ArrowUpRightDownLeftBoldDuotone.displayName = 'ArrowUpRightDownLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpRightDownLeftBoldDuotone, ArrowUpRightDownLeftBoldDuotone as ArrowUpRightDownLeftBoldDuotoneIcon, ArrowUpRightDownLeftBoldDuotone as SiArrowUpRightDownLeftBoldDuotone };
export type { ArrowUpRightDownLeftBoldDuotoneProps };
