import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TogglesFillProps = Omit<IconBaseProps, 'children'>;

const TogglesFill = memo(
  forwardRef<SVGSVGElement, TogglesFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggles-fill" {...props}>
      <path fill="currentColor" d="M8 15.75a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M16 12.75a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10zm-8 2a3 3 0 1 0 0 6h8a3 3 0 1 0 0-6zM16 1.25a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

TogglesFill.displayName = 'TogglesFill';

// Triple export pattern (lucide-react style)
export { TogglesFill, TogglesFill as TogglesFillIcon, TogglesFill as SiTogglesFill };
export default TogglesFill;
export type { TogglesFillProps };
