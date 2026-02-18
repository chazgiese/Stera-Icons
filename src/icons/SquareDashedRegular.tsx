import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquareDashedRegularProps = Omit<IconBaseProps, 'children'>;

const SquareDashedRegular = memo(
  forwardRef<SVGSVGElement, SquareDashedRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-dashed" {...props}>
      <path d="M3.5 16.56c.41 0 .75.34.75.75v.19c0 1.24 1 2.25 2.25 2.25h.19a.75.75 0 0 1 0 1.5H6.5a3.75 3.75 0 0 1-3.75-3.75v-.19c0-.41.34-.75.75-.75M13.75 19.75a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5zM20.5 16.56c.41 0 .75.34.75.75v.19a3.75 3.75 0 0 1-3.75 3.75h-.19a.75.75 0 0 1 0-1.5h.19c1.24 0 2.25-1 2.25-2.25v-.19c0-.41.34-.75.75-.75M3.5 9.5c.41 0 .75.34.75.75v3.5a.75.75 0 0 1-1.5 0v-3.5c0-.41.34-.75.75-.75M20.5 9.5c.41 0 .75.34.75.75v3.5a.75.75 0 0 1-1.5 0v-3.5c0-.41.34-.75.75-.75M6.69 2.75a.75.75 0 0 1 0 1.5H6.5c-1.24 0-2.25 1-2.25 2.25v.19a.75.75 0 0 1-1.5 0V6.5A3.75 3.75 0 0 1 6.5 2.75zM17.5 2.75a3.75 3.75 0 0 1 3.75 3.75v.19a.75.75 0 0 1-1.5 0V6.5c0-1.24-1-2.25-2.25-2.25h-.19a.75.75 0 0 1 0-1.5zM13.75 2.75a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

SquareDashedRegular.displayName = 'SquareDashedRegular';

// Triple export pattern (lucide-react style)
export { SquareDashedRegular, SquareDashedRegular as SquareDashedRegularIcon, SquareDashedRegular as SiSquareDashedRegular };
export default SquareDashedRegular;
export type { SquareDashedRegularProps };
