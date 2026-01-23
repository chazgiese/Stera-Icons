import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlugFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlugFillDuotone = memo(
  forwardRef<SVGSVGElement, PlugFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="plug-fill-duotone" {...props}>
      <path d="M5.47 10.1a1.5 1.5 0 0 1 2.08.04l6.32 6.31c.53.54.58 1.38.13 1.97l-.1.12-.63.68-.03.02a6 6 0 1 1-8.46-8.5zM21.3 1.3a1 1 0 0 1 1.4 1.4L19.9 5.53a6 6 0 0 0-1.41-1.4z" opacity={0.4} />
        <path fill="currentColor" d="M4.1 18.48a6 6 0 0 0 1.42 1.41l-2.81 2.82a1 1 0 0 1-1.42-1.42zM10.76 4.76a6 6 0 1 1 8.46 8.5l-.69.64a1.5 1.5 0 0 1-2.08-.03l-.95-.96-.8.8a1 1 0 1 1-1.4-1.42l.79-.79-1.6-1.59-.78.8a1 1 0 1 1-1.42-1.42l.8-.79-.96-.95a1.5 1.5 0 0 1-.03-2.08l.63-.69z" />
    </IconBase>
  ))
);

PlugFillDuotone.displayName = 'PlugFillDuotone';

// Triple export pattern (lucide-react style)
export { PlugFillDuotone, PlugFillDuotone as PlugFillDuotoneIcon, PlugFillDuotone as SiPlugFillDuotone };
export default PlugFillDuotone;
export type { PlugFillDuotoneProps };
