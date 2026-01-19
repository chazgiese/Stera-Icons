import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EyeOffFillProps = Omit<IconBaseProps, 'children'>;

const EyeOffFill = memo(
  forwardRef<SVGSVGElement, EyeOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="eye-off-fill" {...props}>
      <path fill="currentColor" d="M3.3 3.3a1 1 0 0 1 1.4 0l16 16a1 1 0 0 1-1.4 1.4l-16-16a1 1 0 0 1 0-1.4M15.8 19.34q-1.8.65-3.8.66c-4.92 0-9.1-3.17-10.93-7.62a1 1 0 0 1 0-.76c.66-1.6 1.62-3.03 2.8-4.21zM12 4c4.92 0 9.1 3.17 10.93 7.62a1 1 0 0 1 0 .76 13 13 0 0 1-2.8 4.21L8.2 4.66Q10 4.01 12 4" />
    </IconBase>
  ))
);

EyeOffFill.displayName = 'EyeOffFill';

// Triple export pattern (lucide-react style)
export { EyeOffFill, EyeOffFill as EyeOffFillIcon, EyeOffFill as SiEyeOffFill };
export default EyeOffFill;
export type { EyeOffFillProps };
