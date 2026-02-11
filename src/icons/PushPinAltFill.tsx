import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PushPinAltFillProps = Omit<IconBaseProps, 'children'>;

const PushPinAltFill = memo(
  forwardRef<SVGSVGElement, PushPinAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="push-pin-alt-fill" {...props}>
      <path d="M12.3 2.33c.77-.77 2.01-.77 2.78 0l6.6 6.6a1.96 1.96 0 0 1-2.01 3.24l-.64-.21a.5.5 0 0 0-.5.12l-2.45 2.44a.5.5 0 0 0-.14.45l.43 2.15a2 2 0 0 1-.54 1.8l-.72.73a2 2 0 0 1-2.83 0l-3.26-3.26-3.62 3.63a1 1 0 0 1-1.41-1.42l3.62-3.62-3.26-3.26a2 2 0 0 1 0-2.83l.72-.72a2 2 0 0 1 1.81-.54l2.15.43a.5.5 0 0 0 .45-.14l2.44-2.44a.5.5 0 0 0 .12-.51l-.2-.64c-.24-.7-.06-1.48.47-2" />
    </IconBase>
  ))
);

PushPinAltFill.displayName = 'PushPinAltFill';

// Triple export pattern (lucide-react style)
export { PushPinAltFill, PushPinAltFill as PushPinAltFillIcon, PushPinAltFill as SiPushPinAltFill };
export default PushPinAltFill;
export type { PushPinAltFillProps };
