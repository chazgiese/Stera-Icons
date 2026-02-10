import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderRegularDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-placeholder-duotone" {...props}>
      <path d="M13.53 20.1a8 8 0 0 1-2 .14l-7.77-7.78a8 8 0 0 1 .13-2zM17.04 18.53q-.61.48-1.3.82L4.64 8.25q.36-.67.83-1.3zM19.35 15.74q-.34.7-.82 1.3L6.96 5.47q.6-.48 1.3-.82zM10.47 3.9a8 8 0 0 1 1.99-.14l7.78 7.78q.05 1-.13 2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.1 5.1a9.75 9.75 0 1 1 13.8 13.8A9.75 9.75 0 0 1 5.1 5.1m12.73 1.07A8.25 8.25 0 1 0 6.17 17.84 8.25 8.25 0 0 0 17.83 6.17" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderRegularDuotone.displayName = 'CirclePlaceholderRegularDuotone';

// Triple export pattern (lucide-react style)
export { CirclePlaceholderRegularDuotone, CirclePlaceholderRegularDuotone as CirclePlaceholderRegularDuotoneIcon, CirclePlaceholderRegularDuotone as SiCirclePlaceholderRegularDuotone };
export default CirclePlaceholderRegularDuotone;
export type { CirclePlaceholderRegularDuotoneProps };
