import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SkipBackFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SkipBackFillDuotone = memo(
  forwardRef<SVGSVGElement, SkipBackFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="skip-back-fill-duotone" {...props}>
      <path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1" opacity={.4} />
        <path fill="currentColor" d="M19.14 2.84c-.45-.04-.84.13-1.12.28q-.45.24-1.03.62L7.55 9.81q-.51.32-.87.6c-.23.18-.51.43-.67.81a2 2 0 0 0 0 1.56c.16.38.44.63.67.81q.36.28.87.6L17 20.26q.59.38 1.03.62c.28.15.67.32 1.12.28a2 2 0 0 0 1.46-.8c.27-.35.34-.77.37-1.1q.04-.49.03-1.2V5.94q0-.7-.03-1.2c-.03-.32-.1-.74-.37-1.1a2 2 0 0 0-1.46-.8" />
    </IconBase>
  ))
);

SkipBackFillDuotone.displayName = 'SkipBackFillDuotone';

// Triple export pattern (lucide-react style)
export { SkipBackFillDuotone, SkipBackFillDuotone as SkipBackFillDuotoneIcon, SkipBackFillDuotone as SiSkipBackFillDuotone };
export default SkipBackFillDuotone;
export type { SkipBackFillDuotoneProps };
