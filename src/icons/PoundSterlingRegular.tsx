import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingRegularProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingRegular = memo(
  forwardRef<SVGSVGElement, PoundSterlingRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling" {...props}>
      <path d="M12.02 2.8a6.8 6.8 0 0 1 6.61 3.25.75.75 0 1 1-1.26.81 5.3 5.3 0 0 0-5.14-2.57c-1.73.25-2.98 1.4-2.98 3.1v4.36H14a.75.75 0 0 1 0 1.5H9.25v3.5c0 1.3-.8 2.31-1.6 3H19a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.28-1.45h.03l.46-.22c.3-.16.7-.39 1.1-.68.83-.62 1.44-1.36 1.44-2.14v-3.51H5a.75.75 0 0 1 0-1.5h2.75V7.39c0-2.62 2-4.26 4.27-4.58" />
    </IconBase>
  ))
);

PoundSterlingRegular.displayName = 'PoundSterlingRegular';

// Triple export pattern (lucide-react style)
export { PoundSterlingRegular, PoundSterlingRegular as PoundSterlingRegularIcon, PoundSterlingRegular as SiPoundSterlingRegular };
export default PoundSterlingRegular;
export type { PoundSterlingRegularProps };
