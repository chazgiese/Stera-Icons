import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderFillProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderFill = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-placeholder-fill" {...props}>
      <path d="M11.22 21.97a9.96 9.96 0 0 1-9.19-9.2zM16.44 20.96q-1.23.6-2.54.86L2.18 10.1q.26-1.32.86-2.54zM19.87 18.17a10 10 0 0 1-1.7 1.7L4.13 5.83a10 10 0 0 1 1.7-1.7zM21.82 13.9a10 10 0 0 1-.86 2.54L7.56 3.04q1.22-.6 2.54-.86zM12.78 2.03a9.96 9.96 0 0 1 9.19 9.19z" />
    </IconBase>
  ))
);

CirclePlaceholderFill.displayName = 'CirclePlaceholderFill';

// Triple export pattern (lucide-react style)
export { CirclePlaceholderFill, CirclePlaceholderFill as CirclePlaceholderFillIcon, CirclePlaceholderFill as SiCirclePlaceholderFill };
export default CirclePlaceholderFill;
export type { CirclePlaceholderFillProps };
