import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldHalfRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldHalfRegular = memo(
  forwardRef<SVGSVGElement, ShieldHalfRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-half" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="m12 1.25.12.01h.03l.04.02q.04 0 .07.02l8 3c.3.1.49.39.49.7v5.58c0 4.83-2.73 9.25-7.05 11.4l-1.36.7h-.03l-.2.06h-.22l-.16-.04-.04-.02h-.03l-1.36-.7a12.8 12.8 0 0 1-7.05-11.4V5c0-.31.2-.6.49-.7l8-3 .07-.02.05-.02h.02zM4.75 5.52v5.06c0 4.26 2.4 8.16 6.22 10.07l.28.14V3.09zm8 15.27.28-.14c3.81-1.91 6.22-5.8 6.22-10.07V5.52l-6.5-2.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldHalfRegular.displayName = 'ShieldHalfRegular';

// Triple export pattern (lucide-react style)
export { ShieldHalfRegular, ShieldHalfRegular as ShieldHalfRegularIcon, ShieldHalfRegular as SiShieldHalfRegular };
export type { ShieldHalfRegularProps };
