import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MinimizeBoldProps = Omit<IconBaseProps, 'children'>;

const MinimizeBold = memo(
  forwardRef<SVGSVGElement, MinimizeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.5 14a2.5 2.5 0 0 1 2.5 2.5V20a1 1 0 1 1-2 0v-3.5a.5.5 0 0 0-.5-.5H4a1 1 0 1 1 0-2zM20 14a1 1 0 1 1 0 2h-3.5a.5.5 0 0 0-.5.5V20a1 1 0 1 1-2 0v-3.5a2.5 2.5 0 0 1 2.5-2.5zM9 3a1 1 0 0 1 1 1v3.5A2.5 2.5 0 0 1 7.5 10H4a1 1 0 0 1 0-2h3.5a.5.5 0 0 0 .5-.5V4a1 1 0 0 1 1-1M15 3a1 1 0 0 1 1 1v3.5c0 .28.22.5.5.5H20a1 1 0 1 1 0 2h-3.5A2.5 2.5 0 0 1 14 7.5V4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

MinimizeBold.displayName = 'MinimizeBold';

// Triple export pattern (lucide-react style)
export { MinimizeBold, MinimizeBold as MinimizeBoldIcon, MinimizeBold as SiMinimizeBold };
export type { MinimizeBoldProps };
