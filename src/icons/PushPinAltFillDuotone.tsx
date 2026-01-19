import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PushPinAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PushPinAltFillDuotone = memo(
  forwardRef<SVGSVGElement, PushPinAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="push-pin-alt-fill-duotone" {...props}>
      <path fill="currentColor" d="M12.3 2.33c.77-.77 2.01-.77 2.78 0l6.6 6.6a1.96 1.96 0 0 1-2.01 3.24l-.64-.21a.5.5 0 0 0-.5.12l-2.45 2.44a.5.5 0 0 0-.14.45l.43 2.15a2 2 0 0 1-.54 1.8l-.72.73a2 2 0 0 1-2.83 0l-7.93-7.93a2 2 0 0 1 0-2.83l.72-.72a2 2 0 0 1 1.81-.54l2.15.43a.5.5 0 0 0 .45-.14l2.44-2.44a.5.5 0 0 0 .12-.51l-.2-.64c-.24-.7-.06-1.48.47-2" opacity={.4} />
        <path fill="currentColor" d="M9.02 16.4 5.4 20.01a1 1 0 0 1-1.41-1.42l3.62-3.62z" />
    </IconBase>
  ))
);

PushPinAltFillDuotone.displayName = 'PushPinAltFillDuotone';

// Triple export pattern (lucide-react style)
export { PushPinAltFillDuotone, PushPinAltFillDuotone as PushPinAltFillDuotoneIcon, PushPinAltFillDuotone as SiPushPinAltFillDuotone };
export type { PushPinAltFillDuotoneProps };
