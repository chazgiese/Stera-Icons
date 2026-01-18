import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RectangleDashedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RectangleDashedRegularDuotone = memo(
  forwardRef<SVGSVGElement, RectangleDashedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 19.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM2 10.25c.42 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75M22 10.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75M15 3.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M2 15.75c.41 0 .75.34.75.75v.04c0 1.5 1.21 2.71 2.71 2.71h.04a.75.75 0 0 1 0 1.5h-.04a4.2 4.2 0 0 1-4.21-4.21v-.04c0-.41.34-.75.75-.75M22 15.75c.41 0 .75.34.75.75v.04a4.2 4.2 0 0 1-4.21 4.21h-.04a.75.75 0 0 1 0-1.5h.04c1.5 0 2.71-1.21 2.71-2.71v-.04c0-.41.34-.75.75-.75M5.5 3.25a.75.75 0 0 1 0 1.5h-.04a2.7 2.7 0 0 0-2.71 2.71v.04a.75.75 0 0 1-1.5 0v-.04a4.2 4.2 0 0 1 4.21-4.21zM18.54 3.25a4.2 4.2 0 0 1 4.21 4.21v.04a.75.75 0 0 1-1.5 0v-.04c0-1.5-1.21-2.71-2.71-2.71h-.04a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

RectangleDashedRegularDuotone.displayName = 'RectangleDashedRegularDuotone';

// Triple export pattern (lucide-react style)
export { RectangleDashedRegularDuotone, RectangleDashedRegularDuotone as RectangleDashedRegularDuotoneIcon, RectangleDashedRegularDuotone as SiRectangleDashedRegularDuotone };
export type { RectangleDashedRegularDuotoneProps };
