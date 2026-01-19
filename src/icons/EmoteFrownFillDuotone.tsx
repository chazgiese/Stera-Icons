import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteFrownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteFrownFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteFrownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-frown-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 12.5a6 6 0 0 0-4.8 2.4 1 1 0 0 0 1.6 1.2 4 4 0 0 1 6.4 0 1 1 0 0 0 1.6-1.2 6 6 0 0 0-4.8-2.4M8.5 7.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 13.5a6 6 0 0 1 4.8 2.4 1 1 0 0 1-1.6 1.2 4 4 0 0 0-6.4 0 1 1 0 0 1-1.6-1.2 6 6 0 0 1 4.8-2.4M8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

EmoteFrownFillDuotone.displayName = 'EmoteFrownFillDuotone';

// Triple export pattern (lucide-react style)
export { EmoteFrownFillDuotone, EmoteFrownFillDuotone as EmoteFrownFillDuotoneIcon, EmoteFrownFillDuotone as SiEmoteFrownFillDuotone };
export type { EmoteFrownFillDuotoneProps };
