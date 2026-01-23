import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PushPinBoldProps = Omit<IconBaseProps, 'children'>;

const PushPinBold = memo(
  forwardRef<SVGSVGElement, PushPinBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="push-pin-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.76 2a2.24 2.24 0 0 1 1 4.24l-.62.3a.3.3 0 0 0-.14.23v3.56q0 .13.11.2L19 11.8c.62.41 1 1.12 1 1.87v1.08c0 1.24-1 2.25-2.25 2.25H13v5a1 1 0 1 1-2 0v-5H6.25C5.01 17 4 16 4 14.75v-1.08c0-.75.38-1.46 1-1.87l1.89-1.26a.3.3 0 0 0 .11-.2V6.76q0-.15-.14-.22l-.62-.31a2.24 2.24 0 0 1 1-4.24zM7.24 4a.24.24 0 0 0-.1.45l.62.31A2.3 2.3 0 0 1 9 6.77v3.56c0 .75-.38 1.46-1 1.87L6.1 13.46a.3.3 0 0 0-.11.2v1.09c0 .14.11.25.25.25h11.5q.23-.02.25-.25v-1.08a.3.3 0 0 0-.11-.2L16 12.2c-.62-.41-1-1.12-1-1.87V6.77c0-.85.48-1.63 1.24-2.01l.63-.31a.24.24 0 0 0-.1-.45z" clipRule="evenodd" />
    </IconBase>
  ))
);

PushPinBold.displayName = 'PushPinBold';

// Triple export pattern (lucide-react style)
export { PushPinBold, PushPinBold as PushPinBoldIcon, PushPinBold as SiPushPinBold };
export default PushPinBold;
export type { PushPinBoldProps };
