import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StairsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const StairsRegularDuotone = memo(
  forwardRef<SVGSVGElement, StairsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stairs-duotone" {...props}>
      <path d="M3.75 16.5c0 .41.34.75.75.75h.75v4.25a.75.75 0 0 1-1.5 0zM9.75 10.5c0 .41.34.75.75.75h.75v5.25a.75.75 0 0 0-.75-.75h-.75zM15.75 4.5c0 .41.34.75.75.75h.75v5.25a.75.75 0 0 0-.75-.75h-.75z" opacity={0.4} />
        <path d="M10.5 15.75a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5zM16.5 9.75a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5zM21.5 3.75a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

StairsRegularDuotone.displayName = 'StairsRegularDuotone';

// Triple export pattern (lucide-react style)
export { StairsRegularDuotone, StairsRegularDuotone as StairsRegularDuotoneIcon, StairsRegularDuotone as SiStairsRegularDuotone };
export default StairsRegularDuotone;
export type { StairsRegularDuotoneProps };
