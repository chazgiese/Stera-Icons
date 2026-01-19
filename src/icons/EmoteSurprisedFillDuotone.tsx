import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteSurprisedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedFillDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-surprised-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 13c-2.2 0-4 .5-4 2s1.8 2 4 2 4-.5 4-2-1.8-2-4-2M8.5 7.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 14c2.2 0 4 .5 4 2s-1.8 2-4 2-4-.5-4-2 1.8-2 4-2M8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

EmoteSurprisedFillDuotone.displayName = 'EmoteSurprisedFillDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSurprisedFillDuotone, EmoteSurprisedFillDuotone as EmoteSurprisedFillDuotoneIcon, EmoteSurprisedFillDuotone as SiEmoteSurprisedFillDuotone };
export type { EmoteSurprisedFillDuotoneProps };
