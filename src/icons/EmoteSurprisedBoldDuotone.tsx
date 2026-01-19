import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteSurprisedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EmoteSurprisedBoldDuotone = memo(
  forwardRef<SVGSVGElement, EmoteSurprisedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="emote-surprised-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 14c2.2 0 4 .5 4 2s-1.8 2-4 2-4-.5-4-2 1.8-2 4-2M8.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M15.5 7.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

EmoteSurprisedBoldDuotone.displayName = 'EmoteSurprisedBoldDuotone';

// Triple export pattern (lucide-react style)
export { EmoteSurprisedBoldDuotone, EmoteSurprisedBoldDuotone as EmoteSurprisedBoldDuotoneIcon, EmoteSurprisedBoldDuotone as SiEmoteSurprisedBoldDuotone };
export type { EmoteSurprisedBoldDuotoneProps };
