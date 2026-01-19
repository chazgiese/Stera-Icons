import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PoundSterlingRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingRegularDuotone = memo(
  forwardRef<SVGSVGElement, PoundSterlingRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-duotone" {...props}>
      <path d="M7.75 12.75H5a.75.75 0 0 1 0-1.5h2.75zM14 11.25a.75.75 0 0 1 0 1.5H9.25v-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M12.01 2.15c2.32-.34 4.98.71 6.63 3.46a.75.75 0 0 1-1.28.78c-1.35-2.26-3.44-3-5.12-2.75-1.7.25-2.99 1.48-2.99 3.36v10c0 1.42-.87 2.51-1.7 3.25H19a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.3-1.44l.03-.01.46-.23c.3-.17.7-.41 1.1-.72.83-.65 1.46-1.46 1.46-2.35V7c0-2.73 1.95-4.5 4.26-4.85" />
    </IconBase>
  ))
);

PoundSterlingRegularDuotone.displayName = 'PoundSterlingRegularDuotone';

// Triple export pattern (lucide-react style)
export { PoundSterlingRegularDuotone, PoundSterlingRegularDuotone as PoundSterlingRegularDuotoneIcon, PoundSterlingRegularDuotone as SiPoundSterlingRegularDuotone };
export default PoundSterlingRegularDuotone;
export type { PoundSterlingRegularDuotoneProps };
