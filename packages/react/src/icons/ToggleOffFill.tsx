import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToggleOffFillProps = Omit<IconBaseProps, 'children'>;

const ToggleOffFill = memo(
  forwardRef<SVGSVGElement, ToggleOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 4a8 8 0 1 1 0 16H9A8 8 0 1 1 9 4zM9 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8" clipRule="evenodd" />
    </IconBase>
  ))
);

ToggleOffFill.displayName = 'ToggleOffFill';

// Triple export pattern (lucide-react style)
export { ToggleOffFill, ToggleOffFill as ToggleOffFillIcon, ToggleOffFill as SiToggleOffFill };
export type { ToggleOffFillProps };
