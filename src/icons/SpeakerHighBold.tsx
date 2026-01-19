import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpeakerHighBoldProps = Omit<IconBaseProps, 'children'>;

const SpeakerHighBold = memo(
  forwardRef<SVGSVGElement, SpeakerHighBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-high-bold" {...props}>
      <path fill="currentColor" d="M19.77 3.22a1 1 0 0 1 1.4.2A14.3 14.3 0 0 1 24 12c0 3.23-1.05 6.2-2.83 8.58a1 1 0 0 1-1.6-1.2A12.3 12.3 0 0 0 22 12c0-2.79-.91-5.34-2.43-7.38a1 1 0 0 1 .2-1.4" />
        <path fill="currentColor" fillRule="evenodd" d="M8.16 4.43A2.25 2.25 0 0 1 12 6.02v11.96c0 2-2.42 3.01-3.84 1.6l-3.5-3.5a.3.3 0 0 0-.18-.08H2.25a2.25 2.25 0 0 1-2.24-2.02L0 13.75v-3.5C0 9.01 1 8 2.25 8h2.23q.1 0 .18-.07zM10 6.02a.25.25 0 0 0-.43-.18l-3.5 3.5c-.42.42-1 .66-1.59.66H2.25a.25.25 0 0 0-.25.25v3.55q.06.18.25.2h2.23c.6 0 1.17.24 1.6.66l3.5 3.5c.15.16.42.04.42-.18z" clipRule="evenodd" />
        <path fill="currentColor" d="M17 5.35a1 1 0 0 1 1.4.2 10.2 10.2 0 0 1-.27 12.75 1 1 0 0 1-1.54-1.28 8.2 8.2 0 0 0 .22-10.27 1 1 0 0 1 .2-1.4" />
        <path fill="currentColor" d="M14.15 7.55a1 1 0 0 1 1.4.18 7 7 0 0 1 0 8.54 1 1 0 0 1-1.59-1.22 5 5 0 0 0 0-6.1 1 1 0 0 1 .19-1.4" />
    </IconBase>
  ))
);

SpeakerHighBold.displayName = 'SpeakerHighBold';

// Triple export pattern (lucide-react style)
export { SpeakerHighBold, SpeakerHighBold as SpeakerHighBoldIcon, SpeakerHighBold as SiSpeakerHighBold };
export default SpeakerHighBold;
export type { SpeakerHighBoldProps };
