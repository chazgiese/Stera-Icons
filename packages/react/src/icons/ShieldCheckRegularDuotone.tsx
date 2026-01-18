import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldCheckRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShieldCheckRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShieldCheckRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.74 1.3a.8.8 0 0 1 .52 0l8 3c.3.1.49.39.49.7v5.58c0 4.83-2.73 9.25-7.05 11.4l-1.36.7q-.34.15-.68 0l-1.36-.7a12.8 12.8 0 0 1-7.05-11.4V5c0-.31.2-.6.49-.7zM4.75 5.52v5.06c0 4.27 2.4 8.16 6.22 10.07l1.03.51 1.03-.51c3.81-1.91 6.22-5.8 6.22-10.07V5.52L12 2.8z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.35 8.97a.75.75 0 0 1 1.06 1.06l-4.85 4.85-.32.3q-.15.15-.48.26-.42.12-.83-.06c-.2-.08-.34-.22-.44-.33l-.27-.34-1.7-2.26a.75.75 0 0 1 1.2-.9l1.7 2.26.04.05q0-.03.04-.04z" />
    </IconBase>
  ))
);

ShieldCheckRegularDuotone.displayName = 'ShieldCheckRegularDuotone';

export { ShieldCheckRegularDuotone };
export type { ShieldCheckRegularDuotoneProps };
