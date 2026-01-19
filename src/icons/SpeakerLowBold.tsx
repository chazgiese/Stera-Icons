import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpeakerLowBoldProps = Omit<IconBaseProps, 'children'>;

const SpeakerLowBold = memo(
  forwardRef<SVGSVGElement, SpeakerLowBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-low-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.66 4.43a2.25 2.25 0 0 1 3.84 1.59v11.96c0 2-2.42 3.01-3.84 1.6l-3.5-3.5a.3.3 0 0 0-.18-.08H5.75a2.25 2.25 0 0 1-2.24-2.02l-.01-.23v-3.5C3.5 9.01 4.5 8 5.75 8h2.23q.1 0 .18-.07zm1.84 1.59a.25.25 0 0 0-.43-.18l-3.5 3.5c-.42.42-1 .66-1.59.66H5.75a.25.25 0 0 0-.25.25v3.55q.06.18.25.2h2.23c.6 0 1.17.24 1.6.66l3.5 3.5c.15.16.42.04.42-.18z" clipRule="evenodd" />
        <path fill="currentColor" d="M17.65 7.55a1 1 0 0 1 1.4.18 7 7 0 0 1 0 8.54 1 1 0 1 1-1.59-1.22 5 5 0 0 0 0-6.1 1 1 0 0 1 .19-1.4" />
    </IconBase>
  ))
);

SpeakerLowBold.displayName = 'SpeakerLowBold';

// Triple export pattern (lucide-react style)
export { SpeakerLowBold, SpeakerLowBold as SpeakerLowBoldIcon, SpeakerLowBold as SiSpeakerLowBold };
export default SpeakerLowBold;
export type { SpeakerLowBoldProps };
