import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToggleOnFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToggleOnFillDuotone = memo(
  forwardRef<SVGSVGElement, ToggleOnFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggle-on-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 4a8 8 0 1 1 0 16H9A8 8 0 1 1 9 4zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

ToggleOnFillDuotone.displayName = 'ToggleOnFillDuotone';

// Triple export pattern (lucide-react style)
export { ToggleOnFillDuotone, ToggleOnFillDuotone as ToggleOnFillDuotoneIcon, ToggleOnFillDuotone as SiToggleOnFillDuotone };
export type { ToggleOnFillDuotoneProps };
