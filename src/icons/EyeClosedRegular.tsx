import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeClosedRegularProps = Omit<IconBaseProps, 'children'>;

const EyeClosedRegular = memo(
  forwardRef<SVGSVGElement, EyeClosedRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="eye-closed" {...props}>
      <path fill="currentColor" d="M20.3 8.65a.75.75 0 0 1 1.32.7q-.6 1.16-1.5 2.12L22 13.23a.75.75 0 0 1-1.02 1.1l-1.97-1.83a11 11 0 0 1-3.51 1.9l.69 2.4a.75.75 0 0 1-1.44.4l-.71-2.44a12 12 0 0 1-4.1 0l-.7 2.45a.75.75 0 0 1-1.45-.42l.7-2.4a11 11 0 0 1-3.52-1.89l-1.97 1.83a.75.75 0 1 1-1.02-1.1l1.9-1.76a10 10 0 0 1-1.51-2.12.75.75 0 0 1 1.33-.7 9 9 0 0 0 5.88 4.5l.04.01h.01a10 10 0 0 0 4.72 0h.05a9 9 0 0 0 5.88-4.5" />
    </IconBase>
  ))
);

EyeClosedRegular.displayName = 'EyeClosedRegular';

// Triple export pattern (lucide-react style)
export { EyeClosedRegular, EyeClosedRegular as EyeClosedRegularIcon, EyeClosedRegular as SiEyeClosedRegular };
export default EyeClosedRegular;
export type { EyeClosedRegularProps };
