import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToggleOffBoldProps = Omit<IconBaseProps, 'children'>;

const ToggleOffBold = memo(
  forwardRef<SVGSVGElement, ToggleOffBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggle-off-bold" {...props}>
      <path fill="currentColor" d="M9 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
        <path fill="currentColor" fillRule="evenodd" d="M15 4a8 8 0 1 1 0 16H9A8 8 0 1 1 9 4zM9 6a6 6 0 1 0 0 12h6a6 6 0 0 0 0-12z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToggleOffBold.displayName = 'ToggleOffBold';

// Triple export pattern (lucide-react style)
export { ToggleOffBold, ToggleOffBold as ToggleOffBoldIcon, ToggleOffBold as SiToggleOffBold };
export default ToggleOffBold;
export type { ToggleOffBoldProps };
