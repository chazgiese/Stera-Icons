import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderFillProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderFill = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.58 22.36c-2.51-.1-5-1.1-6.92-3.02s-2.92-4.4-3.03-6.92zM16.79 21.2q-1.39.73-2.9 1L1.8 10.1q.27-1.5 1-2.89zM20.24 18.3q-.4.53-.9 1.04-.5.5-1.04.9L3.76 5.7q.4-.54.9-1.04t1.04-.9zM22.2 13.9q-.27 1.5-1 2.89l-13.99-14q1.39-.71 2.9-.99zM12.42 1.63c2.51.1 5 1.11 6.92 3.03s2.92 4.4 3.02 6.92z" />
    </IconBase>
  ))
);

CirclePlaceholderFill.displayName = 'CirclePlaceholderFill';

// Triple export pattern
export { CirclePlaceholderFill, CirclePlaceholderFill as CirclePlaceholderFillIcon, CirclePlaceholderFill as SiCirclePlaceholderFill };
export default CirclePlaceholderFill;
export type { CirclePlaceholderFillProps };
