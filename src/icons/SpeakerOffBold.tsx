import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpeakerOffBoldProps = Omit<IconBaseProps, 'children'>;

const SpeakerOffBold = memo(
  forwardRef<SVGSVGElement, SpeakerOffBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-off-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3.3 3.3a1 1 0 0 1 1.4 0l16 16a1 1 0 0 1-1.4 1.4l-2.33-2.32a2.25 2.25 0 0 1-3.81 1.2l-3.5-3.5a.3.3 0 0 0-.18-.08H7.25a2.25 2.25 0 0 1-2.24-2.02L5 13.75v-3.5c0-1.04.7-1.91 1.67-2.17L3.29 4.7a1 1 0 0 1 0-1.42M7.24 10a.25.25 0 0 0-.25.25v3.55q.06.18.25.2h2.23c.6 0 1.17.24 1.6.66l3.5 3.5c.15.16.42.05.42-.18v-1.57L8.59 10z" clipRule="evenodd" />
        <path fill="currentColor" d="M13.16 4.43A2.25 2.25 0 0 1 17 6.02v5.73a1 1 0 0 1-2 0V6.02a.25.25 0 0 0-.43-.18L12.33 8.1a1 1 0 0 1-1.42-1.42z" />
    </IconBase>
  ))
);

SpeakerOffBold.displayName = 'SpeakerOffBold';

// Triple export pattern (lucide-react style)
export { SpeakerOffBold, SpeakerOffBold as SpeakerOffBoldIcon, SpeakerOffBold as SiSpeakerOffBold };
export type { SpeakerOffBoldProps };
