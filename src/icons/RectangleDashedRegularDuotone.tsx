import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleDashedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RectangleDashedRegularDuotone = memo(
  forwardRef<SVGSVGElement, RectangleDashedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rectangle-dashed-duotone" {...props}>
      <path d="M14.5 18.75a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5zM3 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75M21 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75M14.5 3.75a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M3 15.25c.41 0 .75.34.75.75a2.75 2.75 0 0 0 2.75 2.75.75.75 0 0 1 0 1.5A4.25 4.25 0 0 1 2.25 16c0-.41.34-.75.75-.75M21 15.25c.41 0 .75.34.75.75 0 2.35-1.9 4.25-4.25 4.25a.75.75 0 0 1 0-1.5A2.75 2.75 0 0 0 20.25 16c0-.41.34-.75.75-.75M6.5 3.75a.75.75 0 0 1 0 1.5A2.75 2.75 0 0 0 3.75 8a.75.75 0 0 1-1.5 0c0-2.35 1.9-4.25 4.25-4.25M17.5 3.75c2.35 0 4.25 1.9 4.25 4.25a.75.75 0 0 1-1.5 0 2.75 2.75 0 0 0-2.75-2.75.75.75 0 0 1 0-1.5" />
    </IconBase>
  ))
);

RectangleDashedRegularDuotone.displayName = 'RectangleDashedRegularDuotone';

// Triple export pattern (lucide-react style)
export { RectangleDashedRegularDuotone, RectangleDashedRegularDuotone as RectangleDashedRegularDuotoneIcon, RectangleDashedRegularDuotone as SiRectangleDashedRegularDuotone };
export default RectangleDashedRegularDuotone;
export type { RectangleDashedRegularDuotoneProps };
