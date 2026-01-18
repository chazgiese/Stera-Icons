import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WandFillProps = Omit<IconBaseProps, 'children'>;

const WandFill = memo(
  forwardRef<SVGSVGElement, WandFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M6.8 6.8a1 1 0 0 1 1.19-.17l2.15 1.2a3.8 3.8 0 0 0 3.72 0L16 6.63l.15-.07a1 1 0 0 1 1.21 1.43l-1.2 2.15a3.8 3.8 0 0 0 0 3.72l1.2 2.15a1 1 0 0 1-1.36 1.36l-2.15-1.2a3.8 3.8 0 0 0-3.56-.08l-.06.03-1.03.57a9 9 0 0 0-1.98 1.49L3.7 21.72a1 1 0 1 1-1.42-1.42l3.55-3.55A9 9 0 0 0 7.3 14.8l.54-.96a3.8 3.8 0 0 0 0-3.7L6.62 8a1 1 0 0 1 .16-1.2M18.3 18.3a1 1 0 0 1 1.4 0l1 1a1 1 0 1 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4" />
        <path fill="currentColor" d="M5 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM3.3 3.3a1 1 0 0 1 1.4 0l1 1a1 1 0 1 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4M12 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M19.3 3.3a1 1 0 1 1 1.4 1.4l-1 1a1 1 0 1 1-1.4-1.4z" />
    </IconBase>
  ))
);

WandFill.displayName = 'WandFill';

export { WandFill };
export type { WandFillProps };
