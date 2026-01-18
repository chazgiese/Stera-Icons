import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilTipRegularProps = Omit<IconBaseProps, 'children'>;

const PencilTipRegular = memo(
  forwardRef<SVGSVGElement, PencilTipRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25q.36 0 .6.29l6.36 8.19c.51.65.79 1.47.79 2.3V22a.75.75 0 0 1-1.5 0v-9.7l-1.39.78c-.84.49-1.88.49-2.72 0l-1.39-.79V22a.75.75 0 0 1-1.5 0v-9.7l-1.39.78c-.84.49-1.88.49-2.72 0l-1.39-.79V22a.75.75 0 0 1-1.5 0v-9.97c0-.83.28-1.65.79-2.3l6.37-8.2.05-.06a.8.8 0 0 1 .54-.22m2.49 5.17a4.8 4.8 0 0 1-4.98 0l-3.29 4.23-.1.13 1.76 1c.38.22.86.22 1.24 0l1.52-.86a2.8 2.8 0 0 1 2.72 0l1.52.86c.38.22.86.22 1.24 0l1.75-1-.1-.13zm-4.05-1.2c.97.54 2.15.54 3.12 0l-1.56-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilTipRegular.displayName = 'PencilTipRegular';

// Triple export pattern (lucide-react style)
export { PencilTipRegular, PencilTipRegular as PencilTipRegularIcon, PencilTipRegular as SiPencilTipRegular };
export type { PencilTipRegularProps };
