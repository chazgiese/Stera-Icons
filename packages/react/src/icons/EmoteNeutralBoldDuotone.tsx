import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteNeutralBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteNeutralBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteNeutralBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M16 14a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

EmoteNeutralBoldDuotone.displayName = 'EmoteNeutralBoldDuotone';

// Triple export pattern (lucide-react style)
export { EmoteNeutralBoldDuotone, EmoteNeutralBoldDuotone as EmoteNeutralBoldDuotoneIcon, EmoteNeutralBoldDuotone as SiEmoteNeutralBoldDuotone };
export type { EmoteNeutralBoldDuotoneProps };
