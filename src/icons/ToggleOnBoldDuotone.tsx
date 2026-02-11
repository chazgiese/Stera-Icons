import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOnBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToggleOnBoldDuotone = memo(
  forwardRef<SVGSVGElement, ToggleOnBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggle-on-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M15 4a8 8 0 1 1 0 16H9A8 8 0 1 1 9 4zM9 6a6 6 0 1 0 0 12h6a6 6 0 0 0 0-12z" clipRule="evenodd" opacity={.4} />
        <path d="M15 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

ToggleOnBoldDuotone.displayName = 'ToggleOnBoldDuotone';

// Triple export pattern (lucide-react style)
export { ToggleOnBoldDuotone, ToggleOnBoldDuotone as ToggleOnBoldDuotoneIcon, ToggleOnBoldDuotone as SiToggleOnBoldDuotone };
export default ToggleOnBoldDuotone;
export type { ToggleOnBoldDuotoneProps };
