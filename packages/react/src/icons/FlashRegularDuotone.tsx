import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m17.09 2.23-2.4 7.48 4.56 1.58a.75.75 0 0 1 .25 1.27l-11.38 10-.03.02q.17-.12.25-.35l.83-2.59 8.37-7.35-4.04-1.4a.75.75 0 0 1-.46-.94l1.8-5.6 2.03-1.79q.17-.15.22-.36z" opacity={.4} />
        <path fill="currentColor" d="M15.88 1.44a.75.75 0 0 1 .99 1.12l-10.4 9.15 4.02 1.4c.39.13.6.55.47.94l-2.62 8.18a.75.75 0 0 1-1.43-.46l2.4-7.48-4.56-1.58a.75.75 0 0 1-.25-1.27z" />
    </IconBase>
  ))
);

FlashRegularDuotone.displayName = 'FlashRegularDuotone';

export { FlashRegularDuotone };
export type { FlashRegularDuotoneProps };
