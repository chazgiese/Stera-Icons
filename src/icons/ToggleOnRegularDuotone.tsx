import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToggleOnRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToggleOnRegularDuotone = memo(
  forwardRef<SVGSVGElement, ToggleOnRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggle-on-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.4 4.26a7.75 7.75 0 0 1-.4 15.49H9a7.75 7.75 0 0 1 0-15.5h6zM9 5.75a6.25 6.25 0 1 0 0 12.5h6a6.25 6.25 0 0 0 .32-12.5H9" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5" />
    </IconBase>
  ))
);

ToggleOnRegularDuotone.displayName = 'ToggleOnRegularDuotone';

// Triple export pattern (lucide-react style)
export { ToggleOnRegularDuotone, ToggleOnRegularDuotone as ToggleOnRegularDuotoneIcon, ToggleOnRegularDuotone as SiToggleOnRegularDuotone };
export default ToggleOnRegularDuotone;
export type { ToggleOnRegularDuotoneProps };
