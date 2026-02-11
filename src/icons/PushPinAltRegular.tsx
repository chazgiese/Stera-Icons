import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PushPinAltRegularProps = Omit<IconBaseProps, 'children'>;

const PushPinAltRegular = memo(
  forwardRef<SVGSVGElement, PushPinAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="push-pin-alt" {...props}>
      <path fillRule="evenodd" d="M12.3 2.33c.77-.77 2.01-.77 2.78 0l6.6 6.6a1.96 1.96 0 0 1-2.01 3.24l-.64-.21a.5.5 0 0 0-.5.12l-2.45 2.44a.5.5 0 0 0-.14.45l.43 2.15a2 2 0 0 1-.54 1.8l-.72.73a2 2 0 0 1-2.83 0l-3.43-3.43-3.63 3.62a.75.75 0 0 1-1.06-1.06l3.62-3.63-3.43-3.43a2 2 0 0 1 0-2.83l.72-.72a2 2 0 0 1 1.81-.54l2.15.43a.5.5 0 0 0 .45-.14l2.44-2.44a.5.5 0 0 0 .12-.51l-.2-.64c-.24-.7-.06-1.48.47-2m1.72 1.06a.46.46 0 0 0-.76.47l.2.63A2 2 0 0 1 13 6.54l-2.45 2.44a2 2 0 0 1-1.8.55L6.59 9.1a.5.5 0 0 0-.46.13l-.72.72a.5.5 0 0 0 0 .71l7.93 7.93c.2.2.51.2.7 0l.73-.72a.5.5 0 0 0 .13-.46l-.43-2.14a2 2 0 0 1 .55-1.81l2.44-2.44a2 2 0 0 1 2.05-.49l.63.21q.27.08.47-.1a.46.46 0 0 0 0-.66z" clipRule="evenodd" />
    </IconBase>
  ))
);

PushPinAltRegular.displayName = 'PushPinAltRegular';

// Triple export pattern (lucide-react style)
export { PushPinAltRegular, PushPinAltRegular as PushPinAltRegularIcon, PushPinAltRegular as SiPushPinAltRegular };
export default PushPinAltRegular;
export type { PushPinAltRegularProps };
