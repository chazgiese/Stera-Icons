import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RepeatRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RepeatRegularDuotone = memo(
  forwardRef<SVGSVGElement, RepeatRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="repeat-duotone" {...props}>
      <path fill="currentColor" d="M21 10.75c.41 0 .75.34.75.75V13A5.75 5.75 0 0 1 16 18.75H4.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H16c2.35 0 4.25-1.9 4.25-4.25v-1.5c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" d="M17.47 2.47c.3-.3.77-.3 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H8A4.25 4.25 0 0 0 3.75 11v1.5a.75.75 0 0 1-1.5 0V11A5.75 5.75 0 0 1 8 5.25h11.19l-1.72-1.72a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

RepeatRegularDuotone.displayName = 'RepeatRegularDuotone';

// Triple export pattern (lucide-react style)
export { RepeatRegularDuotone, RepeatRegularDuotone as RepeatRegularDuotoneIcon, RepeatRegularDuotone as SiRepeatRegularDuotone };
export default RepeatRegularDuotone;
export type { RepeatRegularDuotoneProps };
