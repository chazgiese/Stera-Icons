import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-big-left-duotone" {...props}>
      <path d="M12.12 2.32a1.25 1.25 0 0 1 2.13.89V8a.75.75 0 0 1-1.5 0V3.81l-7.84 7.84a.5.5 0 0 0 0 .7l7.84 7.84V16a.75.75 0 0 1 1.5 0v4.8a1.25 1.25 0 0 1-2.13.88L3.85 13.4a2 2 0 0 1 0-2.82z" />
        <path d="M18.5 7.25c1.24 0 2.25 1 2.25 2.25v5c0 1.24-1 2.25-2.25 2.25h-4.25V16a.75.75 0 0 0-.75-.75h5c.41 0 .75-.34.75-.75v-5a.75.75 0 0 0-.75-.75h-5c.41 0 .75-.34.75-.75v-.75z" opacity={.4} />
    </IconBase>
  ))
);

ArrowBigLeftRegularDuotone.displayName = 'ArrowBigLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowBigLeftRegularDuotone, ArrowBigLeftRegularDuotone as ArrowBigLeftRegularDuotoneIcon, ArrowBigLeftRegularDuotone as SiArrowBigLeftRegularDuotone };
export default ArrowBigLeftRegularDuotone;
export type { ArrowBigLeftRegularDuotoneProps };
