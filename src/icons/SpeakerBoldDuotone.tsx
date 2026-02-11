import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerBoldDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-bold-duotone" {...props}>
      <path d="M9.3 8.3A1 1 0 0 0 10 10H7.25a.25.25 0 0 0-.25.25v3.5c0 .14.11.25.25.25H10a1 1 0 0 1-.7.3 1 1 0 0 0 0 1.4l.29.3H7.25C6.01 16 5 15 5 13.75v-3.5C5 9.01 6 8 7.25 8h2.34zM10.6 9.8" opacity={0.4} />
        <path d="M13.16 4.43A2.25 2.25 0 0 1 17 6.02v11.96c0 2-2.42 3.01-3.84 1.6L9.29 15.7a1 1 0 0 1 1.42-1.42l3.86 3.87c.16.16.43.05.43-.18V6.02a.25.25 0 0 0-.43-.18l-3.86 3.87a1 1 0 1 1-1.42-1.42z" />
    </IconBase>
  ))
);

SpeakerBoldDuotone.displayName = 'SpeakerBoldDuotone';

// Triple export pattern (lucide-react style)
export { SpeakerBoldDuotone, SpeakerBoldDuotone as SpeakerBoldDuotoneIcon, SpeakerBoldDuotone as SiSpeakerBoldDuotone };
export default SpeakerBoldDuotone;
export type { SpeakerBoldDuotoneProps };
