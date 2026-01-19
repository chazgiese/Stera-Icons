import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CrosshairFillProps = Omit<IconBaseProps, 'children'>;

const CrosshairFill = memo(
  forwardRef<SVGSVGElement, CrosshairFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="crosshair-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 .5c.83 0 1.5.67 1.5 1.5v1.63a8.5 8.5 0 0 1 6.87 6.87H22a1.5 1.5 0 0 1 0 3h-1.63a8.5 8.5 0 0 1-6.87 6.87V22a1.5 1.5 0 0 1-3 0v-1.63a8.5 8.5 0 0 1-6.87-6.87H2a1.5 1.5 0 0 1 0-3h1.63a8.5 8.5 0 0 1 6.87-6.87V2c0-.83.67-1.5 1.5-1.5m-5.3 13a5.5 5.5 0 0 0 3.8 3.8v-3.8zm6.8 0v3.8a5.5 5.5 0 0 0 3.8-3.8zm0-3h3.8a5.5 5.5 0 0 0-3.8-3.8zm-3-3.8a5.5 5.5 0 0 0-3.8 3.8h3.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

CrosshairFill.displayName = 'CrosshairFill';

// Triple export pattern (lucide-react style)
export { CrosshairFill, CrosshairFill as CrosshairFillIcon, CrosshairFill as SiCrosshairFill };
export type { CrosshairFillProps };
