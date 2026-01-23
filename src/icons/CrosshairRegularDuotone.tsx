import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrosshairRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CrosshairRegularDuotone = memo(
  forwardRef<SVGSVGElement, CrosshairRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="crosshair-duotone" {...props}>
      <path d="M5.8 12.75a6.25 6.25 0 0 0 5.45 5.45v1.51a7.75 7.75 0 0 1-6.96-6.96zM19.71 12.75a7.75 7.75 0 0 1-6.96 6.96v-1.5a6.25 6.25 0 0 0 5.45-5.46zM12.75 4.29a7.75 7.75 0 0 1 6.96 6.96h-1.5a6.25 6.25 0 0 0-5.46-5.45zM11.25 5.8a6.25 6.25 0 0 0-5.45 5.45H4.29a7.75 7.75 0 0 1 6.96-6.96z" opacity={0.4} />
        <path fill="currentColor" d="M12 1.25c.41 0 .75.34.75.75v9.25H22a.75.75 0 0 1 0 1.5h-9.25V22a.75.75 0 0 1-1.5 0v-9.25H2a.75.75 0 0 1 0-1.5h9.25V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CrosshairRegularDuotone.displayName = 'CrosshairRegularDuotone';

// Triple export pattern (lucide-react style)
export { CrosshairRegularDuotone, CrosshairRegularDuotone as CrosshairRegularDuotoneIcon, CrosshairRegularDuotone as SiCrosshairRegularDuotone };
export default CrosshairRegularDuotone;
export type { CrosshairRegularDuotoneProps };
