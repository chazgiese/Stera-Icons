import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomRegularDuotone = memo(
  forwardRef<SVGSVGElement, AtomRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3.3 3.3c1.55-1.54 3.85-1.2 5.97-.2q1.35.64 2.73 1.62 1.39-.98 2.73-1.62c2.12-1 4.42-1.34 5.97.2 1.54 1.55 1.19 3.85.2 5.97q-.64 1.35-1.62 2.73.98 1.39 1.62 2.73c.99 2.12 1.34 4.42-.2 5.97-1.55 1.54-3.85 1.19-5.97.2q-1.35-.64-2.73-1.62-1.39.98-2.73 1.62c-2.12.99-4.42 1.34-5.97-.2-1.54-1.55-1.2-3.85-.2-5.97q.64-1.35 1.62-2.73-.98-1.39-1.62-2.73c-1-2.12-1.34-4.42.2-5.97m2.38 9.96q-.74 1.09-1.22 2.1c-.95 2.03-.91 3.45-.1 4.27s2.25.86 4.28-.1q1.01-.47 2.1-1.2a33 33 0 0 1-5.06-5.07m12.64 0a33 33 0 0 1-5.06 5.06q1.09.74 2.1 1.22c2.03.95 3.45.91 4.27.1.82-.83.86-2.25-.1-4.28q-.47-1.01-1.2-2.1M12 6.59A31 31 0 0 0 6.59 12 31 31 0 0 0 12 17.4a31 31 0 0 0 5.4-5.4A31 31 0 0 0 12 6.59M8.64 4.46c-2.03-.95-3.46-.91-4.28-.1-.81.82-.85 2.25.1 4.28q.48 1.01 1.22 2.1a33 33 0 0 1 5.06-5.06q-1.09-.74-2.1-1.22m11-.1c-.83-.81-2.25-.85-4.28.1q-1.01.48-2.1 1.22a33 33 0 0 1 5.06 5.06q.74-1.09 1.22-2.1c.95-2.03.91-3.46.1-4.28" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

AtomRegularDuotone.displayName = 'AtomRegularDuotone';

// Triple export pattern (lucide-react style)
export { AtomRegularDuotone, AtomRegularDuotone as AtomRegularDuotoneIcon, AtomRegularDuotone as SiAtomRegularDuotone };
export default AtomRegularDuotone;
export type { AtomRegularDuotoneProps };
