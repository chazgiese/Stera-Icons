import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToggleOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, ToggleOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggle-off-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 4.25a7.75 7.75 0 0 1 0 15.5H9a7.75 7.75 0 0 1-.4-15.49l.4-.01zm-6 1.5h-.32A6.25 6.25 0 0 0 9 18.26h6a6.25 6.25 0 1 0 0-12.5z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5" />
    </IconBase>
  ))
);

ToggleOffRegularDuotone.displayName = 'ToggleOffRegularDuotone';

// Triple export pattern (lucide-react style)
export { ToggleOffRegularDuotone, ToggleOffRegularDuotone as ToggleOffRegularDuotoneIcon, ToggleOffRegularDuotone as SiToggleOffRegularDuotone };
export default ToggleOffRegularDuotone;
export type { ToggleOffRegularDuotoneProps };
