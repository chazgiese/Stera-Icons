import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrashRegularDuotone = memo(
  forwardRef<SVGSVGElement, TrashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trash-duotone" {...props}>
      <path d="M19.66 15.1q-.1 1.53-.23 2.51c-.1.67-.25 1.24-.54 1.75-.48.83-1.2 1.5-2.05 1.92-.54.25-1.1.36-1.78.42q-1 .06-2.53.05h-1.06q-1.54.01-2.53-.05a5 5 0 0 1-1.77-.42 4.8 4.8 0 0 1-2.06-1.92 5 5 0 0 1-.54-1.75q-.14-.97-.23-2.52L3.8 7.25h1.5l.54 7.74c.07 1.06.12 1.81.21 2.4s.2.94.36 1.22q.51.87 1.4 1.32c.3.14.67.23 1.25.27.6.05 1.35.05 2.41.05h1.06c1.06 0 1.81 0 2.4-.05a3 3 0 0 0 1.25-.27 3.3 3.3 0 0 0 1.4-1.32c.17-.28.28-.64.37-1.22.09-.59.14-1.34.21-2.4l.54-7.74h1.5z" opacity={.4} />
        <path d="M9.45 10.25c.41-.03.77.29.8.7l.38 5.5a.75.75 0 0 1-1.5.1l-.38-5.5a.75.75 0 0 1 .7-.8M14.55 10.25c.41.03.73.39.7.8l-.38 5.5a.75.75 0 0 1-1.5-.1l.38-5.5a.75.75 0 0 1 .8-.7" />
        <path fillRule="evenodd" d="M13.26 2.25c1.2 0 2.23.82 2.5 1.98l.34 1.52H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h4.9l.35-1.52a2.55 2.55 0 0 1 2.49-1.98zm-2.52 1.5c-.5 0-.92.34-1.03.82l-.27 1.18h5.12l-.27-1.18c-.11-.48-.54-.82-1.03-.82z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrashRegularDuotone.displayName = 'TrashRegularDuotone';

// Triple export pattern (lucide-react style)
export { TrashRegularDuotone, TrashRegularDuotone as TrashRegularDuotoneIcon, TrashRegularDuotone as SiTrashRegularDuotone };
export default TrashRegularDuotone;
export type { TrashRegularDuotoneProps };
