import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HeartRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeartRegularDuotone = memo(
  forwardRef<SVGSVGElement, HeartRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="heart-duotone" {...props}>
      <path fill="currentColor" d="M16.76 2.25a6.04 6.04 0 0 1 5.99 6.09 9.4 9.4 0 0 1-1.86 5.26c-2.45 3.5-5.88 5.91-8.42 7.98l.11-.1a.75.75 0 0 0-.1-1.06l-.48-.38c2.55-2.04 5.5-4.2 7.67-7.3a8 8 0 0 0 1.58-4.4 4.54 4.54 0 0 0-4.49-4.59 4.5 4.5 0 0 0-4.12 2.75c.12-.2.15-.46.04-.7A6 6 0 0 0 12 4.66a6 6 0 0 1 4.76-2.4" opacity={.4} />
        <path fill="currentColor" d="M7.24 2.25c2.42 0 4.5 1.47 5.44 3.56a.75.75 0 0 1-1.36.61 4.5 4.5 0 0 0-4.08-2.67 4.54 4.54 0 0 0-4.49 4.59c0 2.06 1.1 3.7 1.58 4.4 2.3 3.29 5.5 5.52 8.14 7.68a.75.75 0 1 1-.94 1.16c-2.54-2.07-5.97-4.47-8.42-7.98a9.4 9.4 0 0 1-1.86-5.26 6.04 6.04 0 0 1 5.99-6.09" />
    </IconBase>
  ))
);

HeartRegularDuotone.displayName = 'HeartRegularDuotone';

// Triple export pattern (lucide-react style)
export { HeartRegularDuotone, HeartRegularDuotone as HeartRegularDuotoneIcon, HeartRegularDuotone as SiHeartRegularDuotone };
export type { HeartRegularDuotoneProps };
