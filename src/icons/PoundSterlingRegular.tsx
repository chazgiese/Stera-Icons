import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingRegularProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingRegular = memo(
  forwardRef<SVGSVGElement, PoundSterlingRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling" {...props}>
      <path fill="currentColor" d="M12.01 2.15c2.32-.34 4.98.71 6.63 3.46a.75.75 0 0 1-1.28.78c-1.35-2.26-3.44-3-5.12-2.75-1.7.25-2.99 1.48-2.99 3.36v4.25H14a.75.75 0 0 1 0 1.5H9.25V17c0 1.42-.87 2.51-1.7 3.25H19a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.3-1.44l.03-.01.46-.23c.3-.17.7-.41 1.1-.72.83-.65 1.46-1.46 1.46-2.35v-4.25H5a.75.75 0 0 1 0-1.5h2.75V7c0-2.73 1.95-4.5 4.26-4.85" />
    </IconBase>
  ))
);

PoundSterlingRegular.displayName = 'PoundSterlingRegular';

// Triple export pattern (lucide-react style)
export { PoundSterlingRegular, PoundSterlingRegular as PoundSterlingRegularIcon, PoundSterlingRegular as SiPoundSterlingRegular };
export default PoundSterlingRegular;
export type { PoundSterlingRegularProps };
