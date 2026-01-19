import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StairsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const StairsRegularDuotone = memo(
  forwardRef<SVGSVGElement, StairsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stairs-duotone" {...props}>
      <path d="M2.75 16.83c0 .42.34.75.75.75h.75v4.92a.75.75 0 0 1-1.5 0z" opacity={0.4} />
        <path fillRule="evenodd" d="M10.16 17.58" clipRule="evenodd" opacity={0.4} />
        <path d="M16.08 3.5c0 .41.34.75.75.75h.75v5.92a.75.75 0 0 0-.75-.75h-.75zM10.17 10.92a.75.75 0 0 1-.75-.75v5.91h.75c.41 0 .75.34.75.75v-5.91z" opacity={0.4} />
        <path fill="currentColor" d="M10.17 16.08a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1 0-1.5zM16.83 9.42a.75.75 0 0 1 0 1.5h-6.66a.75.75 0 0 1 0-1.5zM22.5 2.75a.75.75 0 0 1 0 1.5h-5.67a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

StairsRegularDuotone.displayName = 'StairsRegularDuotone';

// Triple export pattern (lucide-react style)
export { StairsRegularDuotone, StairsRegularDuotone as StairsRegularDuotoneIcon, StairsRegularDuotone as SiStairsRegularDuotone };
export type { StairsRegularDuotoneProps };
