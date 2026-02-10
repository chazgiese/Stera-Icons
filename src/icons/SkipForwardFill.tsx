import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SkipForwardFillProps = Omit<IconBaseProps, 'children'>;

const SkipForwardFill = memo(
  forwardRef<SVGSVGElement, SkipForwardFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="skip-forward-fill" {...props}>
      <path fill="currentColor" d="M5.55 3.87c.38.02.71.17.96.3q.45.26 1.03.66l7.02 4.67q.61.4 1.03.73c.24.19.5.43.67.76l.07.15.07.2c.15.5.13 1.04-.07 1.52-.17.4-.47.7-.74.91q-.42.33-1.03.73l-7.02 4.67q-.58.4-1.03.65c-.28.16-.67.34-1.13.3a2 2 0 0 1-1.47-.78 2 2 0 0 1-.38-1.11q-.04-.51-.03-1.22V7q0-.7.03-1.22c.03-.32.1-.74.38-1.1a2 2 0 0 1 1.47-.8zM19.5 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SkipForwardFill.displayName = 'SkipForwardFill';

// Triple export pattern (lucide-react style)
export { SkipForwardFill, SkipForwardFill as SkipForwardFillIcon, SkipForwardFill as SiSkipForwardFill };
export default SkipForwardFill;
export type { SkipForwardFillProps };
