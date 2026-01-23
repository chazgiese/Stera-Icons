import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerMediumBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerMediumBoldDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerMediumBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-medium-bold-duotone" {...props}>
      <path d="M18.75 5.35a1 1 0 0 1 1.4.19 10.2 10.2 0 0 1-.27 12.76 1 1 0 0 1-1.54-1.28 8.2 8.2 0 0 0 .22-10.27 1 1 0 0 1 .2-1.4" opacity={0.4} />
        <path d="M15.9 7.55a1 1 0 0 1 1.4.18 7 7 0 0 1 0 8.54 1 1 0 1 1-1.59-1.22 5 5 0 0 0 0-6.1 1 1 0 0 1 .19-1.4" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M9.9 4.43a2.25 2.25 0 0 1 3.85 1.59v11.96c0 2-2.42 3.01-3.84 1.6l-3.5-3.5a.3.3 0 0 0-.18-.08H4a2.25 2.25 0 0 1-2.24-2.02l-.01-.23v-3.5C1.75 9.01 2.75 8 4 8h2.23q.1 0 .18-.07zm1.85 1.59a.25.25 0 0 0-.43-.18l-3.5 3.5c-.42.42-1 .66-1.59.66H4a.25.25 0 0 0-.25.25v3.55q.06.18.25.2h2.23c.6 0 1.17.24 1.6.66l3.5 3.5c.15.16.42.04.42-.18z" clipRule="evenodd" />
    </IconBase>
  ))
);

SpeakerMediumBoldDuotone.displayName = 'SpeakerMediumBoldDuotone';

// Triple export pattern (lucide-react style)
export { SpeakerMediumBoldDuotone, SpeakerMediumBoldDuotone as SpeakerMediumBoldDuotoneIcon, SpeakerMediumBoldDuotone as SiSpeakerMediumBoldDuotone };
export default SpeakerMediumBoldDuotone;
export type { SpeakerMediumBoldDuotoneProps };
