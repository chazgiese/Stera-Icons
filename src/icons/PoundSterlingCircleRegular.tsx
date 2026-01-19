import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PoundSterlingCircleRegularProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingCircleRegular = memo(
  forwardRef<SVGSVGElement, PoundSterlingCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-circle" {...props}>
      <path fill="currentColor" d="M11.96 6.04c1.44-.2 3.1.43 4.1 2.05a.75.75 0 0 1-1.27.8c-.7-1.13-1.77-1.49-2.61-1.37-.85.13-1.43.7-1.43 1.52v2h2.4a.75.75 0 0 1 0 1.5h-2.4v2a2.4 2.4 0 0 1-.52 1.46H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.29-1.44h.01l.05-.03a4 4 0 0 0 .78-.46q.7-.53.7-1.02v-2H8a.75.75 0 0 1 0-1.5h1.25V9.03c0-1.72 1.28-2.8 2.71-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

PoundSterlingCircleRegular.displayName = 'PoundSterlingCircleRegular';

// Triple export pattern (lucide-react style)
export { PoundSterlingCircleRegular, PoundSterlingCircleRegular as PoundSterlingCircleRegularIcon, PoundSterlingCircleRegular as SiPoundSterlingCircleRegular };
export type { PoundSterlingCircleRegularProps };
