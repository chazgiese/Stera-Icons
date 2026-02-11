import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOffFillProps = Omit<IconBaseProps, 'children'>;

const ToggleOffFill = memo(
  forwardRef<SVGSVGElement, ToggleOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggle-off-fill" {...props}>
      <path fillRule="evenodd" d="M15 4a8 8 0 1 1 0 16H9A8 8 0 1 1 9 4zM9 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clipRule="evenodd" />
    </IconBase>
  ))
);

ToggleOffFill.displayName = 'ToggleOffFill';

// Triple export pattern (lucide-react style)
export { ToggleOffFill, ToggleOffFill as ToggleOffFillIcon, ToggleOffFill as SiToggleOffFill };
export default ToggleOffFill;
export type { ToggleOffFillProps };
