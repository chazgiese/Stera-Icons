import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RepeatRegularProps = Omit<IconBaseProps, 'children'>;

const RepeatRegular = memo(
  forwardRef<SVGSVGElement, RepeatRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M22 10.75c.41 0 .75.34.75.75V13A5.75 5.75 0 0 1 17 18.75H3.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3-.1-.14a.75.75 0 0 1 .1-.92l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H17c2.35 0 4.25-1.9 4.25-4.25v-1.5c0-.41.34-.75.75-.75M18.47 2.47c.3-.3.77-.3 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H7A4.25 4.25 0 0 0 2.75 11v1.5a.75.75 0 0 1-1.5 0V11A5.75 5.75 0 0 1 7 5.25h13.19l-1.72-1.72a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

RepeatRegular.displayName = 'RepeatRegular';

// Triple export pattern (lucide-react style)
export { RepeatRegular, RepeatRegular as RepeatRegularIcon, RepeatRegular as SiRepeatRegular };
export type { RepeatRegularProps };
