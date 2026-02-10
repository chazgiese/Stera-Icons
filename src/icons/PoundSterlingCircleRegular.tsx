import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingCircleRegularProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingCircleRegular = memo(
  forwardRef<SVGSVGElement, PoundSterlingCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-circle" {...props}>
      <path fill="currentColor" d="M11.95 6.54c1.31-.2 2.8.4 3.7 1.89a.75.75 0 0 1-1.3.77c-.6-.99-1.49-1.28-2.18-1.18S11 8.6 11 9.32v1.72h2a.75.75 0 0 1 0 1.5h-2v1.73c0 .48-.17.9-.39 1.23h4.89a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.3-1.44h.01l.2-.1q.23-.12.5-.33.6-.46.59-.86v-1.73h-1a.75.75 0 0 1 0-1.5h1V9.3a2.77 2.77 0 0 1 2.45-2.77" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

PoundSterlingCircleRegular.displayName = 'PoundSterlingCircleRegular';

// Triple export pattern (lucide-react style)
export { PoundSterlingCircleRegular, PoundSterlingCircleRegular as PoundSterlingCircleRegularIcon, PoundSterlingCircleRegular as SiPoundSterlingCircleRegular };
export default PoundSterlingCircleRegular;
export type { PoundSterlingCircleRegularProps };
