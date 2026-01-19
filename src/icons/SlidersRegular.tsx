import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SlidersRegularProps = Omit<IconBaseProps, 'children'>;

const SlidersRegular = memo(
  forwardRef<SVGSVGElement, SlidersRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="sliders" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 13.25a3.75 3.75 0 0 1 3.67 3H22a.75.75 0 0 1 0 1.5h-3.33a3.75 3.75 0 0 1-7.34 0H2a.75.75 0 0 1 0-1.5h9.33c.34-1.71 1.86-3 3.67-3m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M9 3.25a3.75 3.75 0 0 1 3.67 3H22a.75.75 0 0 1 0 1.5h-9.33a3.75 3.75 0 0 1-7.34 0H2a.75.75 0 0 1 0-1.5h3.33c.34-1.71 1.86-3 3.67-3m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersRegular.displayName = 'SlidersRegular';

// Triple export pattern (lucide-react style)
export { SlidersRegular, SlidersRegular as SlidersRegularIcon, SlidersRegular as SiSlidersRegular };
export default SlidersRegular;
export type { SlidersRegularProps };
