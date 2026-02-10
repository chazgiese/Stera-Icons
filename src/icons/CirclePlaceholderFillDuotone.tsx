import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderFillDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-placeholder-fill-duotone" {...props}>
      <path d="M4.93 4.93q.43-.43.9-.8l14.04 14.04a10 10 0 0 1-1.7 1.7L4.13 5.83q.37-.46.8-.9M16.44 20.96q-1.22.6-2.54.86L2.18 10.1q.26-1.32.86-2.54zM7.56 3.04q1.23-.61 2.54-.86L21.82 13.9a10 10 0 0 1-.86 2.54zM11.22 21.97a9.96 9.96 0 0 1-9.19-9.19zM12.78 2.03a9.96 9.96 0 0 1 9.19 9.19z" opacity={0.4} />
        <path fill="currentColor" d="M18.17 19.87q-.83.65-1.73 1.1L3.04 7.56q.44-.92 1.1-1.74zM5.83 4.13q.83-.65 1.73-1.1l13.4 13.4q-.45.92-1.1 1.74zM13.9 21.82q-1.33.26-2.68.15l-9.19-9.19q-.1-1.36.15-2.68zM10.1 2.18q1.34-.25 2.68-.15l9.19 9.19q.1 1.36-.15 2.68z" />
    </IconBase>
  ))
);

CirclePlaceholderFillDuotone.displayName = 'CirclePlaceholderFillDuotone';

// Triple export pattern (lucide-react style)
export { CirclePlaceholderFillDuotone, CirclePlaceholderFillDuotone as CirclePlaceholderFillDuotoneIcon, CirclePlaceholderFillDuotone as SiCirclePlaceholderFillDuotone };
export default CirclePlaceholderFillDuotone;
export type { CirclePlaceholderFillDuotoneProps };
