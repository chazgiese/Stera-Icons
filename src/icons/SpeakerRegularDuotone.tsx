import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpeakerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpeakerRegularDuotone = memo(
  forwardRef<SVGSVGElement, SpeakerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="speaker-duotone" {...props}>
      <path d="M9.47 8.47A.75.75 0 0 0 10 9.75H7.25a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5H10a.75.75 0 0 0-.53 1.28l.22.22H7.25a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2h2.44z" opacity={.4} />
        <path d="M13.34 4.6a2 2 0 0 1 3.41 1.42v11.96a2 2 0 0 1-3.41 1.42l-3.87-3.87a.75.75 0 1 1 1.06-1.06l3.87 3.87c.31.31.85.09.85-.36V6.02a.5.5 0 0 0-.85-.36l-3.87 3.87a.75.75 0 0 1-1.06-1.06z" />
    </IconBase>
  ))
);

SpeakerRegularDuotone.displayName = 'SpeakerRegularDuotone';

// Triple export pattern (lucide-react style)
export { SpeakerRegularDuotone, SpeakerRegularDuotone as SpeakerRegularDuotoneIcon, SpeakerRegularDuotone as SiSpeakerRegularDuotone };
export default SpeakerRegularDuotone;
export type { SpeakerRegularDuotoneProps };
