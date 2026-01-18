import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteGrinFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteGrinFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M8 14a1 1 0 0 0-.8 1.6 6 6 0 0 0 9.6 0A1 1 0 0 0 16 14zm.5-6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 14a1 1 0 0 1 .8 1.6 6 6 0 0 1-9.6 0A1 1 0 0 1 8 14zM8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

EmoteGrinFillDuotone.displayName = 'EmoteGrinFillDuotone';

// Triple export pattern (lucide-react style)
export { EmoteGrinFillDuotone, EmoteGrinFillDuotone as EmoteGrinFillDuotoneIcon, EmoteGrinFillDuotone as SiEmoteGrinFillDuotone };
export type { EmoteGrinFillDuotoneProps };
