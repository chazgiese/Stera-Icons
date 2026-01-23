import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareDashedRegularProps = Omit<IconBaseProps, 'children'>;

const SquareDashedRegular = memo(
  forwardRef<SVGSVGElement, SquareDashedRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-dashed" {...props}>
      <path fill="currentColor" d="M3 16.75c.41 0 .75.34.75.75v.04c0 1.5 1.21 2.71 2.71 2.71h.04a.75.75 0 0 1 0 1.5h-.04a4.2 4.2 0 0 1-4.21-4.21v-.04c0-.41.34-.75.75-.75M14 20.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zM21 16.75c.41 0 .75.34.75.75v.04a4.2 4.2 0 0 1-4.21 4.21h-.04a.75.75 0 0 1 0-1.5h.04c1.5 0 2.71-1.21 2.71-2.71v-.04c0-.41.34-.75.75-.75M3 9.25c.42 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75M21 9.25c.42 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75M6.5 2.25a.75.75 0 0 1 0 1.5h-.04a2.7 2.7 0 0 0-2.71 2.71v.04a.75.75 0 0 1-1.5 0v-.04a4.2 4.2 0 0 1 4.21-4.21zM17.54 2.25a4.2 4.2 0 0 1 4.21 4.21v.04a.75.75 0 0 1-1.5 0v-.04c0-1.5-1.21-2.71-2.71-2.71h-.04a.75.75 0 0 1 0-1.5zM14 2.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

SquareDashedRegular.displayName = 'SquareDashedRegular';

// Triple export pattern (lucide-react style)
export { SquareDashedRegular, SquareDashedRegular as SquareDashedRegularIcon, SquareDashedRegular as SiSquareDashedRegular };
export default SquareDashedRegular;
export type { SquareDashedRegularProps };
