import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TogglesBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TogglesBoldDuotone = memo(
  forwardRef<SVGSVGElement, TogglesBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggles-bold-duotone" {...props}>
      <path d="M16 12.75a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4M16 1.25a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10zm-8 2a3 3 0 0 0 0 6h8a3 3 0 1 0 0-6z" opacity={0.4} />
        <path fill="currentColor" d="M16 15.75a2 2 0 1 1 0 4 2 2 0 0 1 0-4M8 4.25a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

TogglesBoldDuotone.displayName = 'TogglesBoldDuotone';

// Triple export pattern (lucide-react style)
export { TogglesBoldDuotone, TogglesBoldDuotone as TogglesBoldDuotoneIcon, TogglesBoldDuotone as SiTogglesBoldDuotone };
export type { TogglesBoldDuotoneProps };
