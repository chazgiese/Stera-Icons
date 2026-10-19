import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderRegularDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m13.6 20.6-.36.06q-.81.11-1.62.08l-8.36-8.36q-.04-.81.08-1.62l.06-.36zM17.32 18.95l-.5.35q-.38.26-.8.47L4.22 7.97q.22-.4.48-.8l.35-.49zM19.77 16.02q-.21.42-.47.8-.16.26-.35.5L6.68 5.05l.5-.35q.38-.26.8-.47zM10.76 3.34q.81-.12 1.62-.08l8.36 8.36q.03.81-.08 1.62l-.06.36L10.4 3.4z" opacity={0.4} />
        <path fillRule="evenodd" d="M10.55 1.85c3.08-.43 6.33.53 8.7 2.9s3.34 5.62 2.9 8.7c-.21 1.47-.74 2.92-1.6 4.2q-.55.85-1.3 1.6t-1.6 1.3c-1.29.86-2.73 1.39-4.2 1.6-3.08.44-6.33-.53-8.7-2.9s-3.34-5.62-2.9-8.7c.21-1.47.74-2.91 1.6-4.2q.55-.85 1.3-1.6t1.6-1.3c1.29-.86 2.73-1.39 4.2-1.6m7.64 3.96c-2.03-2.02-4.8-2.85-7.43-2.47-1.26.18-2.49.63-3.59 1.36q-.72.48-1.36 1.11T4.7 7.18q-1.1 1.67-1.36 3.58c-.38 2.64.45 5.4 2.47 7.43s4.8 2.85 7.43 2.47c1.26-.18 2.49-.63 3.59-1.36q.72-.48 1.36-1.11t1.11-1.36c.73-1.1 1.18-2.33 1.36-3.6.38-2.63-.45-5.4-2.47-7.42" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderRegularDuotone.displayName = 'CirclePlaceholderRegularDuotone';

// Triple export pattern
export { CirclePlaceholderRegularDuotone, CirclePlaceholderRegularDuotone as CirclePlaceholderRegularDuotoneIcon, CirclePlaceholderRegularDuotone as SiCirclePlaceholderRegularDuotone };
export default CirclePlaceholderRegularDuotone;
export type { CirclePlaceholderRegularDuotoneProps };
