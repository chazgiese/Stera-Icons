import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderFillDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.66 4.66q.5-.5 1.04-.9L20.24 18.3q-.4.54-.9 1.04t-1.04.9L3.76 5.7q.4-.54.9-1.04M16.79 21.2q-1.39.73-2.9 1L1.8 10.1q.29-1.5 1-2.89zM7.21 2.8q1.39-.73 2.9-1L22.2 13.9q-.27 1.5-1 2.89zM11.58 22.36c-2.51-.1-5-1.1-6.92-3.02s-2.92-4.4-3.02-6.92zM12.42 1.64c2.51.1 5 1.1 6.92 3.02s2.92 4.4 3.02 6.92z" opacity={0.4} />
        <path d="M18.3 20.24q-.73.56-1.51.97l-14-14q.42-.79.97-1.5zM5.7 3.76q.73-.56 1.51-.97l14 14q-.42.79-.97 1.5zM13.9 22.2q-1.16.21-2.32.16l-9.94-9.94q-.05-1.16.16-2.31zM10.1 1.8q1.16-.22 2.32-.16l9.94 9.94q.05 1.16-.16 2.31z" />
    </IconBase>
  ))
);

CirclePlaceholderFillDuotone.displayName = 'CirclePlaceholderFillDuotone';

// Triple export pattern
export { CirclePlaceholderFillDuotone, CirclePlaceholderFillDuotone as CirclePlaceholderFillDuotoneIcon, CirclePlaceholderFillDuotone as SiCirclePlaceholderFillDuotone };
export default CirclePlaceholderFillDuotone;
export type { CirclePlaceholderFillDuotoneProps };
