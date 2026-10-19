import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GlobeRegularDuotone = memo(
  forwardRef<SVGSVGElement, GlobeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c.3 0 .57.18.69.45.12.28.06.6-.15.81-4.76 5.05-4.76 12.93 0 17.98.21.21.27.53.15.8-.12.28-.4.46-.69.46-5.66 0-10.25-4.59-10.25-10.25S6.34 1.75 12 1.75m-8.72 11c.34 3.9 3.22 7.07 6.98 7.83-1.7-2.34-2.63-5.07-2.77-7.83zm6.98-9.33c-3.76.76-6.64 3.93-6.98 7.83H7.5c.14-2.76 1.07-5.49 2.77-7.83" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12.53 1.76c5.41.28 9.72 4.76 9.72 10.24s-4.3 9.96-9.72 10.24l-.53.01c.3 0 .57-.18.69-.45.12-.28.06-.6-.15-.81q-.28-.3-.54-.62c1.85-2.22 2.85-4.9 3-7.62H9q-.04-.75 0-1.5h6c-.15-2.72-1.15-5.4-3-7.62l.54-.62c.21-.21.27-.53.15-.8-.1-.25-.33-.41-.58-.45L12 1.75zm3.98 10.99c-.14 2.76-1.07 5.49-2.77 7.83 3.76-.76 6.64-3.93 6.98-7.83zm-2.77-9.33c1.7 2.34 2.63 5.07 2.77 7.83h4.2c-.33-3.9-3.21-7.07-6.97-7.83" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeRegularDuotone.displayName = 'GlobeRegularDuotone';

// Triple export pattern
export { GlobeRegularDuotone, GlobeRegularDuotone as GlobeRegularDuotoneIcon, GlobeRegularDuotone as SiGlobeRegularDuotone };
export default GlobeRegularDuotone;
export type { GlobeRegularDuotoneProps };
