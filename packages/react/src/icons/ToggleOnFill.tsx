import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToggleOnFillProps = Omit<IconBaseProps, 'children'>;

const ToggleOnFill = memo(
  forwardRef<SVGSVGElement, ToggleOnFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 4a8 8 0 1 1 0 16H9A8 8 0 1 1 9 4zm0 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clipRule="evenodd" />
    </IconBase>
  ))
);

ToggleOnFill.displayName = 'ToggleOnFill';

// Triple export pattern (lucide-react style)
export { ToggleOnFill, ToggleOnFill as ToggleOnFillIcon, ToggleOnFill as SiToggleOnFill };
export type { ToggleOnFillProps };
