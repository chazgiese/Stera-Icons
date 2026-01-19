import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EyeClosedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeClosedFillDuotone = memo(
  forwardRef<SVGSVGElement, EyeClosedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="eye-closed-fill-duotone" {...props}>
      <path d="M7.58 14.87q1.39.54 2.9.73l-.52 1.82a1.5 1.5 0 0 1-2.88-.84zM16.92 16.58a1.5 1.5 0 0 1-2.88.84l-.53-1.82a12 12 0 0 0 2.91-.73zM2.84 11.41q.95 1.18 2.19 2.07l-1.51 1.4a1.5 1.5 0 0 1-2.04-2.2zM22.52 12.68a1.5 1.5 0 0 1-2.04 2.2l-1.5-1.4q1.23-.9 2.18-2.07z" opacity={0.4} />
        <path fill="currentColor" d="M19.63 8.3a1.5 1.5 0 0 1 2.65 1.4c-1.88 3.59-5.8 6-10.28 6s-8.4-2.41-10.29-6a1.5 1.5 0 0 1 2.66-1.4A8.6 8.6 0 0 0 12 12.7c3.4 0 6.28-1.83 7.63-4.4" />
    </IconBase>
  ))
);

EyeClosedFillDuotone.displayName = 'EyeClosedFillDuotone';

// Triple export pattern (lucide-react style)
export { EyeClosedFillDuotone, EyeClosedFillDuotone as EyeClosedFillDuotoneIcon, EyeClosedFillDuotone as SiEyeClosedFillDuotone };
export default EyeClosedFillDuotone;
export type { EyeClosedFillDuotoneProps };
