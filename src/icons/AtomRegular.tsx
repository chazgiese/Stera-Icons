import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AtomRegularProps = Omit<IconBaseProps, 'children'>;

const AtomRegular = memo(
  forwardRef<SVGSVGElement, AtomRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom" {...props}>
      <path fill="currentColor" d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M3.3 3.3c1.55-1.54 3.85-1.2 5.97-.2q1.35.64 2.73 1.62 1.39-.98 2.73-1.62c2.12-1 4.42-1.34 5.96.2 1.55 1.55 1.2 3.85.2 5.97q-.62 1.35-1.62 2.73.99 1.39 1.63 2.73c1 2.12 1.34 4.42-.2 5.97-1.55 1.54-3.85 1.2-5.97.2q-1.35-.64-2.73-1.62a18 18 0 0 1-2.73 1.62c-2.12 1-4.42 1.34-5.97-.2-1.54-1.55-1.2-3.85-.2-5.97q.64-1.35 1.62-2.73-.98-1.39-1.62-2.73c-1-2.12-1.34-4.42.2-5.97m2.37 9.96q-.74 1.09-1.2 2.1c-.96 2.03-.92 3.45-.1 4.27.81.82 2.24.86 4.27-.1q1.01-.46 2.1-1.2a33 33 0 0 1-5.07-5.07m12.65 0a33 33 0 0 1-5.06 5.06q1.09.74 2.1 1.22c2.03.95 3.45.91 4.27.1.82-.83.86-2.25-.1-4.28q-.47-1.01-1.2-2.1M12 6.59A31 31 0 0 0 6.59 12 31 31 0 0 0 12 17.4a31 31 0 0 0 5.4-5.4A31 31 0 0 0 12 6.6M8.64 4.46c-2.03-.95-3.46-.91-4.28-.1-.81.82-.85 2.25.1 4.28q.48 1.01 1.21 2.1a33 33 0 0 1 5.07-5.07q-1.09-.74-2.1-1.2m11-.1c-.83-.81-2.25-.85-4.28.1q-1.01.48-2.1 1.21a33 33 0 0 1 5.06 5.07q.74-1.09 1.22-2.1c.95-2.03.91-3.46.1-4.27" clipRule="evenodd" />
    </IconBase>
  ))
);

AtomRegular.displayName = 'AtomRegular';

// Triple export pattern (lucide-react style)
export { AtomRegular, AtomRegular as AtomRegularIcon, AtomRegular as SiAtomRegular };
export type { AtomRegularProps };
