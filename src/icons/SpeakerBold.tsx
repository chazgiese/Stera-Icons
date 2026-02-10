import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerBoldProps = Omit<IconBaseProps, 'children'>;

const SpeakerBold = memo(
  forwardRef<SVGSVGElement, SpeakerBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.16 4.43A2.25 2.25 0 0 1 17 6.02v11.96c0 2-2.42 3.01-3.84 1.6l-3.5-3.5a.3.3 0 0 0-.18-.08H7.25a2.25 2.25 0 0 1-2.24-2.02L5 13.75v-3.5C5 9 6 8 7.25 8h2.23q.1 0 .18-.07zM15 6.02a.25.25 0 0 0-.43-.18l-3.5 3.5c-.42.42-1 .66-1.59.66H7.25a.25.25 0 0 0-.25.25v3.55q.06.18.25.2h2.23c.6 0 1.17.24 1.6.66l3.5 3.5c.15.16.42.04.42-.18z" clipRule="evenodd" />
    </IconBase>
  ))
);

SpeakerBold.displayName = 'SpeakerBold';

// Triple export pattern (lucide-react style)
export { SpeakerBold, SpeakerBold as SpeakerBoldIcon, SpeakerBold as SiSpeakerBold };
export default SpeakerBold;
export type { SpeakerBoldProps };
