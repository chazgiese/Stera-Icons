import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlienFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlienFillDuotone = memo(
  forwardRef<SVGSVGElement, AlienFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3c4.42 0 8 3.66 8 8.18 0 3.76-3.8 7-6.16 8.65a3.2 3.2 0 0 1-3.68 0C7.8 18.18 4 14.93 4 11.18A8.1 8.1 0 0 1 12 3m2 12.83c0-.42-.4-.73-.8-.63l-.79.2a2 2 0 0 1-.82 0l-.79-.2c-.4-.1-.8.2-.8.63 0 .4.27.74.65.83l.86.22a2 2 0 0 0 .98 0l.86-.22c.38-.1.65-.44.65-.83M8 9a1 1 0 0 0-1 1 3 3 0 0 0 3 3 1 1 0 0 0 1-1 3 3 0 0 0-3-3m8 0a3 3 0 0 0-3 3 1 1 0 0 0 1 1 3 3 0 0 0 3-3 1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.2 15.2c.4-.1.8.2.8.63 0 .4-.27.74-.65.83l-.86.22a2 2 0 0 1-.98 0l-.86-.22a.9.9 0 0 1-.65-.83c0-.42.4-.73.8-.63l.79.2q.41.09.82 0zM8 9a3 3 0 0 1 3 3 1 1 0 0 1-1 1 3 3 0 0 1-3-3 1 1 0 0 1 1-1M16 9a1 1 0 0 1 1 1 3 3 0 0 1-3 3 1 1 0 0 1-1-1 3 3 0 0 1 3-3" />
    </IconBase>
  ))
);

AlienFillDuotone.displayName = 'AlienFillDuotone';

// Triple export pattern (lucide-react style)
export { AlienFillDuotone, AlienFillDuotone as AlienFillDuotoneIcon, AlienFillDuotone as SiAlienFillDuotone };
export type { AlienFillDuotoneProps };
