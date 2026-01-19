import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToggleOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToggleOffFillDuotone = memo(
  forwardRef<SVGSVGElement, ToggleOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggle-off-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 4a8 8 0 1 1 0 16H9A8 8 0 1 1 9 4zM9 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

ToggleOffFillDuotone.displayName = 'ToggleOffFillDuotone';

// Triple export pattern (lucide-react style)
export { ToggleOffFillDuotone, ToggleOffFillDuotone as ToggleOffFillDuotoneIcon, ToggleOffFillDuotone as SiToggleOffFillDuotone };
export type { ToggleOffFillDuotoneProps };
