import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldRegularProps = Omit<IconBaseProps, 'children'>;

const ShieldRegular = memo(
  forwardRef<SVGSVGElement, ShieldRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.74 1.3a.8.8 0 0 1 .52 0l8 3c.3.1.49.39.49.7v5.58c0 4.83-2.73 9.25-7.05 11.4l-1.36.7q-.34.15-.68 0l-1.36-.7a12.8 12.8 0 0 1-7.05-11.4V5c0-.31.2-.6.49-.7zM4.75 5.52v5.06c0 4.27 2.4 8.16 6.22 10.07l1.03.51 1.03-.51c3.81-1.91 6.22-5.8 6.22-10.07V5.52L12 2.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldRegular.displayName = 'ShieldRegular';

export { ShieldRegular };
export type { ShieldRegularProps };
