import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareDashedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquareDashedRegularDuotone = memo(
  forwardRef<SVGSVGElement, SquareDashedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-dashed-duotone" {...props}>
      <path d="M13.5 19.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5zM4 9.75c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75M20 9.75c.42 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75M13.5 3.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path d="M4 16.25c.42 0 .75.34.75.75 0 1.24 1 2.25 2.25 2.25a.75.75 0 0 1 0 1.5A3.75 3.75 0 0 1 3.25 17c0-.41.34-.75.75-.75M20 16.25c.42 0 .75.34.75.75A3.75 3.75 0 0 1 17 20.75a.75.75 0 0 1 0-1.5c1.24 0 2.25-1 2.25-2.25 0-.41.34-.75.75-.75M7 3.25a.75.75 0 0 1 0 1.5c-1.24 0-2.25 1-2.25 2.25a.75.75 0 0 1-1.5 0A3.75 3.75 0 0 1 7 3.25M17 3.25A3.75 3.75 0 0 1 20.75 7a.75.75 0 0 1-1.5 0c0-1.24-1-2.25-2.25-2.25a.75.75 0 0 1 0-1.5" />
    </IconBase>
  ))
);

SquareDashedRegularDuotone.displayName = 'SquareDashedRegularDuotone';

// Triple export pattern (lucide-react style)
export { SquareDashedRegularDuotone, SquareDashedRegularDuotone as SquareDashedRegularDuotoneIcon, SquareDashedRegularDuotone as SiSquareDashedRegularDuotone };
export default SquareDashedRegularDuotone;
export type { SquareDashedRegularDuotoneProps };
