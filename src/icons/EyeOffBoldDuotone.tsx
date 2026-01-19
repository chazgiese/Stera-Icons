import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EyeOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, EyeOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="eye-off-bold-duotone" {...props}>
      <path d="M3.5 7.8a1 1 0 0 1 1.47 1.35Q3.82 10.4 3.09 12A9.9 9.9 0 0 0 12 18q1.14 0 2.22-.27a1 1 0 1 1 .48 1.94Q13.4 20 12 20c-4.92 0-9.1-3.17-10.93-7.62a1 1 0 0 1 0-.76A13 13 0 0 1 3.5 7.8M12 4c4.92 0 9.1 3.17 10.93 7.62a1 1 0 0 1 0 .76 13 13 0 0 1-2.43 3.82 1 1 0 1 1-1.47-1.35q1.15-1.26 1.88-2.85A9.9 9.9 0 0 0 12 6q-1.14 0-2.22.27a1 1 0 1 1-.48-1.94Q10.6 4 12 4" opacity={0.4} />
        <path fill="currentColor" d="M3.3 3.3a1 1 0 0 1 1.4 0l16 16a1 1 0 0 1-1.4 1.4l-16-16a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

EyeOffBoldDuotone.displayName = 'EyeOffBoldDuotone';

// Triple export pattern (lucide-react style)
export { EyeOffBoldDuotone, EyeOffBoldDuotone as EyeOffBoldDuotoneIcon, EyeOffBoldDuotone as SiEyeOffBoldDuotone };
export default EyeOffBoldDuotone;
export type { EyeOffBoldDuotoneProps };
