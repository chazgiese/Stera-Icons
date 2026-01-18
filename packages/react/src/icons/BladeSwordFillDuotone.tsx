import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BladeSwordFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BladeSwordFillDuotone = memo(
  forwardRef<SVGSVGElement, BladeSwordFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M2.47 2.47a.8.8 0 0 1 .71-.2l4 1q.2.06.35.2l9.3 9.3-4.07 4.05-9.29-9.29a1 1 0 0 1-.17-.25l-.03-.1-1-4a.8.8 0 0 1 .2-.71" opacity={.4} />
        <path fill="currentColor" d="M18.3 11.3a1 1 0 1 1 1.4 1.4L18 14.42v2.18l2.04 2.04 1.22.4q.28.1.49.3l.28.29c.49.48.49 1.28 0 1.76l-.65.65c-.45.46-1.18.49-1.67.09l-.1-.09-.27-.28q-.16-.15-.25-.36l-.06-.13-.4-1.22L16.59 18H14.4l-1.7 1.7a1 1 0 0 1-1.42-1.4z" />
    </IconBase>
  ))
);

BladeSwordFillDuotone.displayName = 'BladeSwordFillDuotone';

export { BladeSwordFillDuotone };
export type { BladeSwordFillDuotoneProps };
