import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToggleOnBoldProps = Omit<IconBaseProps, 'children'>;

const ToggleOnBold = memo(
  forwardRef<SVGSVGElement, ToggleOnBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggle-on-bold" {...props}>
      <path fill="currentColor" d="M15 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
        <path fill="currentColor" fillRule="evenodd" d="M15 4a8 8 0 1 1 0 16H9A8 8 0 1 1 9 4zM9 6a6 6 0 1 0 0 12h6a6 6 0 0 0 0-12z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToggleOnBold.displayName = 'ToggleOnBold';

// Triple export pattern (lucide-react style)
export { ToggleOnBold, ToggleOnBold as ToggleOnBoldIcon, ToggleOnBold as SiToggleOnBold };
export type { ToggleOnBoldProps };
