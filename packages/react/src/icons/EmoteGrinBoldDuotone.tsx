import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteGrinBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteGrinBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 14a1 1 0 0 1 .8 1.6 6 6 0 0 1-9.6 0A1 1 0 0 1 8 14zM8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

EmoteGrinBoldDuotone.displayName = 'EmoteGrinBoldDuotone';

// Triple export pattern (lucide-react style)
export { EmoteGrinBoldDuotone, EmoteGrinBoldDuotone as EmoteGrinBoldDuotoneIcon, EmoteGrinBoldDuotone as SiEmoteGrinBoldDuotone };
export type { EmoteGrinBoldDuotoneProps };
